const ShelterNoData = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <img
        src="/assets/images/all.png"
        alt="전체 동물"
        className="grayscale"
        style={{ width: '14rem', height: '14rem' }}
      />

      <h1 className="text-xl font-bold text-center">보호중인 동물이 없어요!</h1>
    </div>
  );
};

export default ShelterNoData;
