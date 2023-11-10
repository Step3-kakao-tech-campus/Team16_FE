const Skeleton = ({
  text,
  loader = false,
}: {
  text: string;
  loader?: boolean;
}) => {
  return (
    <>
      {loader && (
        <div className="loader w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      )}
      <div className="w-full h-[70vh] text-xl flex items-center justify-center font-bold text-white bg-black">
        <span>{text}</span>
      </div>
    </>
  );
};

export default Skeleton;
