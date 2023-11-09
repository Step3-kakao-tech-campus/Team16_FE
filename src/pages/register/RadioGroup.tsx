import registerState, { RegisterType } from 'recoil/registerState';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import VRadioGroup from './VRadioGroup';

const RadioGroup = () => {
  const [petInfo, setPetInfo] = useRecoilState(registerState);
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
      const tempPetInfo = { ...prev, [fieldName]: newValue };
      const isComplete = PET_INFO_REQUIRED_KEY.every((key) => tempPetInfo[key]);
      return {
        ...tempPetInfo,
        isComplete,
      };
    });
  };

  const handleSexChange = (value: string) => {
    setPetInfo((prev) => ({ ...prev, sex: value }));
  };
  const handleAdoptionStatusChange = (value: string) => {
    setPetInfo((prev) => ({ ...prev, adoptionStatus: value }));
  };
  const handleNeutralizationStatusChange = (value: string) => {
    setPetInfo((prev) => ({ ...prev, neutralizationStatus: value }));
  };
  useEffect(() => {
    // petInfo 상태가 변경될 때 원하는 동작을 수행할 수 있습니다.
  }, [petInfo.sex, petInfo.neutralizationStatus, petInfo.adoptionStatus]);

  const RadioGroupProps = {
    handleChange,
    handleSexChange,
    handleAdoptionStatusChange,
    handleNeutralizationStatusChange,
  };

  return <VRadioGroup {...RadioGroupProps} />;
};

export default RadioGroup;
