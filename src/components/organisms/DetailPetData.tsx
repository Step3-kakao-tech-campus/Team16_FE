import { useState } from 'react';
import { useParams } from 'react-router-dom';
import StringWithLineBreak from 'components/atoms/StringWithLineBrake';
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

  // const { data } = useQuery({
  //   queryKey: ['pet', petId],
  //   queryFn: () => {
  //     return fetch(
  //       `http://ec2-3-37-14-140.ap-northeast-2.compute.amazonaws.com/api/short-forms`,
  //     ).then((res) => res.json());
  //   },
  // });
  /*
  {
  "shelterId" : 1,
  "name": "멍멍이",
  "age": "0년6개월",
  "type": "DOG",
  "sex": "FEMALE",
  "weight": 5.35,
  "description": "귀여운 강아지입니다.",
  "protectionExpirationDate": "2023-10-25", // 보호만료일 null 가능
  "vaccinationStatus": "YES",
  "neutralizationStatus": "YES",
  "adoptionStatus": "NO",
  "profileImageUrl": "https://...",
  "size": "수박만함",
  "polygonProfile": { // 1 ~ 5 정수
    "intelligence": 1, // "영리함 점수"
    "affinity": 1, // "친화력 점수",
    "athletic": 1, // "운동신경 점수",
    "adaptability": 1, //"적응력 점수",
    "activeness": 1, // "활발함 점수"
  }
  
} */

  const labels = ['귀여움', '침착함', '유머감각', '외모', '의젓함'];

  const mockDetailPetInfo: MockDetailPetInfoProps = {
    shelterId: 1,
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
    profileImageUrl: '/assets/logo512.png',
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
