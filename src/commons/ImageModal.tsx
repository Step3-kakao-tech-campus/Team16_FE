interface ModalProps {
  onClose: () => void;
  imageUrl: string;
}

const ImageModal = ({ onClose, imageUrl }: ModalProps) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50">
      <button onClick={onClose}>X</button>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default ImageModal;
