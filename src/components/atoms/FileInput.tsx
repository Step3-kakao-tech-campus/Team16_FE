interface FileInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCustomButtonClick: (file: React.RefObject<HTMLInputElement>) => void;
  fileRef: React.RefObject<HTMLInputElement>;
  isFileSelected: boolean;
  fileType: string;
}

const FileInput = (props: FileInputProps) => {
  const {
    handleInputChange,
    handleCustomButtonClick,
    fileRef,
    isFileSelected,
    fileType,
  } = props;

  return (
    <>
      <label htmlFor={`${fileType}Upload`}>이미지 업로드:</label>
      <input
        type="file"
        id={`${fileType}Upload`}
        onChange={handleInputChange}
        accept={`${fileType}/*`}
        ref={fileRef}
      />
      <div
        className={`w-20 h-20 ${
          isFileSelected ? 'bg-green-500' : 'bg-stone-500'
        }`}
        onClick={() => handleCustomButtonClick(fileRef)}
      ></div>
      {isFileSelected && <span>{fileRef.current?.files?.[0]?.name}</span>}

      {/* 업로드된 이미지 보여주기 */}
      {/* {isFileSelected && (
        <img
          src={
            fileRef.current?.files?.[0]
              ? URL.createObjectURL(fileRef.current?.files?.[0])
              : ''
          }
          alt="preview"
        />
      )} */}
      {/* 업로드된 비디오 보여주기 */}
      {/* {isFileSelected && (
        <video
          src={
            fileRef.current?.files?.[0]
              ? URL.createObjectURL(fileRef.current?.files?.[0])
              : ''
          }
          controls
        ></video>
      )} */}
    </>
  );
};

export default FileInput;
