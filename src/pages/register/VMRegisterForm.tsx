import InputGroup from 'commons/InputGroup';
import RadioGroup from 'pages/register/RadioGroup';
import SelectBox from 'commons/SelectBox';

type RegisterProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const VMRegisterForm = ({ handleChange }: RegisterProps) => {
  return (
    <div className="sm:mx-auto flex flex-col items-center gap-8 mt-10">
      <div className="flex justify-center items-center w-3/4 text-sm  mb-5 sm:gap-20 sm:w-1/2  ">
        <div className=" flex-col  justify-center sm:flex-row flex gap-5 w-full ">
          <div className="w-full justify-center">
            <InputGroup
              id="name"
              name="이름"
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={(e) => {
                handleChange(e);
              }}
              autocomplete="on"
            />
          </div>
          <div className="flex w-3/4 gap-5 whitespace-nowrap items-center ml-10 justify-center">
            <InputGroup
              id="age"
              name="나이"
              type="text"
              placeholder="'00년 00개월'과 같이 작성해주세요."
              onChange={(e) => {
                handleChange(e);
              }}
              autocomplete="on"
            />
            <SelectBox />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center sm:gap-20 w-3/4 sm:w-1/2 text-sm mb-5">
        <div className="w-full">
          <RadioGroup />
        </div>
      </div>
      <div className="flex justify-center gap-5 sm:gap-20 w-3/4 sm:w-1/2 text-sm  mb-5">
        <div className="w-full">
          <InputGroup
            id="size"
            name="크기"
            type="text"
            placeholder="주변 사물과 비교해서 작성해주셔도 좋아요!"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="on"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 w-3/4 sm:w-1/2 text-sm  mb-5">
        <div className=" w-full">
          <InputGroup
            id="weight"
            name="몸무게"
            type="number"
            placeholder="kg 단위로 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="off"
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
            autocomplete="off"
          />
        </div>
      </div>
      <div className="flex justify-center gap-5 sm:gap-20 w-3/4 sm:w-1/2 text-sm  mb-5">
        <div className="w-full">
          <InputGroup
            id="description"
            name="상세설명"
            type="text"
            placeholder="상세 설명을 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default VMRegisterForm;
