const VideoDragBar = ({ opacity }: { opacity: number }) => {
  return (
    <div
      className="absolute font text-white text-3xl bg-black/50 top-0 right-0 px-4 h-full flex flex-col gap-10 items-center justify-center"
      style={{
        opacity,
        transition: 'opacity 0.2s ease-in-out',
      }}
    >
      <div className="flex flex-col justify-center items-end">
        <div>➟</div>
        <div className="text-xl">당겨서 상세정보 보기</div>
      </div>
    </div>
  );
};

export default VideoDragBar;
