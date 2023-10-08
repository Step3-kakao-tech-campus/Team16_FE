import Pagination from 'commons/VPagenation';
import ProfileCard from 'pages/ProfileList/ProfileCard';
import VShelterCard from './VShelterCard';

export interface ShelterInfoProps {
  name: string;
  id: number;
  adress: string;
  call: string;
}

export interface ProfileListProps {
  image: string;
  id: number;
  name: string;
  age: number;
  shelter: string;
  state: string;
}
export interface PageNationProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  lastPage: number;
  maxLength: number;
}

export interface Props {
  profileListProps: ProfileListProps;
  shelterInfoProps: ShelterInfoProps;
  pageNationProps: PageNationProps;
}

const VShelterInfo = (props: Props) => {
  return (
    <div>
      <div>
        <VShelterCard {...props.shelterInfoProps} />
      </div>
      <div className=" m-20 -mt-10">
        <h2 className="font-bold text-xl sm:text-2xl ml-20">관리중인 동물</h2>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 ml-20">
          <ProfileCard {...props.profileListProps} />
          <ProfileCard {...props.profileListProps} />
          <ProfileCard {...props.profileListProps} />
          <ProfileCard {...props.profileListProps} />
          <ProfileCard {...props.profileListProps} />
          <ProfileCard {...props.profileListProps} />
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination
          currentPage={props.pageNationProps.currentPage}
          lastPage={props.pageNationProps.lastPage}
          maxLength={7}
          setCurrentPage={props.pageNationProps.setCurrentPage}
        />
      </div>
    </div>
  );
};

export default VShelterInfo;
