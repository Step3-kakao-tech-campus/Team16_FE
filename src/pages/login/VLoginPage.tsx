import Banner from 'commons/components/Banner';
import LogoButton from 'commons/components/LogoButton';
import LoginInputForm from 'pages/login/components/LoginInputForm';
import { VLoginPageProps } from './loginType';

const VLoginPage = ({ redirectSignupPage }: VLoginPageProps) => {
  return (
    <div className="flex flex-col justify-around">
      <div
        className="flex flex-col justify-center items-center gap-4 h-screen"
        style={{
          backgroundImage: 'url(assets/images/backgroundImage.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-[100px] lg:top-[90px]">
          <LogoButton
            imageClassName="sm:w-6 md:w-8 lg:w-12"
            logoClassName="sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </div>
        <Banner className="font-bold text-2xl">로그인</Banner>
        <Banner className="font-semibold text-lg">
          애니모리 친구들이 기다리고 있어요 :)
        </Banner>

        <LoginInputForm />

        <div className="signUp-button flex justify-between min-w-[15rem]">
          <span className="text-gray-400">계정이 없다면? </span>
          <span className="font-medium text-brand-color">
            <button onClick={redirectSignupPage}>회원가입 하러가기</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VLoginPage;
