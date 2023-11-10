const ProfileListSkeleton = ({ prop }: { prop: string }) => {
  const title =
    prop === 'urgent' ? '긴급 도움이 필요해요' : '신규 애니모리 친구들';
  const num = prop === 'home' ? '4' : '8';
  return (
    <div className="mx-16 sm:mx-32 lg:mx-64 my-14">
      <h2 className="flex w-full font-bold text-xl sm:text-2xl items-center whitespace-nowrap">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-3 w-full whitespace-nowrap">
        {[...Array(parseInt(num, 10))].map((n, index) => {
          return (
            <div
              key={index}
              className="w-64 h-28 bg-gray-200 m-2 flex items-center gap-6 ml-20"
            />
          );
        })}
      </div>
      {prop === 'home' && (
        <>
          <h2 className="flex w-full font-bold text-xl sm:text-2xl mt-10 mb-5 items-center whitespace-nowrap">
            {title}
          </h2>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-3 w-full whitespace-nowrap">
            {[...Array(parseInt(num, 10))].map((n, index) => {
              return (
                <div
                  key={index}
                  className="w-64 h-28 bg-gray-200 m-2 flex items-center gap-6 ml-20"
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileListSkeleton;
