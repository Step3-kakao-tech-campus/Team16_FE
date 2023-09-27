import RadarChart from 'components/atoms/RadarChart';
import DetailPetInfo from 'components/molecules/DetailPetInfo';

export interface RadarChartProps {
  setCanvas: React.Dispatch<React.SetStateAction<HTMLCanvasElement | null>>;
  width: number;
  height: number;
  canvas: HTMLCanvasElement | null;
  labels: string[];
  data: number[];
  willAnimate: boolean;
}
export interface MockDetailPetInfoProps {
  name: string;
  age: string;
  sex: string;
  weight: number;
  description: string;
}

interface Props {
  mockDetailPetInfoProps: MockDetailPetInfoProps;
  radarChartProps: RadarChartProps;
}

const VDetailPetData = ({ mockDetailPetInfoProps, radarChartProps }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <img src="assets/logo512.png" alt="z" />
      <DetailPetInfo {...mockDetailPetInfoProps} />
      <RadarChart {...radarChartProps} />
    </div>
  );
};

export default VDetailPetData;
