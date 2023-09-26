import { useNavigate } from 'react-router-dom';
import Banner from 'components/atoms/Banner';
import LoginInputForm from 'components/organisms/LoginInputForm';
import React from 'react';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Banner className="font-bold text-2xl">로그인</Banner>
      <Banner className="font-semibold text-lg">
        애니모리 친구들이 기다리고 있어요 :)
      </Banner>

      <LoginInputForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // email, password 보내기
          console.log('submit');
        }}
      />

      <div className="signUp-button">
        <span>게정이 없다면? </span>
        <button onClick={() => navigate('/signup')}>회원가입 하러가기</button>
      </div>
    </div>
  );
};

export default LoginPage;
