const Dash = () => {
  return (
    <div className="flex">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="mx-1 h-[2px] w-1 bg-[#C4C4C4] rounded-full"
        />
      ))}
    </div>
  );
};

export default Dash;
