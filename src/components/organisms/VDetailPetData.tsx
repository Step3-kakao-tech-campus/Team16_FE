import RadarChart from 'components/atoms/RadarChart';
import DetailPetInfo from 'components/molecules/DetailPetInfo';
import { radarChartProps, mockDetailPetInfoProps } from './DetailPetData';

interface Props {
  mockDetailPetInfoProps: mockDetailPetInfoProps;
  radarChartProps: radarChartProps;
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
