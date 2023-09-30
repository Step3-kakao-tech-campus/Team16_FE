import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';
// eslint-disable-next-line import/no-cycle
import VSignupInputForm from './VSignupInputForm';

const SignupInputForm = () => {
  const [shelterInfo, setShelterInfo] = useRecoilState(shelterSignupState);
  const [confirm, setConfirm] = useState(false);

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
    fetch(
      'http://ec2-3-37-14-140.ap-northeast-2.compute.amazonaws.com/api/docs/shelter/login',
      {
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
          // zonecode: shelterInfo.zonecode,
          address: shelterInfo.address,
        }),
      },
    ).then((res) => {
      console.log(res);
      // if (res.status === 200) {
      //   navigate('/');
      // }
    });
  };

  const SignupInputFormProps = {
    shelterInfo,
    handleChange,
    handleSubmit,
    confirm,
  };

  return <VSignupInputForm {...SignupInputFormProps} />;
};

export default SignupInputForm;
