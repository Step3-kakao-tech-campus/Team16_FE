import Banner from 'components/atoms/Banner';
import PostCode from 'components/atoms/PostCode';
import LoginInputGroup from 'components/molecules/LoginInputGroup';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div
      style={{
        backgroundImage: 'url(assets/backgroundLogo.png)',
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
      <div className="email-confirm">
        <LoginInputGroup
          id="id"
          name="이메일"
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={handleChange}
        />
        <button className=" bg-brand-color font-Pretendard">중복 확인</button>
      </div>
      <LoginInputGroup
        id="password"
        name="비밀번호"
        type="text"
        placeholder="비밀번호를 입력해주세요."
        onChange={handleChange}
      />
      <LoginInputGroup
        id="password-confirm"
        name="비밀번호 확인"
        type="text"
        placeholder="비밀번호를 한번 더 입력해주세요."
        onChange={handleChange}
      />
      <LoginInputGroup
        id="shelter"
        name="보호소 이름"
        type="text"
        placeholder="보호소 이름을 입력해주세요."
        onChange={handleChange}
      />
      <LoginInputGroup
        id="shelter-contact"
        name="보호소 연락처"
        type="text"
        placeholder="보호소에 연락 가능한 연락처를 입력해주세요."
        onChange={handleChange}
      />
      {/* 보호소 주소 관련 -> 주소 받아와서 표시할 inputGroup 따로 만들어야 됨 */}
      <LoginInputGroup
        id="shelter-address"
        name="보호소 주소"
        type="text"
        placeholder="상세 주소"
        onChange={handleChange}
      />
      <PostCode />
      <button>회원가입</button>
      <div className="signUp-button">
        <span>계정이 이미 있다면? </span>
        <button onClick={() => navigate('/login')}>로그인 </button>{' '}
        <span>하러가기</span>
      </div>
    </div>
  );
};

export default SignupPage;
