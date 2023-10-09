import ProfileCard from 'profileList/ProfileCard';
import Pagination from '../../commons/Pagenation';

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
  pageNationProps: PageNationProps;
}

const VUrgentList = (props: Props) => {
  return (
    <div className="m-20">
      <h2 className="font-bold text-xl sm:text-2xl m-10 mr-20  whitespace-nowrap">
        긴급 도움이 필요해요!
      </h2>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 m-10">
        <ProfileCard {...props.profileListProps} />
        <ProfileCard {...props.profileListProps} />
        <ProfileCard {...props.profileListProps} />
        <ProfileCard {...props.profileListProps} />
        <ProfileCard {...props.profileListProps} />
        <ProfileCard {...props.profileListProps} />
        <ProfileCard {...props.profileListProps} />
        <ProfileCard {...props.profileListProps} />
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

export default VUrgentList;
