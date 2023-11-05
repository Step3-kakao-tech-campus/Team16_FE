import ProfileCard from 'pages/profileList/ProfileCard';
import Pagination from '../../../commons/Pagenation';
import { SosListProps } from '../VProfileListHome';

export interface PageNationProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  lastPage: number;
  maxLength: number;
}

export interface Props {
  profileListProps: SosListProps;
  pageNationProps: PageNationProps;
}

const VUrgentList = (props: Props) => {
  return (
    <div className="mx-16 sm:mx-40 lg:mx-64 my-14">
      <h2 className="flex w-full font-bold text-xl sm:text-2xl mb-5 items-center whitespace-nowrap">
        긴급 도움이 필요해요!
      </h2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-1 w-full whitespace-nowrap">
        {props.profileListProps.map((sosItem, index) => (
          <ProfileCard
            key={index}
            adoptionStatus={sosItem.protectionExpirationDate}
            {...sosItem}
          />
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
};

export default VUrgentList;
