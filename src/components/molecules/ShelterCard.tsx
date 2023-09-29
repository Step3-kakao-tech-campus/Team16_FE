import { ShelterInfoProps } from 'components/organisms/VShelterInfo';
import VShelterCard from './VShelterCard';

const ShelterCard = (data: ShelterInfoProps) => {
  return <VShelterCard {...data} />;
};

export default ShelterCard;
