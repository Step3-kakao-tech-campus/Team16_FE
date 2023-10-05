import FileInput from 'components/atoms/FileInput';

interface VImageVideoInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUploadButtonClick: () => void;
  imageRef: React.RefObject<HTMLInputElement>;
  videoRef: React.RefObject<HTMLInputElement>;
  handleCustomButtonClick: (file: React.RefObject<HTMLInputElement>) => void;
  isImageSelected: boolean;
  isVideoSelected: boolean;
}

const VImageVideoInput = (props: VImageVideoInputProps) => {
  const {
    handleInputChange,
    handleUploadButtonClick,
    imageRef,
    videoRef,
    handleCustomButtonClick,
    isImageSelected,
    isVideoSelected,
  } = props;

  return (
    <div className="flex flex-col">
      <button onClick={handleUploadButtonClick}>확인</button>
      <FileInput
        handleInputChange={handleInputChange}
        handleCustomButtonClick={handleCustomButtonClick}
        fileRef={imageRef}
        isFileSelected={isImageSelected}
        fileType="image"
      />
      <FileInput
        handleInputChange={handleInputChange}
        handleCustomButtonClick={handleCustomButtonClick}
        fileRef={videoRef}
        isFileSelected={isVideoSelected}
        fileType="video"
      />
    </div>
  );
};

export default VImageVideoInput;
