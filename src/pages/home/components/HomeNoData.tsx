const HomeNoData = ({ species }: { species: string }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      {species === '강아지' && (
        <img
          src="/assets/images/dog.png"
          alt="강아지"
          className="grayscale"
          style={{ width: '14rem', height: '14rem' }}
        />
      )}
      {species === '고양이' && (
        <img
          src="/assets/images/cat.png"
          alt="고양이"
          className="grayscale"
          style={{ width: '14rem', height: '14rem' }}
        />
      )}
      {species === '기타' && (
        <img
          src="/assets/images/racoon.png"
          alt="기타"
          className="grayscale"
          style={{ width: '14rem', height: '14rem' }}
        />
      )}
      {species === '전체' && (
        <img
          src="/assets/images/all.png"
          alt="전체"
          className="grayscale"
          style={{ width: '14rem', height: '14rem' }}
        />
      )}
      <h1 className="text-xl font-bold text-center">영상이 없습니다... 😢</h1>
    </div>
  );
};

export default HomeNoData;
