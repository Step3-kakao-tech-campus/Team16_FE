import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ShelterLoginType, shelterLoginState } from 'recoil/shelterState';
import * as Yup from 'yup';
import VLoginInputForm from './VLoginInputForm';
import { setCookie } from '../../commons/cookie/cookie';

const LoginInputForm = () => {
  const [userInfo, setUserInfo] = useRecoilState(shelterLoginState);
  const [errors, setErrors] = useState<Partial<ShelterLoginType>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('이메일 형식에 맞게 입력해주세요.')
      .required('이메일을 입력해주세요.'),
    password: Yup.string().required('비밀번호를 입력해주세요.'),
  });

  const userfetch = () => {
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
          console.log('로그인 실패로 token이 Null');
        }
        return res.json();
      })

      .then((data) => {
        console.log('data: ', data);
        if (data.success) {
          const { accountInfo, tokenExpirationDateTime } = data.response;
          const { id, role } = accountInfo;
          const expiredDate = new Date(tokenExpirationDateTime);

          setCookie('userAccountInfo', `${role} ${id}`);
          setCookie('expiredDate', String(expiredDate));
          setCookie('accountInfo', data.response.accountInfo);
          navigate('/');
        } else {
          // 형식은 맞지만 입력된 값이 가입되지 않은 계정일 때
          alert(data.error.message);
        }
        setIsLoading(false);
      });
  };

  const validateCheck = () => {
    validationSchema
      .validate(userInfo, { abortEarly: false })
      .then(() => {
        setErrors({});
      })
      .catch((err) => {
        const newErrors: Partial<ShelterLoginType> = {};
        err.inner.forEach(
          (er: { path: string; message: string | undefined }) => {
            newErrors[er.path as keyof ShelterLoginType] = er.message;
          },
        );
        setErrors(newErrors);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    validateCheck();
    userfetch();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.id === 'id') {
      setUserInfo((prev) => ({ ...prev, email: target.value }));
    } else if (target.id === 'password') {
      setUserInfo((prev) => ({ ...prev, password: target.value }));
    }
  };

  const LoginInputFormProps = {
    handleChange,
    handleSubmit,
    errors,
    isLoading,
  };

  return <VLoginInputForm {...LoginInputFormProps} />;
};

export default LoginInputForm;
