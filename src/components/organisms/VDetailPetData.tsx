import RadarChart from 'components/atoms/RadarChart';
import DetailPetInfo from 'components/molecules/DetailPetInfo';
import { radarChartProps, mockDetailPetInfoProps } from './DetailPetData';

interface Props {
  radarChartProps: radarChartProps;
  mockDetailPetInfoProps: mockDetailPetInfoProps;
}

const VDetailPetData = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <DetailPetInfo {...props.mockDetailPetInfoProps} />
      <RadarChart {...props.radarChartProps} />
    </div>
  );
};

export default VDetailPetData;
