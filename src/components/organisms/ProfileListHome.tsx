import VProfileListHome, { ProfileListProps } from './VProfileListHome';

const ProfileListHome = () => {
  const profileListProps: ProfileListProps = {
    id: 1,
    name: '보리',
    age: 1,
    shelter: '광주보호소',
    state: '입양완료',
  };

  // JSX를 VAC로 교체
  return <VProfileListHome {...profileListProps} />;
};
export default ProfileListHome;
