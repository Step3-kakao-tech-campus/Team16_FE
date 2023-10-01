interface ModalProps {
  handleModalCloseClick: () => void;
  handleModalOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  imageUrl: string;
}

const ImageModal = ({
  handleModalCloseClick,
  handleModalOutsideClick,
  imageUrl,
}: ModalProps) => {
  return (
    <div
      onClick={handleModalOutsideClick}
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="flex w-4/5 flex-col p-10 pt-5 fixed justify-center items-center bg-white rounded-md">
        <div className="w-full flex justify-end">
          <button className="text-2xl" onClick={handleModalCloseClick}>
            X
          </button>
        </div>
        <img className="w-4/5" src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default ImageModal;
