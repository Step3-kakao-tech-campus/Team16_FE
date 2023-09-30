import LoginInputGroup from 'components/molecules/InputGroup';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { shelterLoginState } from 'recoil/shelterState';

const LoginInputForm = () => {
  const [userInfo, setUserInfo] = useRecoilState(shelterLoginState);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [errorText, setErrorText] = useState('이메일을 입력해주세요');

  // const navigate = useNavigate();

  const emailValidate = (text: string) => {
    const emailReg = /^[\w.-]+@[\w.-]+\.\w+$/g; // email형식
    if (!emailReg.test(text)) {
      setErrorText('이메일 형식에 맞게 입력해주세요');
      setIsEmailEmpty(true);
      return;
    }
    setErrorText('');
    setIsEmailEmpty(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.id === 'id') {
      setUserInfo((prev) => ({ ...prev, email: target.value }));
      emailValidate(userInfo.email);
      setIsEmailEmpty(true);
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
        if (!userInfo.email) {
          setErrorText('이메일을 입력해주세요');
          setIsEmailEmpty(true);
        }
        if (!userInfo.password) {
          setIsPasswordEmpty(true);
        }
        // email, password 보내기
        fetch(
          'http://ec2-3-37-14-140.ap-northeast-2.compute.amazonaws.com/api/docs/shelter/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...userInfo,
              email: userInfo.email,
              password: userInfo.password,
            }),
          },
        ).then((res) => {
          console.log(res);
          // if (res.status === 200) {
          //   navigate('/');
          // }
        });
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
      {isEmailEmpty && <div className="text-red-500">{errorText}</div>}
      <LoginInputGroup
        id="password"
        name="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {isPasswordEmpty && (
        <div className="text-red-500">비밀번호를 입력해주세요.</div>
      )}
      <button className="bg-brand-color text-white w-full rounded-md p-2">
        로그인
      </button>
    </form>
  );
};

export default LoginInputForm;
