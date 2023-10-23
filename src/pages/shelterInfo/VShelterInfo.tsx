import Pagination from 'commons/VPagenation';
import ProfileCard from 'pages/profileList/ProfileCard';
import { ProfileListProps } from 'pages/profileList/VProfileListHome';
import VShelterCard from './VShelterCard';

export interface ShelterInfoProps {
  name: string;
  id: number;
  adress: string;
  call: string;
}

export interface PageNationProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  lastPage: number;
  maxLength: number;
}

export interface ProfileProps {
  map(
    arg0: (item: any, index: any) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  profileImageUrl: string;
  id: number;
  name: string;
  adoptionStatus: string;
  age: number;
}

export interface Props {
  profileProps: ProfileProps;
  shelterInfoProps: ShelterInfoProps;
  pageNationProps: PageNationProps;
}

const VShelterInfo = (props: Props) => {
  return (
    <div>
      <div className="mt-8 sm:mt-20">
        <VShelterCard {...props.shelterInfoProps} />
      </div>
      <div className="mx-16 sm:mx-40 lg:mx-64 my-14">
        <h2 className="flex w-full font-bold text-xl sm:text-2xl items-center whitespace-nowrap">
          관리중인 동물
        </h2>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-10 w-full whitespace-nowrap">
          {props.profileProps.map((item, index) => (
            <ProfileCard
              key={index}
              petId={item.id}
              petName={item.name}
              petAge={item.age}
              shelterName={''}
              {...item}
            />
          ))}
        </div>
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
};

export default VShelterInfo;
