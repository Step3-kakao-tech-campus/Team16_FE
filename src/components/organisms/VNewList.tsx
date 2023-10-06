import ProfileCard from 'components/molecules/ProfileCard';
import Pagination from './Pagenation';

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
  <div className="m-20">
    <h2 className="font-bold text-xl sm:text-2xl m-10 mr-20">
      신규 애니모리 친구들
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
        maxLength={5}
        setCurrentPage={props.pageNationProps.setCurrentPage}
      />
    </div>
  </div>
);

export default VNewList;
