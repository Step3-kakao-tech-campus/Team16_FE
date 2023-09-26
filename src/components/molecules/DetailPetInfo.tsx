import VDetailPetInfo from './VDetailPetInfo';

interface DetailPetInfoProps {
  name: string;
  age: string;
  sex: string;
  weight: number;
  description: string;
}

const DetailPetInfo = (data: DetailPetInfoProps) => {
  return <VDetailPetInfo {...data} />;
};

export default DetailPetInfo;
