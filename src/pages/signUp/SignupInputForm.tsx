import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ShelterSignupType, shelterSignupState } from 'recoil/shelterState';
import * as Yup from 'yup';
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

  const [errors, setErrors] = useState<Partial<ShelterSignupType>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('이메일 형식에 맞게 입력해주세요.')
      .required('이메일을 입력해주세요.'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])/,
        '적어도 1개 이상의 영문 소문자가 포함되어야 합니다.',
      )
      .matches(
        /^(?=.*[A-Z])/,
        '적어도 1개 이상의 영문 대문자가 포함되어야 합니다.',
      )
      .matches(/^(?=.*\d)/, '적어도 1개 이상의 숫자가 포함되어야 합니다.')
      .matches(
        /^(?=.*[@$!%*?&])/,
        '적어도 1개 이상의 특수기호가 포함되어야 합니다.',
      )
      .matches(
        /^[A-Za-z\d@$!%*?&]{8,20}$/,
        '비밀번호는 8자에서 20자 사이여야 합니다.',
      )
      .required('비밀번호를 입력해주세요.'),
    passwordConfirm: Yup.string()
      .required('비밀번호 확인은 필수 입력 사항입니다.')
      .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
    name: Yup.string().required('보호소 이름을 입력해주세요.'),
    contact: Yup.string().required(
      '보호소에 연락 가능한 연락처를 입력해주세요.',
    ),
  });

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

  const userfetch = () => {
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
    validationSchema
      .validate(shelterInfo, { abortEarly: false })
      .then(() => {
        setIsLoading(true);
        userfetch();
        setErrors({});
      })
      .catch((err) => {
        const newErrors: Partial<ShelterSignupType> = {};
        err.inner.forEach(
          (er: {
            path: string;
            message:
              | (string & {
                  province: string;
                  city: string;
                  roadName: string;
                  detail: string;
                })
              | undefined;
          }) => {
            newErrors[er.path as keyof ShelterSignupType] = er.message;
          },
        );
        setErrors(newErrors);
      });
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
    errors,
    isLoading,
  };

  return <VSignupInputForm {...SignupInputFormProps} />;
};

export default SignupInputForm;
