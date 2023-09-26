import RadarChart, { PolygonProfile } from 'components/atoms/RadarChart';
import DetailPetInfo from 'components/molecules/DetailPetInfo';

export interface RadarChartProps {
  setCanvas: React.Dispatch<React.SetStateAction<HTMLCanvasElement | null>>;
  width: number;
  height: number;
  canvas: HTMLCanvasElement | null;
  labels: string[];
  data: PolygonProfile;
  willAnimate: boolean;
}
export interface MockDetailPetInfoProps {
  shelterId: number;
  name: string;
  age: string;
  sex: string;
  weight: number;
  description: string;
  protectionExpirationDate: string | null;
  vaccinationStatus: string;
  neutralizationStatus: string;
  adoptionStatus: string;
  profileImageUrl: string;
  size: string;
  polygonProfile: PolygonProfile;
}

interface Props {
  mockDetailPetInfoProps: MockDetailPetInfoProps;
  radarChartProps: RadarChartProps;
}

const VDetailPetData = ({ mockDetailPetInfoProps, radarChartProps }: Props) => {
  return (
    <div className="flex items-center flex-col justify-center md:flex-row">
      <img src={mockDetailPetInfoProps.profileImageUrl} alt="z" />
      <div className="flex flex-col items-center">
        <DetailPetInfo {...mockDetailPetInfoProps} />
        <RadarChart {...radarChartProps} />
      </div>
    </div>
  );
};

export default VDetailPetData;
