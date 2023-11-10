const HomeNoData = ({ species }: { species: string }) => {
  return (
    <>
      {species === '강아지' && (
        <img src="/assets/images/dog.png" alt="강아지" className="grayscale" />
      )}
      {species === '고양이' && (
        <img src="/assets/images/cat.png" alt="고양이" className="grayscale" />
      )}
      {species === '기타' && (
        <img src="/assets/images/racoon.png" alt="기타" className="grayscale" />
      )}
      {species === '전체' && (
        <img src="/assets/images/animal.png" alt="전체" className="grayscale" />
      )}
    </>
  );
};

export default HomeNoData;
