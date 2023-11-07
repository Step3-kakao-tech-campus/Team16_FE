import AddressInputGroup from 'pages/signUp/components/AddressInputGroup';
import InputGroup from 'commons/InputGroup';
import { ClipLoader } from 'react-spinners';
import { VSignupInputProps, ValidationProps } from '../signupType';

const ValidateText = ({ text, className }: ValidationProps) => {
  return text ? <div className={className}>{text}</div> : null;
};

const VSignupInputForm = ({
  handleChange,
  handleSubmit,
  duplicateCheck,
  emailValidText,
  emailInValidText,
  passwordConfirm,
  errors,
  isLoading,
}: VSignupInputProps) => {
  return (
    <form
      className="flex flex-col gap-3 w-full max-w-[400px] px-2"
      onSubmit={handleSubmit}
    >
      <div className="email-confirm flex place-items-end justify-center">
        <InputGroup
          id="email"
          dataInputType="email"
          name="이메일"
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={handleChange}
          autocomplete="off"
        />
        <button
          type="button" // type을 버튼으로 지정해주면 handleSubmit이 작동하지 않음 -> onClick만 동작
          className="bg-brand-color text-white rounded min-w-[100px] min-h-[44px]"
          onClick={duplicateCheck}
        >
          {isLoading.duplicateCheckIsLoading ? (
            <ClipLoader
              size={20}
              color="#fff"
              loading={isLoading.duplicateCheckIsLoading}
            />
          ) : (
            '중복 확인'
          )}
        </button>
      </div>
      <ValidateText text={emailValidText} className={'text-green-500'} />
      <ValidateText text={emailInValidText} className={'text-red-500'} />
      <ValidateText text={errors.email} className={'text-red-500'} />
      <InputGroup
        id="password"
        dataInputType="password"
        name="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={handleChange}
        autocomplete="off"
      />
      <ValidateText text={errors.password} className={'text-red-500'} />
      <InputGroup
        id="password-confirm"
        dataInputType="password-confirm"
        name="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요."
        onChange={handleChange}
        autocomplete="off"
      />
      {!passwordConfirm && (
        <div className="text-red-500">비밀번호가 일치하지 않습니다.</div>
      )}
      <InputGroup
        id="shelter"
        dataInputType="name"
        name="보호소 이름"
        type="text"
        placeholder="보호소 이름을 입력해주세요."
        onChange={handleChange}
        autocomplete="off"
      />
      <ValidateText text={errors.name} className={'text-red-500'} />
      <InputGroup
        id="shelter-contact"
        dataInputType="contact"
        name="보호소 연락처"
        type="text"
        placeholder="보호소에 연락 가능한 연락처를 입력해주세요."
        onChange={handleChange}
        autocomplete="off"
      />
      <ValidateText text={errors.contact} className={'text-red-500'} />
      <AddressInputGroup />
      <button className="bg-brand-color text-white w-full rounded-md p-2">
        {isLoading.submitIsLoading ? (
          <ClipLoader
            size={20}
            color="#fff"
            loading={isLoading.submitIsLoading}
          />
        ) : (
          '회원가입'
        )}
      </button>
    </form>
  );
};

export default VSignupInputForm;
