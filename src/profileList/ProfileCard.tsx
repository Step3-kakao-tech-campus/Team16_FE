import { ProfileListProps } from 'profileList/VProfileListHome';
import { useNavigate } from 'react-router-dom';
import VProfileCard from './VProfileCard';

const ProfileCard = (data: ProfileListProps) => {
  return <VProfileCard {...data} />;
};
// const navigate = useNavigate();

// export function navigatePet(id: number) {
//   return navigate('pet/$id');
// }

export default ProfileCard;
