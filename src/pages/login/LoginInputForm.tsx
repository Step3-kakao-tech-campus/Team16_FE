import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ShelterLoginType, shelterLoginState } from 'recoil/shelterState';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import VLoginInputForm from './VLoginInputForm';
import { setCookie } from '../../commons/cookie/cookie';

const LoginInputForm = () => {
  const [userInfo, setUserInfo] = useRecoilState(shelterLoginState);
  const [errors, setErrors] = useState<Partial<ShelterLoginType>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const currentDate = new Date();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('이메일 형식에 맞게 입력해주세요.')
      .required('이메일을 입력해주세요.'),
    password: Yup.string().required('비밀번호를 입력해주세요.'),
  });

  const userFetch = async () => {
    const res = await fetch(`${process.env.REACT_APP_URI}/account/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...userInfo,
        email: userInfo.email,
        password: userInfo.password,
      }),
    });

    if (!res.ok) {
      // error 발생 시 처리는 status 값에 따라 하는 것으로 변경 필요
      const errorData = await res.json();
      console.error('userFetchError: ', errorData);
    }

    const response = await res.json();
    const jwtToken = res.headers.get('Authorization');
    const token = jwtToken ? jwtToken.split(' ')[1] : '';

    return { response, token };
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

  const mutation = useMutation(userFetch, {
    onSuccess: (data) => {
      const { accountInfo, tokenExpirationDateTime } = data.response.response;
      const { id, role } = accountInfo;
      const tokenExpirationDate = new Date(tokenExpirationDateTime);
      const timeDifferenceseconds = Math.floor(
        (Number(tokenExpirationDate) - Number(currentDate)) / 1000,
      );

      setCookie('accountInfo', `${role} ${id}`, {
        expires: tokenExpirationDate,
        maxAge: timeDifferenceseconds,
      });
      setCookie('loginToken', data.token, {
        expires: tokenExpirationDate,
        maxAge: timeDifferenceseconds,
      });
      navigate('/');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    validateCheck();
    mutation.mutate();
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
