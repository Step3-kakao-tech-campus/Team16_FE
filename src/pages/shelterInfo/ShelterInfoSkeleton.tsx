const ShelterInfoSkeleton = () => {
  return (
    <div>
      <div className="mt-8 sm:mt-20">
        <div className="flex w-auto justify-center">
          <div className="flex mx-2">
            <div className="relative flex">
              <img src={'/assets/frame.png'} alt="" className=" w-auto" />
              <div className="absolute text-xs sm:text-lg inset-0 flex flex-col items-start justify-start px-8 py-5 sm:p-10">
                <div className="flex text-lg sm:text-2xl font-bold whitespace-nowrap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-16 sm:mx-40 lg:mx-64 my-14">
        <h2 className="flex w-full font-bold text-xl sm:text-2xl items-center whitespace-nowrap">
          관리중인 동물
        </h2>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 my-10 w-full whitespace-nowrap">
          <div className="w-3/4 h-28 bg-gray-200 m-2" />
          <div className="w-3/4 h-28 bg-gray-200 m-2" />
          <div className="w-3/4 h-28 bg-gray-200 m-2" />
          <div className="w-3/4 h-28 bg-gray-200 m-2" />
        </div>
      </div>
      <div className="flex justify-center mb-11 sm:mb-28"></div>
    </div>
  );
};

export default ShelterInfoSkeleton;
