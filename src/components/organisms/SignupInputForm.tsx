import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';
import VSignupInputForm from './VSignupInputForm';

const SignupInputForm = () => {
  const [shelterInfo, setShelterInfo] = useRecoilState(shelterSignupState);
  const [confirm, setConfirm] = useState(false);

  const duplicateCheck = () => {
    // shelterInfo.email
    fetch(`${process.env.REACT_APP_URI}account/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: shelterInfo.email,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => console.log('Data', data));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    switch (target.id) {
      case 'email':
        setShelterInfo((prev) => ({ ...prev, email: target.value }));
        break;
      case 'password':
        setShelterInfo((prev) => ({ ...prev, password: target.value }));
        break;
      case 'shelter':
        setShelterInfo((prev) => ({ ...prev, name: target.value }));
        break;
      case 'shelter-contact':
        setShelterInfo((prev) => ({ ...prev, contact: target.value }));
        break;
      // 비밀번호 일치하지 않는 경우, 표시하기 위해 해당 부분 구현
      case 'password-confirm':
        if (target.value !== shelterInfo.password) {
          setConfirm(true);
        } else {
          setConfirm(false);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 회원가입 정보 보내는 API 적용해야 됨
    fetch(`${process.env.REACT_APP_URI}account/shelter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...shelterInfo,
        email: shelterInfo.email,
        password: shelterInfo.password,
        name: shelterInfo.name,
        contact: shelterInfo.contact,
        zonecode: shelterInfo.zonecode,
        address: shelterInfo.address,
      }),
    })
      .then((res) => {
        // const token = res.headers.get('Authorization');
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const SignupInputFormProps = {
    shelterInfo,
    handleChange,
    handleSubmit,
    duplicateCheck,
    confirm,
  };

  return <VSignupInputForm {...SignupInputFormProps} />;
};

export default SignupInputForm;
