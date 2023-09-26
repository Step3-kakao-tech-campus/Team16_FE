import { useEffect, useState } from 'react';
import VDetailPetData from './VDetailPetData';
// import { useQuery } from '@tanstack/react-query';

export interface radarChartProps {
  setCanvas: React.Dispatch<React.SetStateAction<HTMLCanvasElement | null>>;
  width: number;
  height: number;
  canvas: HTMLCanvasElement | null;
  labels: string[];
  data: number[];
  willAnimate: boolean;
}
export interface mockDetailPetInfoProps {
  name: string;
  age: string;
  sex: string;
  weight: number;
  description: string;
}

const DetailPetData = ({ petId }: { petId: number }) => {
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

  useEffect(() => {
    if (!canvas) {
      return;
    }
  }, [canvas]);

  const labels = ['귀여움', '침착함', '유머감각', '외모', '의젓함'];
  const mData = [3, 2, 3, 5, 4];

  const mockDetailPetInfo: mockDetailPetInfoProps = {
    name: '뽀삐',
    age: '3살',
    sex: '수컷',
    weight: 5,
    description: '뽀삐는 귀여움이 넘치는 강아지입니다.',
  };
  const radarChartProps: radarChartProps = {
    setCanvas,
    width: 240,
    height: 240,
    canvas,
    labels,
    data: mData,
    willAnimate: true,
  };

  const vDetailPetDataProps = {
    radarChartProps,
    mockDetailPetInfoProps: mockDetailPetInfo,
  };

  return <VDetailPetData {...vDetailPetDataProps} />;
};

export default DetailPetData;
