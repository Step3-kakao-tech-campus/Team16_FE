import ProfileCard from 'pages/profileList/components/ProfileCard';
import Pagination from '../../../commons/Pagenation';
import { VNewListProps } from '../profileListType';

const VNewList = (props: VNewListProps) => (
  <div className="mx-16 sm:mx-40 lg:mx-64 my-14">
    <h2 className="flex w-full font-bold text-xl sm:text-2xl mb-5 items-center whitespace-nowrap">
      신규 애니모리 친구들
    </h2>
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-1 w-full whitespace-nowrap">
      {props.profileListProps.map((newItem, index) => (
        <ProfileCard key={index} {...newItem} />
      ))}
    </div>
    <div className="flex justify-center mt-5 mb-11 sm:mb-28">
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
