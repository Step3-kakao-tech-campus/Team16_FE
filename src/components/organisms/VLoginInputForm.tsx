import InputGroup from 'components/molecules/InputGroup';

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isEmailEmpty: boolean;
  isPasswordEmpty: boolean;
  errorText: string;
};

const VLoginInputForm = ({
  handleChange,
  handleSubmit,
  isEmailEmpty,
  isPasswordEmpty,
  errorText,
}: Props) => {
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
        autocomplete="email"
      />
      {isEmailEmpty && <div className="text-red-500">{errorText}</div>}
      <InputGroup
        id="password"
        name="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => {
          handleChange(e);
        }}
        autocomplete="current-password"
      />
      {isPasswordEmpty && (
        <div className="text-red-500">비밀번호를 입력해주세요.</div>
      )}
      <button className="bg-brand-color text-white w-full rounded-md p-2">
        로그인
      </button>
    </form>
  );
};

export default VLoginInputForm;
