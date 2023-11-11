import Banner from 'commons/components/Banner';
import LogoButton from 'commons/components/LogoButton';
import SignupInputForm from 'pages/signUp/components/SignupInputForm';
import { SignupPageProps } from './signupType';

const VSignupPage = ({ redirectLoginPage }: SignupPageProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 min-h-screen"
      style={{
        backgroundImage: 'url(assets/images/backgroundImage.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-row justify-between items-center gap-4 max-w-[400px] w-[100%] mt-4 mb-2">
        <LogoButton
          imageClassName="sm:w-8 md:w-8 lg:w-12"
          logoClassName="sm:text-2xl md:text-2xl lg:text-3xl"
        />
        <Banner className="font-bold text-lg lg:text-2xl">회원가입</Banner>
      </div>

      <div className="flex flex-col gap-2">
        <Banner className="font-semibold text-lg">
          애니모리에 오신 것을 환영합니다!
        </Banner>
        <Banner className="font-semibold text-lg">
          아이들이 따뜻한 가족을 찾을 수 있게 도와주세요 :)
        </Banner>
      </div>
      <SignupInputForm />
      <div className="signUp-button lg:flex-row lg:justify-between gap-2 min-w-[15rem] flex flex-col text-center">
        <span className="text-gray-400">계정이 이미 있다면? </span>
        <span className="font-medium text-brand-color">
          <button
            className="font-medium text-brand-color"
            onClick={redirectLoginPage}
          >
            로그인 하러가기
          </button>
        </span>
      </div>
    </div>
  );
};

export default VSignupPage;
