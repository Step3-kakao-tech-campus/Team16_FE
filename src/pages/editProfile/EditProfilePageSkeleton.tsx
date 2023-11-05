import Banner from 'commons/Banner';

const EditProfilePageSkeleton = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-10 min-h-[80vh]"
      style={{
        backgroundImage: 'url(assets/images/backgroundImage.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col gap-4 ">
        <Banner className="font-semibold text-2xl mb-8 text-center">
          My 보호소 정보 수정
        </Banner>

        <div className="flex flex-col gap-4 w-full max-w-[400px] px-2">
          <div className="text-sm font-semibold">보호소 이름</div>
          <div className="w-full h-8 bg-gray-300 animate-pulse animation-duration-1500" />

          <div className="text-sm font-semibold">보호소 연락처</div>
          <div className="w-full h-8 bg-gray-300 animate-pulse animation-duration-1500" />

          <div className="text-sm font-semibold">보호소 이름</div>
          <div className="w-full h-8 bg-gray-300 animate-pulse animation-duration-1500" />

          <div className="text-sm font-semibold">보호소 주소</div>
          <div className="w-full h-8 bg-gray-300 animate-pulse animation-duration-1500" />
          <div className="flex flex-row">
            <div className="w-[33vw] h-10 bg-gray-300 animate-pulse animation-duration-1500" />
            <div className="w-[33vw] h-10 bg-gray-300 animate-pulse animation-duration-1500 mx-2" />
            <div className="w-[33vw] h-10 bg-gray-300 animate-pulse animation-duration-1500" />
          </div>
          <div className="w-full h-8 bg-gray-300 animate-pulse animation-duration-1500" />
        </div>
        <button className="bg-brand-color text-white w-full rounded-md p-2">
          정보 수정하기
        </button>
      </div>
    </div>
  );
};

export default EditProfilePageSkeleton;
