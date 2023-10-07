import InputGroup from 'components/molecules/InputGroup';
import RadioGroup from 'components/molecules/RadioGroup';
import SelectBox from 'components/molecules/SelectBox';

type RegisterProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MRegisterForm = ({ handleChange }: RegisterProps) => {
  return (
    <div className="justify-center w-full">
      <div className="flex flex-col-3 gap-10 max-w-[600px]  text-sm  mb-5">
        <div className=" max-w-[250px]">
          <InputGroup
            id="name"
            name="이름"
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="email"
          />
        </div>
        <div className=" max-w-[100px] text-sm">
          <InputGroup
            id="age"
            name="나이"
            type="number"
            placeholder="연도"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="email"
          />
        </div>
        <SelectBox />
      </div>
      <div className=" mb-5">
        <RadioGroup />
      </div>
      <div className=" max-w-[450px] mb-5  text-sm">
        <InputGroup
          id="size"
          name="크기"
          type="text"
          placeholder="주변 사물과 비교해서 작성해주셔도 좋아요!"
          onChange={(e) => {
            handleChange(e);
          }}
          autocomplete="email"
        />
      </div>
      <div className="flex flex-col-3 gap-8 max-w-[600px] mb-5 text-sm">
        <div className=" max-w-[210px]">
          <InputGroup
            id="weight"
            name="몸무게"
            type="number"
            placeholder="kg단위로 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="email"
          />
        </div>
        <div className=" max-w-[210px]">
          <InputGroup
            id="vaccination"
            name="접종여부"
            type="number"
            placeholder="접종차수를 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="email"
          />
        </div>
      </div>
    </div>
  );
};

export default MRegisterForm;
