import { useRecoilState } from 'recoil';
import { useState } from 'react';
import registerType from 'recoil/registerState';
import VMRegisterForm from './VMRegisterForm';

const MRegisterForm = () => {
  const [petInfo, setPetInfo] = useRecoilState(registerType);

  // isComplete 상태를 관리
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allFieldsFilled = Object.values(petInfo).every((value) => !!value);

    if (allFieldsFilled) {
      setIsComplete(true);

      // 서버로 데이터 전송
      fetch(
        'http://ec2-3-37-14-140.ap-northeast-2.compute.amazonaws.com/api/pet',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...petInfo,
            name: petInfo.name,
            age: petInfo.age,
          }),
        },
      )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // 필드가 모두 입력되지 않았다면 isComplete를 false로 설정
      setIsComplete(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const fieldName = target.id;
    const newValue = target.value;

    setPetInfo((prev) => ({ ...prev, [fieldName]: newValue }));
  };

  const MRegisterProps = {
    handleChange,
    handleSubmit,
    isComplete,
  };

  return <VMRegisterForm {...MRegisterProps} />;
};

export default MRegisterForm;
