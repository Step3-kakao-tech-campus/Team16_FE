import ProfileCard from 'pages/profileList/ProfileCard';
import Pagination from '../../../commons/Pagenation';
import { NewListProps } from '../VProfileListHome';

export interface PageNationProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  lastPage: number;
  maxLength: number;
}

export interface Props {
  profileListProps: NewListProps;
  pageNationProps: PageNationProps;
}

const VNewList = (props: Props) => (
  <div className="mx-16 sm:mx-40 lg:mx-64 my-14">
    <h2 className="flex w-full font-bold text-xl sm:text-2xl items-center whitespace-nowrap">
      신규 애니모리 친구들
    </h2>
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-10 w-full whitespace-nowrap">
      {props.profileListProps.map((newItem, index) => (
        <ProfileCard key={index} {...newItem} />
      ))}
    </div>
    <div className="flex justify-center mb-11 sm:mb-28">
      <Pagination
        currentPage={props.pageNationProps.currentPage}
        lastPage={props.pageNationProps.lastPage}
        maxLength={7}
        setCurrentPage={props.pageNationProps.setCurrentPage}
      />
    </div>
  </div>
);

export default VNewList;
