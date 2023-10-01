import AddressInputGroup from 'components/molecules/AddressInputGroup';
import InputGroup from 'components/molecules/InputGroup';
import React from 'react';
import { ShelterSignupType } from 'recoil/shelterState';

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  confirm: boolean;
};

const VSignupInputForm = ({ handleChange, handleSubmit, confirm }: Props) => {
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[400px]"
      onSubmit={handleSubmit}
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

export default VSignupInputForm;
