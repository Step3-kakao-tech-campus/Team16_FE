import ProfileCard from 'pages/profileList/ProfileCard';
import Pagination from '../../../commons/Pagenation';

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

const VNewList = (props: Props) => (
  <div className="mx-16 sm:mx-40 lg:mx-64 my-14">
    <h2 className="flex w-full font-bold text-xl sm:text-2xl items-center whitespace-nowrap">
      신규 애니모리 친구들
    </h2>
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-10 w-full whitespace-nowrap">
      <ProfileCard {...props.profileListProps} />
      <ProfileCard {...props.profileListProps} />
      <ProfileCard {...props.profileListProps} />
      <ProfileCard {...props.profileListProps} />
      <ProfileCard {...props.profileListProps} />
      <ProfileCard {...props.profileListProps} />
      <ProfileCard {...props.profileListProps} />
      <ProfileCard {...props.profileListProps} />
    </div>
    <div className="flex justify-center mb-11 sm:mb-28">
      <Pagination
        currentPage={props.pageNationProps.currentPage}
        lastPage={props.pageNationProps.lastPage}
        maxLength={5}
        setCurrentPage={props.pageNationProps.setCurrentPage}
      />
    </div>
  </div>
);

export default VNewList;
