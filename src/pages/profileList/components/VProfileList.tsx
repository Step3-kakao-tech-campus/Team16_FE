import Pagination from 'commons/components/VPagenation';
import ProfileCard from './ProfileCard';
import { ProfileListProps } from '../profileListType';

const VProfileList = ({
  profileProps,
  title,
}: {
  profileProps: ProfileListProps;
  title: string;
}) => {
  return (
    <div className="mx-16 sm:mx-32 lg:mx-64 my-14">
      <h2 className="flex w-full font-bold text-xl sm:text-2xl mb-10 items-center whitespace-nowrap">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-1 w-full whitespace-nowrap">
        {profileProps.listProps.map((item, index) => (
          <ProfileCard
            key={index}
            status={
              item.adoptionStatus
                ? item.adoptionStatus
                : item.protectionExpirationDate
            }
            {...item}
          />
        ))}
      </div>
      <div className="flex justify-center mt-7 mb-11 sm:mb-28">
        <Pagination
          currentPage={profileProps.pageProps.currentPage}
          lastPage={profileProps.pageProps.lastPage}
          maxLength={7}
          setCurrentPage={profileProps.pageProps.setCurrentPage}
        />
      </div>
    </div>
  );
};

export default VProfileList;
