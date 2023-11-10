import ProfileCard from 'pages/profileList/components/ProfileCard';
import { ProfileListProps } from '../profileListType';

const VProfileListHome = (profileListProps: ProfileListProps) => {
  return (
    <div className="mx-16 sm:mx-40 lg:mx-64 my-14">
      <h2 className="flex w-full font-bold text-xl sm:text-2xl justify-center items-center mb-5 whitespace-nowrap">
        긴급 도움이 필요해요!
        <a
          href="profile/urgent/1"
          className="font-normal w-full text-right justify-end text-sm flex sm:float-right text-gray-600"
        >
          더보기
        </a>
      </h2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-1 w-full whitespace-nowrap">
        {profileListProps.sosListProps.map((sosItem, index) => (
          <ProfileCard
            key={index}
            adoptionStatus={sosItem.protectionExpirationDate}
            {...sosItem}
          />
        ))}
      </div>
      <h2 className="flex w-full font-bold text-xl sm:text-2xl justify-center mt-10 mb-5 items-center whitespace-nowrap">
        신규 애니모리 친구들
        <a
          href="/profile/new/1"
          className="font-normal w-full text-right justify-end text-sm flex sm:float-right text-gray-600"
        >
          더보기
        </a>
      </h2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-1 w-full whitespace-nowrap">
        {profileListProps.newListProps.map((newItem, index) => (
          <ProfileCard key={index} {...newItem} />
        ))}
      </div>
    </div>
  );
};

export default VProfileListHome;
