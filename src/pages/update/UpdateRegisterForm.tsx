import VMRegisterForm from 'pages/register/VMRegisterForm';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import registerState, { RegisterType } from 'recoil/registerState';

interface PetProps {
  petInfo: RegisterType;
}

const UpdateRegisterForm = ({ petInfo }: PetProps) => {
  const [petInfoState, setPetInfo] = useRecoilState(registerState);

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const fieldName = target.id;
    const newValue = target.value;

    const updatedPetInfo = {
      ...petInfoState,
      [fieldName]: newValue,
    };

    // 상태 업데이트
    setPetInfo(updatedPetInfo);

    // useState의 set함수로 petInfo를 업데이트해도, handleChange가 실행될 때의 petInfo는 업데이트 전의 petInfo를 가리킵니다.
    // 따라서 tempPetInfo를 만들어서 최신의 petInfo를 사용하도록 했습니다.
    const tempPetInfo = { ...petInfo, [fieldName]: newValue };
    const allFieldsFilled = Object.values(tempPetInfo).every((value, index) => {
      // isComplete는 petInfo의 모든 필드가 채워져 있을 때 true
      if (index === Object.values(petInfo).length - 1) {
        return true;
      }
      return !!value;
    });
    if (allFieldsFilled) {
      setPetInfo((prev) => ({ ...prev, isComplete: true }));
    }
  };

  const MRegisterProps = {
    handleChange,
  };

  return <VMRegisterForm {...MRegisterProps} />;
};

export default UpdateRegisterForm;
