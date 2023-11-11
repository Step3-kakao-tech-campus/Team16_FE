import InputGroup from 'commons/components/InputGroup';
import RadioGroup from 'pages/register/components/RadioGroup';
import SelectBox from 'commons/components/SelectBox';
import { RegisterProps } from '../registerType';

const VMRegisterForm = ({ handleChange }: RegisterProps) => {
  return (
    <div className="sm:mx-auto flex flex-col justify-center items-center gap-8 mt-10">
      <div className="flex justify-center items-center w-fit text-sm  mb-5 sm:gap-20  ">
        <div className=" flex-col  justify-center md:flex-row flex gap-5 w-full ">
          <div className=" flex md:w-96 justify-center">
            <InputGroup
              id="name"
              name="이름🔸"
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={(e) => {
                handleChange(e);
              }}
              autocomplete="on"
            />
          </div>
          <div className="flex gap-2 whitespace-nowrap items-center justify-start md:justify-center">
            <SelectBox id={1} label={'나이🔸'} />
            <div className="flex h-full items-end">년</div>
            <SelectBox id={2} label={'ㅤ'} />
            <div className="flex w-12 h-full items-end">개월</div>
            <SelectBox id={3} label={'종🔸'} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:gap-20 w-fittext-sm mb-5">
        <div className="w-full center ">
          <RadioGroup />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 w-fit text-sm  mb-5">
        <div className="flex w-full md:w-80 justify-center">
          <InputGroup
            id="size"
            name="크기🔸"
            type="text"
            placeholder="주변 사물과 비교해서 작성해주셔도 좋아요!"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="on"
          />
        </div>
        <div className="flex md:w-80 justify-center">
          <InputGroup
            id="vaccinationStatus"
            name="접종여부🔸"
            type="text"
            placeholder="접종명과 차수를 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            autocomplete="off"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 w-fit text-sm  mb-10">
        <div className="flex flex-col justify-center gap-1 md:w-64">
          <label htmlFor={'weight'} className="text-sm font-semibold">
            몸무게🔸
          </label>
          <input
            className="border-2 rounded-md border-gray-300 p-2"
            id="weight"
            name="몸무게"
            type="number"
            placeholder="kg 단위로 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            autoComplete="off"
            min={1}
          />
        </div>
        <div className="md:w-96 justify-center flex">
          <InputGroup
            id="description"
            name="상세설명🔸"
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
