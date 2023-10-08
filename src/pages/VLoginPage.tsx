import Banner from 'commons/Banner';
import LoginInputForm from 'components/organisms/LoginInputForm';

type Props = {
  redirectSignupPage: () => void;
};

const VLoginPage = ({ redirectSignupPage }: Props) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 h-screen"
      style={{
        backgroundImage: 'url(assets/images/backgroundImage.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Banner className="font-bold text-2xl">로그인</Banner>
      <Banner className="font-semibold text-lg">
        애니모리 친구들이 기다리고 있어요 :)
      </Banner>

      <LoginInputForm />

      <div className="signUp-button flex justify-between min-w-[15rem]">
        <span className="text-gray-400">계정이 없다면? </span>
        <span className="font-medium text-brand-color">
          <button onClick={redirectSignupPage}>회원가입</button>{' '}
          <span>하러가기</span>
        </span>
      </div>
    </div>
  );
};

export default VLoginPage;
