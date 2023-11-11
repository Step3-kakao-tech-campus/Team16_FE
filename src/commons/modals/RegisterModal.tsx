export interface RegisterModalProps {
  handleModalCloseClick: () => void;
  handleModalOutsideClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleRegisterButtonClick: () => void;
  handleRegisterMoreButtonClick: () => void;
  handleRegisterFinishButtonClick: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  errorText: string;
  confirmText: string;
  confirmTextArray: string[];
  buttonTextArray: string[];
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
  errorText,
  buttonTextArray,
  confirmText,
  confirmTextArray,
}: RegisterModalProps) => {
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
          <span className="text-xl text-center text-brand-color">
            {errorText}
          </span>
          <div className="flex w-2/3 justify-around items-center mt-8 gap-6">
            {buttonTextArray.map((buttonText: string, index: number) => {
              if (index % 2 === 0) {
                return (
                  <button
                    key={index}
                    className="text-brand-color rounded-md font-bold border border-brand-color w-28 py-2"
                    onClick={handleRegisterMoreButtonClick}
                  >
                    {buttonText}
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  className="bg-brand-color rounded-md font-bold text-white w-20 py-2"
                  onClick={handleRegisterMoreButtonClick}
                >
                  {buttonText}
                </button>
              );
            })}
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
          <span className="text-2xl text-brand-color">등록중입니다...</span>
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
          <span className="text-2xl text-brand-color">추가 {confirmText}</span>
          <div className="flex w-2/3 justify-between mt-8">
            <button
              className="text-brand-color rounded-md font-bold border border-brand-color w-32 py-2"
              onClick={handleRegisterFinishButtonClick}
            >
              아니요
            </button>
            <button
              className="bg-brand-color rounded-md font-bold text-white w-32 py-2"
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
          <span className="text-2xl text-center mx-4 text-brand-color">
            {confirmText}
          </span>
          <div className="flex w-2/3 justify-around items-center mt-8 gap-6">
            {confirmTextArray.map((text: string, index: number) => {
              // 1개만 있을 때 스타일을 다르게 주기 위해
              if (confirmTextArray.length === 1) {
                return (
                  <button
                    key={index}
                    className="bg-brand-color rounded-md font-bold text-white w-32 inline-block py-2"
                    onClick={handleModalCloseClick}
                  >
                    {text}
                  </button>
                );
              }
              // 좌측 버튼
              if (index % 2 === 0) {
                return (
                  <button
                    key={index}
                    className="text-brand-color rounded-md font-bold border border-brand-color w-32 py-2"
                    onClick={handleModalCloseClick}
                  >
                    {text}
                  </button>
                );
              }
              // 우측 버튼
              return (
                <button
                  key={index}
                  className="bg-brand-color rounded-md font-bold text-white w-32 inline-block py-2"
                  onClick={handleRegisterButtonClick}
                >
                  {text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return <div>{errorText}</div>;
};

export default RegisterModal;
