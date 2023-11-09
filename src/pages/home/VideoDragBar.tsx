const VideoDragBar = ({ opacity }: { opacity: number }) => {
  return (
    <div
      className="absolute font text-white text-3xl bg-black/50 top-0 right-0 w-1 px-10 h-full flex flex-col gap-10 items-center justify-center"
      style={{
        opacity,
        transition: 'opacity 0.2s ease-in-out',
      }}
    >
      <div>왼쪽으로</div>
      <div>당겨보세요</div>
    </div>
  );
};

export default VideoDragBar;
