import { FileInputProps } from '../registerType';

const FileInput = (props: FileInputProps) => {
  const {
    handleInputChange,
    handleCustomButtonClick,
    fileRef,
    isFileSelected,
    fileType,
    labelText,
    uploadDescription,
  } = props;

  return (
    <div className="flex flex-col gap-5">
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
            <img
              src="/assets/images/check.png"
              alt=""
              className="w-12 h-12 mb-5"
            />
            <span className="font-bold">
              {fileRef.current?.files?.[0]?.name}
            </span>
            <button
              onClick={() => handleCustomButtonClick(fileRef)}
              className="border-brand-color border rounded-md w-20 py-2 font-bold text-brand-color my-5"
            >
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
            <label
              htmlFor={`${fileType}Upload`}
              className="font-bold w-5/6 text-center"
            >
              {!isFileSelected && labelText}
            </label>
            <button
              onClick={() => handleCustomButtonClick(fileRef)}
              className="border-brand-color border rounded-md w-20 py-2 font-bold text-brand-color my-5"
            >
              Upload
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
      <div className="text-center">
        <span className="text-gray-400">{uploadDescription}</span>
      </div>
    </div>
  );
};

export default FileInput;
