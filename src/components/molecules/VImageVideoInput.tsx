import FileInput from 'components/atoms/FileInput';

interface VImageVideoInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUploadButtonClick: () => void;
  fileRef: React.RefObject<HTMLInputElement>;
  handleCustomButtonClick: (file: React.RefObject<HTMLInputElement>) => void;
  isFileSelected: boolean;
}

const VImageVideoInput = (props: VImageVideoInputProps) => {
  const {
    handleInputChange,
    handleUploadButtonClick,
    fileRef,
    handleCustomButtonClick,
    isFileSelected,
  } = props;

  return (
    <div className="flex flex-col">
      <button onClick={handleUploadButtonClick}>확인</button>
      <FileInput
        handleInputChange={handleInputChange}
        handleCustomButtonClick={handleCustomButtonClick}
        fileRef={fileRef}
        isFileSelected={isFileSelected}
        fileType="image"
      />
      <div>
        <label htmlFor="videoUpload">비디오 업로드:</label>
        <input
          type="file"
          id="videoUpload"
          onChange={handleInputChange}
          accept="video/*"
        />
      </div>
    </div>
  );
};

export default VImageVideoInput;
