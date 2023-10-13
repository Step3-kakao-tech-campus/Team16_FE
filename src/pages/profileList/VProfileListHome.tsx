import ProfileCard from 'pages/profileList/ProfileCard';

export interface ProfileListProps {
  image: string;
  id: number;
  name: string;
  age: number;
  shelter: string;
  state: string;
}

const VProfileListHome = (profileListProps: ProfileListProps) => {
  return (
    <div className="mx-16 sm:mx-72 sm:my-20">
      <h2 className="flex w-full font-bold text-xl sm:text-2xl justify-center items-center whitespace-nowrap">
        긴급 도움이 필요해요!
        <a
          href="profile/urgent/1"
          className="font-normal w-full text-right justify-end text-sm flex sm:float-right text-gray-600"
        >
          더보기
        </a>
      </h2>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 my-10 w-full">
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
      </div>
      <h2 className="flex w-full font-bold text-xl sm:text-2xl justify-center items-center whitespace-nowrap">
        신규 애니모리 친구들
        <a
          href="/profile/new/1"
          className="font-normal w-full text-right justify-end text-sm flex sm:float-right text-gray-600"
        >
          더보기
        </a>
      </h2>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 my-10 w-full">
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
      </div>
    </div>
  );
};

export default VProfileListHome;
