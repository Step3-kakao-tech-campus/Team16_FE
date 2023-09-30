import Banner from 'components/atoms/Banner';
import SignupInputForm from 'components/organisms/SignupInputForm';

type Props = {
  redirectLoginPage: () => void;
};

const VSignupPage = ({ redirectLoginPage }: Props) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 min-h-screen"
      style={{
        backgroundImage: 'url(assets/images/backgroundLogo.png)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Banner className="font-bold text-2xl">회원가입</Banner>
      <div className="flex flex-col gap-2">
        <Banner className="font-semibold text-lg">
          애니모리에 오신 것을 환영합니다!
        </Banner>
        <Banner className="font-semibold text-lg">
          아이들이 따뜻한 가족을 찾을 수 있게 도와주세요 :)
        </Banner>
      </div>
      <SignupInputForm />
      <div className="signUp-button signUp-button flex justify-between min-w-[15rem]">
        <span className="text-gray-400">계정이 이미 있다면? </span>
        <span className="font-medium text-brand-color">
          <button
            className="font-medium text-brand-color"
            onClick={redirectLoginPage}
          >
            로그인{' '}
          </button>{' '}
          <span>하러가기</span>
        </span>
      </div>
    </div>
  );
};

export default VSignupPage;
