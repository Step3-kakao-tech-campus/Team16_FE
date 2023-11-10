import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as Yup from 'yup';
import { ShelterSignupType, shelterSignupState } from 'recoil/shelterState';
import {
  EmailConfirmProps,
  EmailValidationProps,
  LoadingProps,
} from '../signupType';
import VSignupInputForm from './VSignupInputForm';
import SignupGuideModal from '../../../commons/modals/TextGuideModal';

const SignupInputForm = () => {
  const [shelterInfo, setShelterInfo] = useRecoilState(shelterSignupState);
  const [emailConfirm, setEmailConfirm] = useState<EmailConfirmProps>({
    isValid: false,
    checked: false,
  });
  const [passwordConfirm, setPasswordConfirm] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const [emailValidText, setEmailValidText] = useState<string>('');
  const [emailInValidText, setEmailInValidText] = useState<string>('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Partial<ShelterSignupType>>({});
  const [isLoading, setIsLoading] = useState<LoadingProps>({
    submitIsLoading: false,
    duplicateCheckIsLoading: false,
  });

  /** 프론트에서 유효성 검사 진행 */
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

  /** 회원가입 전 이메일 중복 검사를 완료했는지 / 검사 결과 적합했는지 확인
   * @param {string} validText : 적합한 경우 화면에 나타날 Text
   * @param {string} inValidText : 부적합한 경우 화면에 나타날 Text
   * @param {object} emailConfirmObj : 중복 검사 시행 확인 / 적합, 부적합을 판단하는 객체
   * @param {boolean} emailConfirmObj.isValid 적합(true), 부적합(false)을 판단
   * @param {boolean} emailConfirmObj.checked 중복 검사 시행(true) 확인
   */
  const getEmailValidText = ({
    validText,
    inValidText,
    emailConfirmObj,
  }: EmailValidationProps) => {
    setEmailValidText(validText);
    setEmailInValidText(inValidText);
    setEmailConfirm(emailConfirmObj);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  /**  이메일 중복 검사 api */
  const duplicateCheck = async () => {
    setErrors({});
    setIsLoading((prev) => ({ ...prev, duplicateCheckIsLoading: true }));
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URI}/account/email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: shelterInfo.email,
          }),
        },
      );

      const data = await response.json();

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
      return data;
    } finally {
      setIsLoading((prev) => ({ ...prev, duplicateCheckIsLoading: false }));
    }
  };

  /** 회원가입 api 요청
   * 이메일 중복 확인이 되었는지 확인
   * 필수 정보가 입력되었는지 확인
   * 정보가 제대로 입력되었을 때 api 요청
   */
  const userFetch = () => {
    getEmailValidText({
      validText: '',
      inValidText: '',
      emailConfirmObj: {
        isValid: false,
        checked: false,
      },
    });
    if (!emailConfirm.checked) {
      setErrors({});
      setModalText('이메일을 중복을 확인해주세요.');
      setIsLoading((prev) => ({ ...prev, submitIsLoading: false }));
      setModalOpen(true);
    } else if (emailConfirm.isValid && emailConfirm.checked) {
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
          if (!res.ok) {
            if (res.status === 400) {
              setModalText('필수 정보를 확인해주세요.');
              setModalOpen(true);
            }
            if (res.status === 500) {
              <SignupGuideModal
                open={modalOpen}
                text={'서버에 오류가 발생했습니다.'}
                onClose={handleModalClose}
              />;
            }
          }
          return res.json();
        })
        .then((data) => {
          if (!data.success) {
            getEmailValidText({
              validText: '',
              inValidText: '',
              emailConfirmObj: {
                isValid: false,
                checked: false,
              },
            });
          } else {
            navigate('/login');
          }
        });
      setIsLoading((prev) => ({ ...prev, submitIsLoading: false }));
    }
  };

  /** input에 들어가는 value에 따라 recoilState인 shelterInfo의 값 갱신
   * 비밀번호 일치하지 않는 경우 에러 텍스트 표시
   * 나머지 case의 경우, input value를 저장하는 용도로만 사용하기 때문에 default로 설정
   */
  const getInputValue = (target: HTMLInputElement) => {
    const inputKey = target.dataset.inputType as string;
    switch (inputKey) {
      case 'password-confirm':
        if (target.value !== shelterInfo.password) {
          setPasswordConfirm(false);
        } else {
          setPasswordConfirm(true);
        }
        break;
      default:
        setShelterInfo((prev) => ({ ...prev, [inputKey]: target.value }));
        break;
    }
  };

  /** yup을 통해 input value의 validation check 후 errorText를 errors state에 저장  */
  const validationCheck = () => {
    validationSchema
      .validate(shelterInfo, { abortEarly: false })
      .then(() => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setErrors({});
    getInputValue(target);
  };

  /** 회원가입 버튼 onSubmit handler
   * 유효성 검사 시행
   * userFetch가 동작하는 동안 Loader를 보여주기 위해 isLoading state 사용
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading((prev) => ({ ...prev, submitIsLoading: true }));
    validationCheck();
    userFetch();
  };

  const SignupInputFormProps = {
    handleChange,
    handleSubmit,
    handleModalClose,
    duplicateCheck,
    emailValidText,
    emailInValidText,
    passwordConfirm,
    errors,
    isLoading,
    modalOpen,
    modalText,
  };

  return <VSignupInputForm {...SignupInputFormProps} />;
};

export default SignupInputForm;
