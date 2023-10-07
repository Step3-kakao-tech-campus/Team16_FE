import InputGroup from 'components/molecules/InputGroup';
import RadioGroup from 'components/molecules/RadioGroup';
import SelectBox from 'components/molecules/SelectBox';

type RegisterProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MRegisterForm = ({ handleChange }: RegisterProps) => {
  return (
    <div className="flex flex-col items-center gap-8 mt-10">
      <div className="flex  justify-center sm:gap-20 w-1/2 text-sm  mb-5">
        <div className=" flex-col sm:flex-row flex gap-5 w-full ">
          <InputGroup
            id="name"
            name="이름"
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="name"
          />

          <InputGroup
            id="age"
            name="나이"
            type="number"
            placeholder="연도"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="age"
          />
          <SelectBox />
        </div>
      </div>
      <div className="flex justify-center gap-5 sm:gap-20 w-1/2 text-sm  mb-5">
        <div className="w-full">
          <RadioGroup />
        </div>
      </div>
      <div className="flex justify-center gap-5 sm:gap-20 w-1/2 text-sm  mb-5">
        <div className="w-full">
          <InputGroup
            id="size"
            name="크기"
            type="text"
            placeholder="주변 사물과 비교해서 작성해주셔도 좋아요!"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="size"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 w-1/2 text-sm  mb-5">
        <div className=" w-full">
          <InputGroup
            id="weight"
            name="몸무게"
            type="number"
            placeholder="kg 단위로 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="weight"
          />
        </div>
        <div className=" w-full">
          <InputGroup
            id="vaccinationStatus"
            name="접종여부"
            type="text"
            placeholder="접종차수를 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="vaccinationStatus"
          />
        </div>
      </div>
    </div>
  );
};

export default MRegisterForm;
