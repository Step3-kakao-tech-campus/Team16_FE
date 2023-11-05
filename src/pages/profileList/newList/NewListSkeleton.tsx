const NewListSkeleton = () => {
  return (
    <div className="mx-16 sm:mx-40 lg:mx-64 my-14">
      <h2 className="flex w-full font-bold text-xl sm:text-2xl items-center whitespace-nowrap">
        신규 애니모리 친구들
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
      <div className="flex justify-center mb-11 sm:mb-28"></div>
    </div>
  );
};

export default NewListSkeleton;
