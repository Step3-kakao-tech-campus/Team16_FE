import ProfileCard from "./ProfileCard";

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
    <div className="m-20">
      <h2 className="font-bold text-xl sm:text-2xl m-10 mr-20  whitespace-nowrap">
        긴급 도움이 필요해요!
        <a
          href="profile/urgent/1"
          className="font-normal text-sm flex sm:float-right mt-3 sm:mt-0 text-gray-600"
        >
          더보기
        </a>
      </h2>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 m-10">
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
      </div>
      <h2 className="font-bold text-xl sm:text-2xl m-10 mr-20  whitespace-nowrap">
        신규 애니모리 친구들
        <a
          href="/profile/new/1"
          className="font-normal text-sm flex sm:float-right mt-3 sm:mt-0 text-gray-600"
        >
          더보기
        </a>
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 m-10">
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
        <ProfileCard {...profileListProps} />
      </div>
    </div>
  );
};

export default VProfileListHome;
