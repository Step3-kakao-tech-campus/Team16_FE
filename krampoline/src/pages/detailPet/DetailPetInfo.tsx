import { DetailPetInfoProps } from 'pages/detailPet/VDetailPetData';
import VDetailPetInfo from './VDetailPetInfo';

const DetailPetInfo = (data: DetailPetInfoProps) => {
  return <VDetailPetInfo {...data} />;
};

export default DetailPetInfo;
