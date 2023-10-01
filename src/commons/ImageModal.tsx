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
      <div className="w-4/5 h-3/5 md:h-4/5 overflow-scroll p-10 pt-5 fixed bg-white rounded-md">
        <div className="w-full ">
          <button className="text-2xl" onClick={handleModalCloseClick}>
            X
          </button>
        </div>
        <img className="w-4/5 mx-auto" src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default ImageModal;
