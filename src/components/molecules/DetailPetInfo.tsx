import { MockDetailPetInfoProps } from 'components/organisms/VDetailPetData';
import VDetailPetInfo from './VDetailPetInfo';

const DetailPetInfo = (data: MockDetailPetInfoProps) => {
  return <VDetailPetInfo {...data} />;
};

export default DetailPetInfo;
