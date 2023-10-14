import { useRecoilState } from 'recoil';
import registerState from 'recoil/registerState';
import VMRegisterForm from './VMRegisterForm';

const MRegisterForm = () => {
  const [petInfo, setPetInfo] = useRecoilState(registerState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const allFieldsFilled = Object.values(petInfo).every((value) => !!value);

    // if (allFieldsFilled) {
    //   setIsComplete(true);

    //   // 서버로 데이터 전송
    //   fetch(
    //     'http://ec2-3-37-14-140.ap-northeast-2.compute.amazonaws.com/api/pet',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         ...petInfo,
    //         name: petInfo.name,
    //         age: petInfo.age,
    //         type: petInfo.type,
    //         sex: petInfo.sex,
    //         adoptionStatus: petInfo.adoptionStatus,
    //         neutralizationStatus: petInfo.neutralizationStatus,
    //         weight: petInfo.weight,
    //         size: petInfo.size,
    //         vaccinationStatus: petInfo.vaccinationStatus,
    //         description: petInfo.description,
    //       }),
    //     },
    //   )
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // } else {
    //   // 필드가 모두 입력되지 않았다면 isComplete를 false로 설정
    //   setIsComplete(false);
    // }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const fieldName = target.id;
    const newValue = target.value;
    setPetInfo((prev) => ({ ...prev, [fieldName]: newValue }));

    // useState의 set함수로 petInfo를 업데이트해도, handleChange가 실행될 때의 petInfo는 업데이트 전의 petInfo를 가리킵니다.
    // 따라서 tempPetInfo를 만들어서 최신의 petInfo를 사용하도록 했습니다.
    const tempPetInfo = { ...petInfo, [fieldName]: newValue };
    const allFieldsFilled = Object.values(tempPetInfo).every((value, index) => {
      // isComplete는 petInfo의 모든 필드가 채워져 있을 때 true
      if (
        Object.keys(tempPetInfo)[index] === 'isComplete' ||
        Object.keys(tempPetInfo)[index] === 'protectionExpirationDate'
      )
        return true;
      return !!value;
    });
    if (allFieldsFilled) {
      setPetInfo((prev) => ({ ...prev, isComplete: true }));
    }
  };

  const MRegisterProps = {
    handleChange,
    handleSubmit,
  };

  return <VMRegisterForm {...MRegisterProps} />;
};

export default MRegisterForm;
