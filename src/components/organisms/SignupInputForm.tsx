import AddressInputGroup from 'components/molecules/AddressInputGroup';
import InputGroup from 'components/molecules/InputGroup';
import { useState } from 'react';

const SignupInputForm = () => {
  const [shelterInfo, setShelterInfo] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    shelter: '',
    shelterContact: '',
  });
  const [userAddress, setUserAddress] = useState({
    zonecode: '',
    sido: '',
    sigungu: '',
    roadname: '',
    detail: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    switch (target.id) {
      case 'email':
        setShelterInfo((prev) => ({ ...prev, email: target.value }));
        break;
      case 'password':
        setShelterInfo((prev) => ({ ...prev, password: target.value }));
        break;
      case 'password-confirm':
        setShelterInfo((prev) => ({ ...prev, passwordConfirm: target.value }));
        break;
      case 'shelter':
        setShelterInfo((prev) => ({ ...prev, shelter: target.value }));
        break;
      case 'shelter-contact':
        setShelterInfo((prev) => ({ ...prev, shelterContact: target.value }));
        break;
      default:
        break;
    }
  };
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 회원가입 정보 보내는 API 적용해야 됨
        console.log(e.target);
      }}
    >
      <div className="email-confirm">
        <InputGroup
          id="email"
          name="이메일"
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={handleChange}
        />
        <button className=" bg-brand-color font-Pretendard">중복 확인</button>
      </div>
      <InputGroup
        id="password"
        name="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={handleChange}
      />
      <InputGroup
        id="password-confirm"
        name="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요."
        onChange={handleChange}
      />
      <InputGroup
        id="shelter"
        name="보호소 이름"
        type="text"
        placeholder="보호소 이름을 입력해주세요."
        onChange={handleChange}
      />
      <InputGroup
        id="shelter-contact"
        name="보호소 연락처"
        type="text"
        placeholder="보호소에 연락 가능한 연락처를 입력해주세요."
        onChange={handleChange}
      />
      <AddressInputGroup
        userAddress={userAddress}
        setUserAddress={setUserAddress}
      />
      <button>회원가입</button>
    </form>
  );
};

export default SignupInputForm;
