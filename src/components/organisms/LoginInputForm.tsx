import LoginInputGroup from 'components/molecules/LogInInputGroup';
import React from 'react';

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const LoginInputForm = ({ onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <LoginInputGroup
        id="id"
        name="이메일"
        type="text"
        placeholder="이메일을 입력해주세요"
      />
      <LoginInputGroup
        id="password"
        name="비밀번호"
        type="text"
        placeholder="비밀번호를 입력해주세요"
      />
      <button>로그인</button>
    </form>
  );
};

export default LoginInputForm;
