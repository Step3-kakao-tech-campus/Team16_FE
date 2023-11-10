import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VDetailPetData from './VDetailPetData';
import { RadarChartProps } from '../detailPetType';

const DetailPetData = () => {
  const params = useParams();
  const petId = params.id;
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [modal, setModal] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['pet', petId],
    queryFn: () => {
      return fetch(`${process.env.REACT_APP_URI}/pet/${petId}`).then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 404) {
          throw new Error('해당 친구를 찾을 수 없어요...');
        }
        throw new Error('데이터 로드 중 문제가 생겼어요...');
      });
    },
    suspense: true,
  });
  if (isLoading) return <div>로딩중</div>;
  const labels = ['영리함', '친화력', '운동신경', '적응력', '활발함'];

  const radarChartProps: RadarChartProps = {
    setCanvas,
    width: 400,
    height: 400,
    canvas,
    labels,
    data: data?.response?.petPolygonProfileDto,
    willAnimate: true,
  };

  const vDetailPetDataProps = {
    radarChartProps,
    detailPetInfoProps: data.response,
    modal,
    handleModalImageClick: () => setModal(true),
    handleModalCloseClick: () => setModal(false),
    handleModalOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        setModal(false);
      }
    },
    imageUrl: data.response.profileImageUrl,
  };

  return <VDetailPetData {...vDetailPetDataProps} />;
};

export default DetailPetData;
