import ShelterCard from 'components/molecules/ShelterCard';

export interface ShelterInfoProps {
  name: string;
  id: number;
  adress: string;
  call: string;
}

const VShelterInfo = (shelterInfoProps: ShelterInfoProps) => {
  return (
    <div>
      <div>
        <ShelterCard {...shelterInfoProps} />
      </div>
    </div>
  );
};

export default VShelterInfo;
