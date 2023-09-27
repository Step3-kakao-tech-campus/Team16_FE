import { useState } from 'react';
import { useParams } from 'react-router-dom';
import VDetailPetData, {
  MockDetailPetInfoProps,
  RadarChartProps,
} from './VDetailPetData';
// import { useQuery } from '@tanstack/react-query';

const DetailPetData = () => {
  const params = useParams();
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  // const { data } = useQuery({
  //   queryKey: ['pet', petId],
  //   queryFn: () => {
  //     return fetch(`http://localhost:8080/pet/${petId}`).then((res) =>
  //       res.json(),
  //     );
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
    description: '뽀삐는 귀여움이 넘치는 강아지입니다.',
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
    width: 240,
    height: 240,
    canvas,
    labels,
    data: mockDetailPetInfo.polygonProfile,
    willAnimate: true,
  };

  const vDetailPetDataProps = {
    radarChartProps,
    mockDetailPetInfoProps: mockDetailPetInfo,
  };

  return <VDetailPetData {...vDetailPetDataProps} />;
};

export default DetailPetData;
