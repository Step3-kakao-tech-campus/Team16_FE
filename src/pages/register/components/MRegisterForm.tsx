import { useSetRecoilState } from 'recoil';
import registerState, { RegisterType } from 'recoil/registerState';
import VMRegisterForm from './VMRegisterForm';

const MRegisterForm = () => {
  const setPetInfo = useSetRecoilState(registerState);
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

  const MRegisterProps = {
    handleChange,
  };

  return <VMRegisterForm {...MRegisterProps} />;
};

export default MRegisterForm;
