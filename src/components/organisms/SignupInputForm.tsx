import AddressInputGroup from 'components/molecules/AddressInputGroup';
import InputGroup from 'components/molecules/InputGroup';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';

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
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[400px]"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
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
      }}
    >
      <div className="email-confirm flex place-items-end justify-center">
        <InputGroup
          id="email"
          name="이메일"
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={handleChange}
        />
        <button className="bg-brand-color text-white rounded min-w-[100px] min-h-[44px]">
          중복 확인
        </button>
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
      {confirm && (
        <div className="text-red-500">비밀번호가 일치하지 않습니다.</div>
      )}
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
      <AddressInputGroup />
      <button className="bg-brand-color text-white w-full rounded-md p-2">
        회원가입
      </button>
    </form>
  );
};

export default SignupInputForm;
