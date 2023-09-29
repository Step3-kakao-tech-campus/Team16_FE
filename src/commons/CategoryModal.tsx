export interface CategoryModalProps {
  handleModalCloseClick: () => void;
  handleModalOutsideClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const CategoryModal = ({
  handleModalCloseClick,
  handleModalOutsideClick,
}: CategoryModalProps) => {
  return (
    <div
      onClick={handleModalOutsideClick}
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="flex w-4/5 flex-col p-10 pt-5 fixed justify-center items-end bg-white rounded-md">
        <button onClick={handleModalCloseClick} className="text-2xl">
          X
        </button>
      </div>
    </div>
  );
};

export default CategoryModal;
