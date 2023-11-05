const ProfileListHomeSkeleton = () => {
  return (
    <div className="mx-16 sm:mx-40 lg:mx-64 my-14">
      <h2 className="flex w-full font-bold text-xl sm:text-2xl justify-center items-center whitespace-nowrap">
        긴급 도움이 필요해요!
        <a
          href="profile/urgent/1"
          className="font-normal w-full text-right justify-end text-sm flex sm:float-right text-gray-600"
        >
          더보기
        </a>
      </h2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-5 w-full whitespace-nowrap">
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
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
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-10 w-full whitespace-nowrap">
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
        <div className="w-52 h-24 bg-gray-200 m-2 flex items-center gap-6 ml-20" />
      </div>
    </div>
  );
};

export default ProfileListHomeSkeleton;
