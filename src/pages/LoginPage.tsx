import { useNavigate } from 'react-router-dom';
import Banner from 'components/atoms/Banner';
import LoginInputForm from 'components/organisms/LoginInputForm';
import React from 'react';

interface UserInfo {
  email: string;
  password: string;
}

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
      style={{
        backgroundImage: 'url(assets/backgroundLogo.png)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Banner className="font-bold text-2xl">로그인</Banner>
      <Banner className="font-semibold text-lg">
        애니모리 친구들이 기다리고 있어요 :)
      </Banner>

      <LoginInputForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // email, password 보내기
          // emailValidate();
          console.log(e.target);
        }}
      />

      <div className="signUp-button">
        <span>게정이 없다면? </span>
        <button onClick={() => navigate('/signup')}>회원가입</button>{' '}
        <span>하러가기</span>
      </div>
    </div>
  );
};

export default LoginPage;
