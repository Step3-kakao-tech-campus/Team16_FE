const InstructBox = () => {
  return (
    <div className="absolute w-fit rounded-2xl h-fit p-10 backdrop-blur-lg flex flex-col justify-center items-center align-middle bg-brand-color/50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-white">한 번 탭하면 재생 / 일시정지</div>
      <div className="text-white">두 번 탭하면 음소거가 가능해요</div>
    </div>
  );
};

export default InstructBox;
