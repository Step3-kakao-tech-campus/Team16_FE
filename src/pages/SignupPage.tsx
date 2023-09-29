import Banner from 'components/atoms/Banner';
import SignupInputForm from 'components/organisms/SignupInputForm';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: 'url(assets/images/backgroundLogo.png)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Banner className="font-bold text-2xl">회원가입</Banner>
      <Banner className="font-semibold text-lg">
        애니모리에 오신 것을 환영합니다!
      </Banner>
      <Banner className="font-semibold text-lg">
        아이들이 따뜻한 가족을 찾을 수 있게 도와주세요 :)
      </Banner>

      {/* 보호소 주소 관련 -> 주소 받아와서 표시할 SignupInputGroup 따로 만들어야 됨 */}
      <SignupInputForm />

      <div className="signUp-button">
        <span>계정이 이미 있다면? </span>
        <button onClick={() => navigate('/login')}>로그인 </button>{' '}
        <span>하러가기</span>
      </div>
    </div>
  );
};

export default SignupPage;
