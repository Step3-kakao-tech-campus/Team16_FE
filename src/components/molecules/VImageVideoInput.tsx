interface VImageVideoInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUploadButtonClick: () => void;
  fileRef: React.RefObject<HTMLInputElement>;
  handleCustomButtonClick: (file: React.RefObject<HTMLInputElement>) => void;
}

const VImageVideoInput = (props: VImageVideoInputProps) => {
  const {
    handleInputChange,
    handleUploadButtonClick,
    fileRef,
    handleCustomButtonClick,
  } = props;

  return (
    <div className="flex flex-col">
      <button onClick={handleUploadButtonClick}>확인</button>
      <div>
        <label htmlFor="imageUpload">이미지 업로드:</label>
        <input
          type="file"
          id="imageUpload"
          onChange={handleInputChange}
          accept="image/*"
          ref={fileRef}
        />
        <div
          className="bg-stone-500 w-20 h-20"
          onClick={() => handleCustomButtonClick(fileRef)}
        ></div>

        {/* 비디오 업로드 필드에 label 추가 */}
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
