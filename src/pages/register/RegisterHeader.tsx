import { useMutation } from '@tanstack/react-query';
import ModalPortal from 'commons/modals/ModalPortal';
import RegisterModal, {
  RegisterModalProps,
} from 'commons/modals/RegisterModal';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import registerState from 'recoil/registerState';
import ImageVideoInput from './ImageVideoInput';

interface PetPostProps {
  name: string;
  age: string;
  type: string;
  weight: number;
  size: string;
  sex: string;
  vaccinationStatus: string;
  adoptionStatus: string;
  neutralizationStatus: string;
  description: string;
  petPolygonProfileDto: {
    intelligence: number;
    affinity: number;
    athletic: number;
    adaptability: number;
    activeness: number;
  };
  protectionExpirationDate: string;
}

const mockPetData: PetPostProps = {
  name: '뽀삐',
  age: '1년1개월',
  type: 'DOG',
  weight: 1,
  size: '제가 보낸 요청',
  sex: 'MALE',
  vaccinationStatus: 'YES',
  adoptionStatus: 'YES',
  neutralizationStatus: 'YES',
  description: '잘 받아졌을까요',
  petPolygonProfileDto: {
    intelligence: 1,
    affinity: 1,
    athletic: 1,
    adaptability: 1,
    activeness: 1,
  },
  protectionExpirationDate: '2021-10-25',
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
    const res = await fetch(`${process.env.REACT_APP_URI}/pet`, {
      method: 'POST',
      body: formData,
      // headers: {
      //   Authorization: // jwt 토큰 bearer까지 포함해서 보내기
      // },
    });
    return res.json();
  };
  const { data, mutate, isError, isLoading, isSuccess } = useMutation(postPet, {
    onError: (err: unknown) => {
      console.log(err);
    },
    onSuccess: (res) => {
      console.log(res);
    },
  });
  const handleRegisterButtonClick = async () => {
    if (!selectedImageFile || !selectedVideoFile || registerPetData.isComplete)
      return;
    // destructuring을 이용해서 isComplete를 제외한 나머지 데이터를 rest에 담음
    // api에 보낼 데이터는 rest + image + video
    // const { isComplete, ...rest } = registerPetData;
    console.log(mockPetData);
    const formData = new FormData();
    formData.append('profileVideo', selectedVideoFile);
    formData.append('profileImage', selectedImageFile);
    formData.append(
      'petInfo',
      new Blob([JSON.stringify(mockPetData)], {
        type: 'application/json',
      }),
    );
    try {
      const res = mutate(formData);
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
