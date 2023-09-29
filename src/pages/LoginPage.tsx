import { useNavigate } from 'react-router-dom';
import Banner from 'components/atoms/Banner';
import LoginInputForm from 'components/organisms/LoginInputForm';

const LoginPage = () => {
  const navigate = useNavigate();
  // const emailReg = /^[\w.-]+@[\w.-]+\.\w+$/g; // email형식
  // userIdRegex.test(e.target.value) -> state에 따라 true false 값 가져오기 -> validation 함수 필요

  const emailValidate = (text: string) => {
    const emailReg = /^[\w.-]+@[\w.-]+\.\w+$/g;
    if (!emailReg.test(text)) {
      return <div>Error Message</div>;
    }
    return <div>success</div>;
  };

  return (
    <div
      className="flex flex-col max-w-[100rem] justify-center items-center gap-4 h-screen"
      style={{
        backgroundImage: 'url(assets/images/backgroundLogo.png)',
        backgroundRepeat: 'no-repeat',
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
          <button onClick={() => navigate('/signup')}>회원가입</button>{' '}
          <span>하러가기</span>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
