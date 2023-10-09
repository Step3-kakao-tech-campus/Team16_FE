import { useState } from 'react';
import { useParams } from 'react-router-dom';
import StringWithLineBreak from 'commons/StringWithLineBreak';
import { useQuery } from '@tanstack/react-query';
import VDetailPetData, {
  MockDetailPetInfoProps,
  RadarChartProps,
} from './VDetailPetData';

const DetailPetData = () => {
  const params = useParams();
  const petId = params.id;
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [modal, setModal] = useState(false);

  const { data } = useQuery({
    queryKey: ['pet', petId],
    queryFn: () => {
      return fetch(`${process.env.REACT_APP_URI}/pet/${petId}`).then((res) =>
        res.json(),
      );
    },
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const labels = ['귀여움', '침착함', '유머감각', '외모', '의젓함'];

  const mockDetailPetInfo: MockDetailPetInfoProps = {
    shelterInfo: {
      id: 1,
      name: '광주어찌고보호소',
      contact: '010-2312-2146',
    },
    name: '뽀삐',
    age: '3살',
    sex: 'Male',
    weight: 5,
    description: StringWithLineBreak(
      '뽀삐는 귀여움이 넘치는 강아지입니다. \n착하게 말도 잘 듣고요\n자신의 일을 묵묵히 하는 타입입니다.\n다 크면 10kg 넘을 듯해요.\n개농장에서구조했슴',
    ),
    protectionExpirationDate: '2023-10-25',
    vaccinationStatus: 'YES',
    neutralizationStatus: 'YES',
    adoptionStatus: 'NO',
    profileImageUrl: '/assets/images/logo512.png',
    size: '수박만함',
    polygonProfile: {
      intelligence: 1,
      affinity: 3,
      athletic: 4,
      adaptability: 3,
      activeness: 2,
    },
  };
  const radarChartProps: RadarChartProps = {
    setCanvas,
    width: 400,
    height: 400,
    canvas,
    labels,
    data: mockDetailPetInfo.polygonProfile,
    willAnimate: true,
  };

  const vDetailPetDataProps = {
    radarChartProps,
    mockDetailPetInfoProps: mockDetailPetInfo,
    modal,
    handleModalImageClick: () => setModal(true),
    handleModalCloseClick: () => setModal(false),
    handleModalOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        setModal(false);
      }
    },
    imageUrl: mockDetailPetInfo.profileImageUrl,
  };

  return <VDetailPetData {...vDetailPetDataProps} />;
};

export default DetailPetData;
