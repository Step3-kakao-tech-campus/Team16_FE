import { ProfileListProps } from 'components/organisms/VProfileListHome';
import VProfileCard from './VProfileCard';

const ProfileCard = (data: ProfileListProps) => {
  return <VProfileCard {...data} />;
};

export default ProfileCard;
