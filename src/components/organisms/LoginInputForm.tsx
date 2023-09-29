import LoginInputGroup from 'components/molecules/InputGroup';
import React, { useState } from 'react';

const LoginInputForm = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.id === 'id') {
      setUserInfo((prev) => ({ ...prev, email: target.value }));
    } else if (target.id === 'password') {
      setUserInfo((prev) => ({ ...prev, password: target.value }));
    }
  };

  // submit에 userInfo를 넣어주거나 button에서 보내도록 하는 것 필요!!!!
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[400px]"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // email, password 보내기
        // emailValidate(); 필요
        console.log(e.target);
      }}
    >
      <LoginInputGroup
        id="id"
        name="이메일"
        type="text"
        placeholder="이메일을 입력해주세요"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LoginInputGroup
        id="password"
        name="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button className="bg-brand-color text-white w-full rounded-md p-2">
        로그인
      </button>
    </form>
  );
};

export default LoginInputForm;
