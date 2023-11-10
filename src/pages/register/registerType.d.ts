export interface CalendarProps {
  handleClick: () => void;
}

export interface RadioProps {
  name?: string;
  label: string;
  value: string;
  selected?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface FileInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCustomButtonClick: (file: React.RefObject<HTMLInputElement>) => void;
  fileRef: React.RefObject<HTMLInputElement>;
  isFileSelected: boolean;
  fileType: string;
  labelText: string;
  uploadDescription: string;
}

export interface ImageVideoInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageRef: React.RefObject<HTMLInputElement>;
  videoRef: React.RefObject<HTMLInputElement>;
  handleCustomButtonClick: (file: React.RefObject<HTMLInputElement>) => void;
  isImageSelected: boolean;
  isVideoSelected: boolean;
}

export interface StatusProps {
  status: string;
  score: number;
  selectedOption: number;
  handleChange: (status: string, option: number) => void;
}

export interface DayModalProps {
  open: boolean;
  handleClick: () => void;
}

export interface VImageVideoInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageRef: React.RefObject<HTMLInputElement>;
  videoRef: React.RefObject<HTMLInputElement>;
  handleCustomButtonClick: (file: React.RefObject<HTMLInputElement>) => void;
  isImageSelected: boolean;
  isVideoSelected: boolean;
}

export interface RegisterProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioGroupProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSexChange: (arg0: string) => void;
  handleAdoptionStatusChange: (arg0: string) => void;
  handleNeutralizationStatusChange: (arg0: string) => void;
}
