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
    console.log(list);
    const lili = list.filter((item) => {
      return item !== '';
    });
    if (lili.length === 10) {
      setPetInfo((prev) => ({ ...prev, isComplete: true }));
    } else setPetInfo((prev) => ({ ...prev, isComplete: false }));
  };

  // 안쓰는 이유 값이 없어서 안만들어지고 업데이트가 잘안됨.
  //   const allFieldsFilled = Object.values(tempPetInfo).every((value, index) => {
  //     console.log(value);
  //     // isComplete는 petInfo의 모든 필드가 채워져 있을 때 true
  //     if (index === Object.values(tempPetInfo).length - 2) {
  //       console.log(index, Object.values(tempPetInfo).length - 2);
  //       return true;
  //     }
  //     console.log(index);
  //     return !!value;
  //   });
  //   if (allFieldsFilled) {
  //     setPetInfo((prev) => ({ ...prev, isComplete: true }));
  //   }
  // };

  const MRegisterProps = {
    handleChange,
  };

  return <VMRegisterForm {...MRegisterProps} />;
};

export default MRegisterForm;
