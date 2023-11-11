import FileInput from 'pages/register/components/FileInput';
import { VImageVideoInputProps } from '../registerType';

const VImageVideoInput = (props: VImageVideoInputProps) => {
  const {
    handleInputChange,
    imageRef,
    videoRef,
    handleCustomButtonClick,
    isImageSelected,
    isVideoSelected,
  } = props;
  return (
    <div className="flex gap-10 flex-col md:flex-row items-center justify-center">
      <FileInput
        handleInputChange={handleInputChange}
        handleCustomButtonClick={handleCustomButtonClick}
        fileRef={videoRef}
        isFileSelected={isVideoSelected}
        fileType="video"
        labelText="애니모리의 숏폼에 올라갈 짧은 동영상을 업로드해주세요."
        uploadDescription="1 ~ 20초 분량, 최대 15MB"
      />
      <FileInput
        handleInputChange={handleInputChange}
        handleCustomButtonClick={handleCustomButtonClick}
        fileRef={imageRef}
        isFileSelected={isImageSelected}
        fileType="image"
        labelText="애니모리 친구들 프로필에 올라갈 사진을 업로드해주세요."
        uploadDescription="최대 5MB"
      />
    </div>
  );
};

export default VImageVideoInput;
