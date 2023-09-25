import { useEffect, useState } from 'react';
import VDetailPetData from './VDetailPetData';

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

const DetailPetData = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvas) {
      return;
    }
  }, [canvas]);

  const labels = ['귀여움', '침착함', '유머감각', '외모', '의젓함'];
  const data = [3, 2, 3, 5, 4];

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
    data,
    willAnimate: true,
  };

  const vDetailPetDataProps = {
    radarChartProps,
    mockDetailPetInfoProps: mockDetailPetInfo,
  };

  return <VDetailPetData {...vDetailPetDataProps} />;
};

export default DetailPetData;
