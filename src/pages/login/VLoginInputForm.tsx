import InputGroup from 'commons/InputGroup';

interface LoginInputFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isEmailEmpty: boolean;
  isPasswordEmpty: boolean;
  errorText: string;
}

interface ErrorTextProps {
  isEmpty: boolean;
  text: string;
}

const ErrorText = ({ isEmpty, text }: ErrorTextProps) => {
  return <div>{isEmpty && <span className="text-red-500">{text}</span>}</div>;
};

const VLoginInputForm = ({
  handleChange,
  handleSubmit,
  isEmailEmpty,
  isPasswordEmpty,
  errorText,
}: LoginInputFormProps) => {
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[400px]"
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
      <ErrorText isEmpty={isEmailEmpty} text={errorText} />

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
      <ErrorText isEmpty={isPasswordEmpty} text="비밀번호를 입력해주세요." />
      <button className="bg-brand-color text-white w-full rounded-md p-2">
        로그인
      </button>
    </form>
  );
};

export default VLoginInputForm;
