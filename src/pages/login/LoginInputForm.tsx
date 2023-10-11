import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { shelterLoginState } from 'recoil/shelterState';
import VLoginInputForm from './VLoginInputForm';
import { setCookie } from '../../commons/cookie/cookie';

const LoginInputForm = () => {
  const [userInfo, setUserInfo] = useRecoilState(shelterLoginState);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [errorText, setErrorText] = useState('이메일을 입력해주세요');

  const navigate = useNavigate();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInfo.email) {
      setErrorText('이메일을 입력해주세요');
      setIsEmailEmpty(true);
    }
    if (!userInfo.password) {
      setIsPasswordEmpty(true);
    }
    // email, password 보내기
    fetch(`${process.env.REACT_APP_URI}/account/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...userInfo,
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then((res) => {
        const jwtToken = res.headers.get('Authorization');
        if (jwtToken) {
          const slicedToken = jwtToken.split(' ')[1];
          setCookie('loginToken', slicedToken);
        } else {
          console.log('Token이 Null');
        }

        return res.json();
      })
      .then((data) => {
        if (data.success) {
          // const token = getCookie('loginToken');
          navigate('/');
        }
      });
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

  const LoginInputFormProps = {
    handleChange,
    handleSubmit,
    isEmailEmpty,
    isPasswordEmpty,
    errorText,
  };

  // submit에 userInfo를 넣어주거나 button에서 보내도록 하는 것 필요!!!!
  return <VLoginInputForm {...LoginInputFormProps} />;
};

export default LoginInputForm;
