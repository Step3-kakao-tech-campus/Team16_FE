import { useState } from 'react';
import { useRecoilState } from 'recoil';
import registerState, { RegisterType } from 'recoil/registerState';
import VMRegisterForm from './VUpdateRegisterForm';

interface PetProps {
  petInfo: RegisterType;
}

const UpdateRegisterForm = ({ petInfo }: PetProps) => {
  const [petInfoState, setPetInfo] = useRecoilState(registerState);
  const PET_INFO_REQUIRED_KEY: (keyof RegisterType)[] = [
    'age',
    'name',
    'adoptionStatus',
    'type',
    'weight',
    'description',
    'sex',
    'size',
    'vaccinationStatus',
    'neutralizationStatus',
  ];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const fieldName = target.id;
    const newValue = target.value;
    setPetInfo((prev) => {
      const updatedPetInfo = {
        ...prev,
        [fieldName]: newValue,
      };
      const isComplete = PET_INFO_REQUIRED_KEY.every(
        (key) => updatedPetInfo[key],
      );
      return {
        ...updatedPetInfo,
        isComplete,
      };
    });
  };

  const MRegisterProps = {
    handleChange,
    petInfo,
  };

  return <VMRegisterForm {...MRegisterProps} />;
};

export default UpdateRegisterForm;
