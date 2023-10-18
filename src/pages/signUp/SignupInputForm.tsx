import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';
import VSignupInputForm from './VSignupInputForm';

export interface EmailConfirmProps {
  isValid: boolean;
  checked: boolean;
}

interface EmailValidProps {
  validText: string;
  inValidText: string;
  emailConfirmObj: EmailConfirmProps;
}

const SignupInputForm = () => {
  const [shelterInfo, setShelterInfo] = useRecoilState(shelterSignupState);
  // confirm state의 경우, 일치하지 않을 때 false
  // isValid: 중복검사 통과했는가?
  // checked: 이메일 중복 검사를 했는가?
  const [emailConfirm, setEmailConfirm] = useState<EmailConfirmProps>({
    isValid: true,
    checked: false,
  });
  const [passwordConfirm, setPasswordConfirm] = useState(true);
  const { isValid, checked } = emailConfirm;
  const [emailValidText, setEmailValidText] = useState('');
  const [emailInValidText, setEmailInValidText] = useState('');

  const navigate = useNavigate();

  const getEmailValidText = ({
    validText,
    inValidText,
    emailConfirmObj,
  }: EmailValidProps) => {
    setEmailValidText(validText);
    setEmailInValidText(inValidText);
    setEmailConfirm(emailConfirmObj);
  };

  const duplicateCheck = () => {
    // shelterInfo.email
    fetch(`${process.env.REACT_APP_URI}/account/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: shelterInfo.email,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.success) {
          getEmailValidText({
            validText: '',
            inValidText: data.error.message,
            emailConfirmObj: {
              isValid: false,
              checked: false,
            },
          });
        } else if (!shelterInfo.email) {
          getEmailValidText({
            validText: '',
            inValidText: '',
            // 안 넣으면 빈칸으로 공간 차지해서 이렇게 조건 넣어줌
            emailConfirmObj: {
              isValid: false,
              checked: true,
            },
          });
        } else {
          getEmailValidText({
            validText: '사용 가능한 이메일입니다.',
            inValidText: '',
            emailConfirmObj: {
              isValid: true,
              checked: true,
            },
          });
        }
      });
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
          setPasswordConfirm(false);
        } else {
          setPasswordConfirm(true);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 중복 확인이 되지 않았을 때
    if (!emailConfirm.checked) {
      alert('이메일 중복을 확인해주세요');
    }
    // 제대로 확인되었을 때
    if (emailConfirm.isValid && passwordConfirm) {
      fetch(`${process.env.REACT_APP_URI}/account/shelter`, {
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
          return res.json();
        })
        .then((data) => {
          if (!data.success) {
            alert(data.error.message); // 이 부분은 주소 받는 거 때문에 그냥 텍스트만 넣기 애매함
            return;
          }
          navigate('/login');
        });
    }
  };

  const SignupInputFormProps = {
    shelterInfo,
    handleChange,
    handleSubmit,
    duplicateCheck,
    passwordConfirm,
    isValid,
    checked,
    emailValidText,
    emailInValidText,
  };

  return <VSignupInputForm {...SignupInputFormProps} />;
};

export default SignupInputForm;
