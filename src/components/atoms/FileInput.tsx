interface FileInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCustomButtonClick: (file: React.RefObject<HTMLInputElement>) => void;
  fileRef: React.RefObject<HTMLInputElement>;
  isFileSelected: boolean;
  fileType: string;
  labelText: string;
}

const FileInput = (props: FileInputProps) => {
  const {
    handleInputChange,
    handleCustomButtonClick,
    fileRef,
    isFileSelected,
    fileType,
    labelText,
  } = props;

  return (
    <div className="border shadow-lg rounded-lg w-80 h-60 flex flex-col items-center justify-center">
      <input
        type="file"
        id={`${fileType}Upload`}
        onChange={handleInputChange}
        accept={`${fileType}/*`}
        ref={fileRef}
        className="hidden"
      />
      {isFileSelected ? (
        <>
          <img src="/assets/images/check.png" alt="" className="w-12 h-12" />
          <span>{fileRef.current?.files?.[0]?.name}</span>
          <button onClick={() => handleCustomButtonClick(fileRef)}>
            재업로드
          </button>
        </>
      ) : (
        <>
          <img
            src="/assets/images/upload.png"
            alt=""
            className="w-12 h-12 mb-5"
          />
          <label htmlFor={`${fileType}Upload`}>
            {!isFileSelected && labelText}
          </label>
          <button
            onClick={() => handleCustomButtonClick(fileRef)}
            className="border-brand-color border rounded-md w-20 py-1 font-bold text-brand-color my-5"
          >
            업로드
          </button>
        </>
      )}

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
    </div>
  );
};

export default FileInput;
