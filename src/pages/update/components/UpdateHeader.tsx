import { useMutation } from '@tanstack/react-query';
import { getCookie } from 'commons/cookie/cookie';
import ModalPortal from 'commons/modals/ModalPortal';
import RegisterModal, {
  RegisterModalProps,
} from 'commons/modals/RegisterModal';
import { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import registerState from 'recoil/registerState';
import ImageVideoInput from '../../register/components/ImageVideoInput';

const UpdateHeader = () => {
  const [selectedImageFile, setSelectedImageFile] = useState<Blob>();
  const [selectedVideoFile, setSelectedVideoFile] = useState<Blob>();
  // 여기도 마찬가지
  const [buttonTextArray, setButtonTextArray] = useState<Array<string>>(['']);
  const [errorText, setErrorText] = useState<string>('');
  const [confirmText, setConfirmText] = useState<string>('수정하시겠습니까?');
  const [confirmTextArray, setConfirmTextArray] = useState<Array<string>>([
    '아니오',
    '예',
  ]);
  const registerPetData = useRecoilValue(registerState);
  const imageRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const params = useParams().id;
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
  const patchPet = async (formData: FormData) => {
    const loginToken = getCookie('loginToken');
    const response = await fetch(`${process.env.REACT_APP_URI}/pet/${params}`, {
      method: 'PATCH',
      body: formData,
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
    });
    if (!response.ok) {
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
  const { data, isError, isLoading, isSuccess } = useMutation(patchPet);
  const handleRegisterButtonClick = async () => {
    if (!registerPetData.isComplete) {
      setConfirmText('필수항목을 입력해주세요.');
      setConfirmTextArray(['돌아가기']);
      return;
    }

    const formData = new FormData();
    if (selectedVideoFile) formData.append('profileVideo', selectedVideoFile);
    if (selectedImageFile) formData.append('profileImage', selectedImageFile);
    const { isComplete, ...restRegisterPetData } = registerPetData;
    formData.append(
      'petInfo',
      new Blob([JSON.stringify(restRegisterPetData)], {
        type: 'application/json',
      }),
    );
  };
  const handleCustomButtonClick = (
    fileRef: React.RefObject<HTMLInputElement> | null,
  ) => {
    fileRef?.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFile = e.target.files as FileList;
    if (!targetFile[0]) return;

    if (targetFile[0].type.includes('image')) {
      setSelectedImageFile(targetFile[0]);
    } else if (targetFile[0].type.includes('video')) {
      setSelectedVideoFile(targetFile[0]);
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
    confirmText,
    confirmTextArray,
    buttonTextArray,
  };
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div className="flex justify-between items-center w-5/6">
          <h1 className="text-center text-xl">수정하기</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-color rounded-md font-bold text-white w-20 py-2"
          >
            수정완료
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

export default UpdateHeader;
