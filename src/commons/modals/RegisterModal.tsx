export interface RegisterModalProps {
  handleModalCloseClick: () => void;
  handleModalOutsideClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleRegisterButtonClick: () => void;
  handleRegisterMoreButtonClick: () => void;
  handleRegisterFinishButtonClick: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  modalString: string;
}

const RegisterModal = ({
  handleModalCloseClick,
  handleModalOutsideClick,
  handleRegisterButtonClick,
  handleRegisterMoreButtonClick,
  handleRegisterFinishButtonClick,
  isLoading,
  isSuccess,
  isError,
  data,
  modalString,
}: RegisterModalProps) => {
  console.log(data);
  if (isError || data?.success === false) {
    return (
      <div
        onClick={handleModalOutsideClick}
        className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
      >
        <div className="w-80 h-60 bg-white rounded-md flex flex-col items-center">
          <div className="flex w-full justify-end p-5 ">
            <button onClick={handleModalCloseClick} className="text-2xl">
              X
            </button>
          </div>
          <span className="text-2xl text-brand-color">
            {modalString}에 실패했습니다
          </span>
          <div className="text-red-600">{data?.error?.message}</div>
          <div className="flex w-2/3 justify-between mt-8">
            <button
              className="text-brand-color rounded-md font-bold border border-brand-color w-16 py-2"
              onClick={handleRegisterMoreButtonClick}
            >
              확인
            </button>
            <button
              className="bg-brand-color rounded-md font-bold text-white w-20 py-2"
              onClick={handleRegisterButtonClick}
            >
              다시하기
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div
        onClick={handleModalOutsideClick}
        className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
      >
        <div className="w-80 h-60 bg-white rounded-md flex flex-col items-center">
          <div className="flex w-full justify-end p-5 ">
            <button onClick={handleModalCloseClick} className="text-2xl">
              X
            </button>
          </div>
          <span className="text-2xl text-brand-color">
            {modalString}중입니다...
          </span>
          <img
            src="/assets/images/hourglass.png"
            alt="hourglass"
            className="w-10 h-10 mt-8"
          />
        </div>
      </div>
    );
  }
  if (isSuccess) {
    return (
      <div
        onClick={handleModalOutsideClick}
        className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
      >
        <div className="w-80 h-60 bg-white rounded-md flex flex-col items-center">
          <div className="flex w-full justify-end p-5 ">
            <button onClick={handleModalCloseClick} className="text-2xl">
              X
            </button>
          </div>
          <span className="text-2xl text-brand-color">
            추가 {modalString} 하시겠습니까?
          </span>
          <div className="flex w-2/3 justify-between mt-8">
            <button
              className="text-brand-color rounded-md font-bold border border-brand-color w-16 py-2"
              onClick={handleRegisterFinishButtonClick}
            >
              아니요
            </button>
            <button
              className="bg-brand-color rounded-md font-bold text-white w-16 py-2"
              onClick={handleRegisterMoreButtonClick}
            >
              예
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (!isSuccess && !isLoading && !isError) {
    return (
      <div
        onClick={handleModalOutsideClick}
        className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
      >
        <div className="w-80 h-60 bg-white rounded-md flex flex-col items-center">
          <div className="flex w-full justify-end p-5 ">
            <button onClick={handleModalCloseClick} className="text-2xl">
              X
            </button>
          </div>
          <span className="text-2xl text-brand-color">
            {modalString} 하시겠습니까?
          </span>
          <div className="flex w-2/3 justify-between mt-8">
            <button
              className="text-brand-color rounded-md font-bold border border-brand-color w-16 py-2"
              onClick={handleModalCloseClick}
            >
              아니요
            </button>
            <button
              className="bg-brand-color rounded-md font-bold text-white w-16 py-2"
              onClick={handleRegisterButtonClick}
            >
              예
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <div>문제가 생겼습니다</div>;
};

export default RegisterModal;
