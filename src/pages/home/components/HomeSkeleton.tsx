const Skeleton = ({
  text,
  loader = false,
}: {
  text: string;
  loader?: boolean;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {loader && <div className="w-10 h-10 loader top-1/2 absolute" />}
      <div className="w-full h-[70vh] text-xl flex items-center justify-center font-bold text-white bg-black">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Skeleton;
