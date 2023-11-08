import { useMutation } from '@tanstack/react-query';
import { getCookie } from 'commons/cookie/cookie';
import ModalPortal from 'commons/modals/ModalPortal';
import RegisterModal, {
  RegisterModalProps,
} from 'commons/modals/RegisterModal';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import registerState from 'recoil/registerState';
import ImageVideoInput from './ImageVideoInput';

const RegisterHeader = () => {
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedVideoFile, setSelectedVideoFile] = useState(null);
  const [buttonTextArray, setButtonTextArray] = useState<Array<string>>(['']);
  const [errorText, setErrorText] = useState<string>('');
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
  // eslint-disable-next-line consistent-return
  const postPet = async (formData: FormData) => {
    const loginToken = getCookie('loginToken');
    console.log('token', loginToken);

    const response = await fetch(`${process.env.REACT_APP_URI}/pet`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
    });
    if (!response.ok) {
      console.log(response.status);
      // 로그인 화면으로 이동하기 위해 텍스트 바꿔주는 것 필요
      switch (response.status) {
        case 400:
          setErrorText('이미지, 비디오 형식이 잘못되었습니다.'); // 취소
          setButtonTextArray(['취소']);
          break;
        case 401:
        case 403:
          setErrorText('로그인 정보가 만료되었습니다.'); // 로그인 페이지로 이동 / 취소
          setButtonTextArray(['로그인하기', '취소']);
          break;
        case 404:
          setErrorText('보호소를 찾을 수 없습니다.'); // 로그인 페이지로 이동 / 취소
          setButtonTextArray(['로그인하기', '취소']);
          break;
        case 500:
          setErrorText('서버에 문제가 발생했습니다.'); // 다시하기 / 취소
          setButtonTextArray(['다시하기', '취소']);
          break;
        default:
          setErrorText('등록 정보의 형식이 잘못되었습니다.'); // 취소
          setButtonTextArray(['취소']);
          break;
      }
    }
    return response.json();
  };
  const { data, mutate, isError, isLoading, isSuccess } = useMutation(postPet);
  const handleRegisterButtonClick = async () => {
    if (!selectedImageFile || !selectedVideoFile || !registerPetData.isComplete)
      return;
    const formData = new FormData();
    formData.append('profileVideo', selectedVideoFile);
    formData.append('profileImage', selectedImageFile);
    const { isComplete, ...restRegisterPetData } = registerPetData;
    formData.append(
      'petInfo',
      new Blob([JSON.stringify(restRegisterPetData)], {
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
      window.location.reload();
    },
    handleRegisterFinishButtonClick: () => {
      navigate('/');
    },
    isLoading,
    isSuccess,
    isError,
    data,
    errorText,
    buttonTextArray,
    modalString: '등록',
  };
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div className="flex justify-end items-center w-5/6">
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
