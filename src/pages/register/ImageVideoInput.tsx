import VImageVideoInput from './VImageVideoInput';

export interface ImageVideoInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageRef: React.RefObject<HTMLInputElement>;
  videoRef: React.RefObject<HTMLInputElement>;
  handleCustomButtonClick: (file: React.RefObject<HTMLInputElement>) => void;
  isImageSelected: boolean;
  isVideoSelected: boolean;
}

const ImageVideoInput = (props: ImageVideoInputProps) => {
  return <VImageVideoInput {...props} />;
};

export default ImageVideoInput;
