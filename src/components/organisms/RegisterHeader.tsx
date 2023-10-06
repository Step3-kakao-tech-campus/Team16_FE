import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import ImageVideoInput from 'components/molecules/ImageVideoInput';

interface PetPostProps {
  name: string;
  age: string;
  type: string;
  weight: number;
  size: string;
  sex: string;
  vaccinationStatus: string;
  adoptionStatus: boolean;
  neutralizationStatus: boolean;
  description: string;
  petPolygonProfileDto: {
    intelligence: number;
    affinity: number;
    athletic: number;
    adaptability: number;
    activeness: number;
  };
}

const mockPetData: PetPostProps = {
  name: '이렇게 긴 문장도 받을 수 있나요? 얼마나 긴 문장까지 자바에서 받을 수 있을까요? 이렇게 긴 문장도 받을 수 있나요? 얼마나 긴 문장까지 자바에서 받을 수 있을까요? 이렇게 긴 문장도 받을 수 있나요? 얼마나 긴 문장까지 자바에서 받을 수 있을까요? 이렇게 긴 문장도 받을 수 있나요? 얼마나 긴 문장까지 자바에서 받을 수 있을까요? 이렇게 긴 문장도 받을 수 있나요? 얼마나 긴 문장까지 자바에서 받을 수 있을까요? ',
  age: '1',
  type: 'DOG',
  weight: 1,
  size: '제가 보낸 요청',
  sex: 'string',
  vaccinationStatus: '안녕하세요',
  adoptionStatus: false,
  neutralizationStatus: false,
  description: '잘 받아졌을까요',
  petPolygonProfileDto: {
    intelligence: 1,
    affinity: 1,
    athletic: 1,
    adaptability: 1,
    activeness: 1,
  },
};

const RegisterHeader = () => {
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedVideoFile, setSelectedVideoFile] = useState(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);

  const { mutate } = useMutation(async (formData: FormData): Promise<any> => {
    const res = await fetch(
      'http://ec2-3-37-14-140.ap-northeast-2.compute.amazonaws.com/api/pet',
      {
        method: 'POST',
        body: formData,
      },
    );
    const data = await res.json();
    return data;
  });

  const handleUploadButtonClick = async () => {
    if (!selectedImageFile || !selectedVideoFile) return;
    console.log(selectedImageFile, selectedVideoFile, mockPetData);

    const formData = new FormData();
    formData.append('video', selectedVideoFile);
    formData.append('image', selectedImageFile);
    formData.append(
      'key',
      new Blob([JSON.stringify(mockPetData)], {
        type: 'application/json',
      }),
    );

    const data = await mutate(formData);
    console.log(data);
  };
  const handleCustomButtonClick = (
    fileRef: React.RefObject<HTMLInputElement> | null,
  ) => {
    fileRef?.current?.click();
  };

  const handleInputChange = (e: any) => {
    if (!e.target.files[0]) return;

    if (e.target.files[0].type.includes('image')) {
      setSelectedImageFile(e.target.files[0]);
    } else if (e.target.files[0].type.includes('video')) {
      setSelectedVideoFile(e.target.files[0]);
    }
  };
  return (
    <ImageVideoInput
      handleInputChange={handleInputChange}
      imageRef={imageRef}
      videoRef={videoRef}
      handleCustomButtonClick={handleCustomButtonClick}
      isImageSelected={!!selectedImageFile}
      isVideoSelected={!!selectedVideoFile}
    />
  );
};

export default RegisterHeader;
