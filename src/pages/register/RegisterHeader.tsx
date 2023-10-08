import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import ImageVideoInput from 'pages/register/ImageVideoInput';
import ModalPortal from 'commons/modals/ModalPortal';
import RegisterModal, {
  RegisterModalProps,
} from 'commons/modals/RegisterModal';
import { useRecoilValue } from 'recoil';
import registerState from 'recoil/registerState';
import { useNavigate } from 'react-router-dom';

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
  const registerPetData = useRecoilValue(registerState);
  const imageRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // 모달 관련
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalCloseClick = () => {
    setIsModalOpen(false);
  };
  const handleModalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  // 등록하기 관련
  const postPet = async (formData: FormData) => {
    const res = await fetch('http://localhost:8080/api/v1/pets', {
      method: 'POST',
      body: formData,
    });
    return res.json();
  };
  const { data, mutate, isError, isLoading, isSuccess } = useMutation(postPet);
  const handleRegisterButtonClick = async () => {
    if (!selectedImageFile || !selectedVideoFile || registerPetData.isComplete)
      return;
    // destructuring을 이용해서 isComplete를 제외한 나머지 데이터를 rest에 담음
    // api에 보낼 데이터는 rest + image + video
    const { isComplete, ...rest } = registerPetData;
    const formData = new FormData();
    formData.append('video', selectedVideoFile);
    formData.append('image', selectedImageFile);
    formData.append(
      'key',
      new Blob([JSON.stringify(rest)], {
        type: 'application/json',
      }),
    );
    try {
      const res = await mutate(formData);
      console.log(res);
    } catch (err: unknown) {
      console.log(err);
    }
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

  const registerModalProps: RegisterModalProps = {
    handleModalCloseClick,
    handleModalOutsideClick,
    handleRegisterButtonClick,
    handleRegisterMoreButtonClick: () => {
      setIsModalOpen(false);
      setSelectedImageFile(null);
      setSelectedVideoFile(null);
    },
    handleRegisterFinishButtonClick: () => {
      navigate('/');
    },
    isLoading,
    isSuccess,
    isError,
  };
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div className="flex justify-between items-center w-5/6">
          <h1 className="text-center text-xl">등록하기</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-color rounded-md font-bold text-white w-20 py-2"
          >
            등록완료
          </button>
        </div>
        <ImageVideoInput
          handleInputChange={handleInputChange}
          imageRef={imageRef}
          videoRef={videoRef}
          handleCustomButtonClick={handleCustomButtonClick}
          isImageSelected={!!selectedImageFile}
          isVideoSelected={!!selectedVideoFile}
        />
      </div>
      {isModalOpen && (
        <ModalPortal>
          <RegisterModal {...registerModalProps} />
        </ModalPortal>
      )}
    </>
  );
};

export default RegisterHeader;
