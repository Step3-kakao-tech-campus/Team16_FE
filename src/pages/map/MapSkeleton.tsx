const MapSkeleton = ({ listSize }: { listSize: number }) => {
  return (
    <>
      <div className="w-96 h-96 bg-gray-100" />
      <div className="w-96">
        {Array.from({ length: listSize }).map((_, index) => (
          <div
            className="bg-gray-100 h-20 border rounded-md p-4 mb-2"
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default MapSkeleton;
