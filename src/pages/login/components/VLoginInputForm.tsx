import InputGroup from 'commons/InputGroup';
import { ClipLoader } from 'react-spinners';
import { LoginInputFormProps, ValidationTextProps } from '../loginType';

const ValidateText = ({ text }: ValidationTextProps) => {
  return <div className="text-red-500">{text}</div>;
};

const VLoginInputForm = ({
  errors,
  isLoading,
  handleChange,
  handleSubmit,
}: LoginInputFormProps) => {
  return (
    <form
      className="flex flex-col gap-3 w-full max-w-[400px]"
      onSubmit={handleSubmit}
    >
      <InputGroup
        id="id"
        name="이메일"
        type="text"
        placeholder="이메일을 입력해주세요"
        onChange={(e) => {
          handleChange(e);
        }}
        autocomplete="off"
      />
      <ValidateText text={errors.email} />

      <InputGroup
        id="password"
        name="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => {
          handleChange(e);
        }}
        autocomplete="off"
      />
      <ValidateText text={errors.password} />
      <button className="flex justify-center items-center bg-brand-color text-white w-full rounded-md p-2">
        {isLoading ? (
          <ClipLoader size={20} color="#fff" loading={isLoading} />
        ) : (
          '로그인'
        )}
      </button>
    </form>
  );
};

export default VLoginInputForm;
