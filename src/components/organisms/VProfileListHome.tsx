import ProfileCard from 'components/molecules/ProfileCard';

export interface ProfileListProps {
  id: number;
  name: string;
  age: number;
  shelter: string;
  state: string;
}

const VProfileListHome = (profileListProps: ProfileListProps) => {
  return (
    <div>
      <div>
        <ProfileCard {...profileListProps} />
      </div>
    </div>
  );
};

export default VProfileListHome;
