import registerState, { RegisterType } from 'recoil/registerState';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import VRadioGroup from './VRadioGroup';

const RadioGroup = () => {
  const [petInfo, setPetInfo] = useRecoilState(registerState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const fieldName = target.id;
    const newValue = target.value;
    setPetInfo((prev) => ({ ...prev, [fieldName]: newValue }));

    // useState의 set함수로 petInfo를 업데이트해도, handleChange가 실행될 때의 petInfo는 업데이트 전의 petInfo를 가리킵니다.
    // 따라서 tempPetInfo를 만들어서 최신의 petInfo를 사용하도록 했습니다.
    const tempPetInfo = { ...petInfo, [fieldName]: newValue };
    const list = [
      tempPetInfo.age,
      tempPetInfo.name,
      tempPetInfo.adoptionStatus,
      tempPetInfo.type,
      tempPetInfo.weight,
      tempPetInfo.description,
      tempPetInfo.sex,
      tempPetInfo.size,
      tempPetInfo.vaccinationStatus,
      tempPetInfo.neutralizationStatus,
    ];
    console.log('리스트', list);
    const lili = list.filter((item) => {
      return item !== '';
    });
    if (lili.length === 10) {
      setPetInfo((prev) => ({ ...prev, isComplete: true }));
    } else setPetInfo((prev) => ({ ...prev, isComplete: false }));
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
