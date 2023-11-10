import RadioGroup from 'pages/register/components/RadioGroup';
import SelectBox from 'commons/components/SelectBox';
import InputGroup from 'commons/components/InputGroup';
import { RegisterProps } from '../updateType';

const VMRegisterForm = ({ handleChange, petInfo }: RegisterProps) => {
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
              defaultValue={petInfo.name}
            />
          </div>
          <div className="flex w-3/4 gap-2 whitespace-nowrap items-center ml-10 justify-center">
            <SelectBox id={1} label={'나이🔸'} />
            <div className="flex h-full items-end">년</div>
            <SelectBox id={2} label={'ㅤ'} />
            <div className="flex w-12 h-full items-end">개월</div>
            <SelectBox id={3} label={'종🔸'} />
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
            defaultValue={petInfo.size}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 w-3/4 sm:w-1/2 text-sm  mb-5">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor={'weight'} className="text-sm font-semibold">
            몸무게
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
            defaultValue={petInfo.weight}
          />
        </div>
        <div className=" w-full">
          <InputGroup
            id="vaccinationStatus"
            name="접종여부"
            type="text"
            placeholder="접종명과 차수를 입력해주세요"
            onChange={(e) => {
              handleChange(e);
            }}
            defaultValue={petInfo.vaccinationStatus}
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
            defaultValue={petInfo.description}
          />
        </div>
      </div>
    </div>
  );
};

export default VMRegisterForm;
