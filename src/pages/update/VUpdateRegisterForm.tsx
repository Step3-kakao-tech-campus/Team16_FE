import RadioGroup from 'pages/register/RadioGroup';
import SelectBox from 'commons/SelectBox';
import { RegisterType } from 'recoil/registerState';
import InputGroup from './UpdateInputGroup';

type RegisterProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  petInfo: RegisterType;
};

const VMRegisterForm = ({ handleChange, petInfo }: RegisterProps) => {
  console.log('dk', petInfo);
  console.log(petInfo.name);
  return (
    <div className="sm:mx-auto flex flex-col items-center gap-8 mt-10">
      <div className="flex justify-center items-center w-3/4 text-sm  mb-5 sm:gap-20 sm:w-1/2  ">
        <div className=" flex-col  justify-center sm:flex-row flex gap-5 w-full ">
          <div className="w-full justify-center">
            <InputGroup
              id="name"
              name="이름"
              type="text"
              placeholder={petInfo.name}
              onChange={(e) => {
                handleChange(e);
              }}
              value={petInfo.name}
            />
          </div>
          <div className="flex w-3/4 gap-5 whitespace-nowrap items-center ml-10 justify-center">
            <InputGroup
              id="age"
              name="나이"
              type="text"
              placeholder={petInfo.age}
              onChange={(e) => {
                handleChange(e);
              }}
              value={petInfo.age}
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
            placeholder={petInfo.size}
            onChange={(e) => {
              handleChange(e);
            }}
            value={petInfo.size}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 w-3/4 sm:w-1/2 text-sm  mb-5">
        <div className=" w-full">
          <InputGroup
            id="weight"
            name="몸무게"
            type="number"
            placeholder={`${petInfo.weight}`}
            onChange={(e) => {
              handleChange(e);
            }}
            value={petInfo.weight}
          />
        </div>
        <div className=" w-full">
          <InputGroup
            id="vaccinationStatus"
            name="접종여부"
            type="text"
            placeholder={petInfo.vaccinationStatus}
            onChange={(e) => {
              handleChange(e);
            }}
            value={petInfo.vaccinationStatus}
          />
        </div>
      </div>
      <div className="flex justify-center gap-5 sm:gap-20 w-3/4 sm:w-1/2 text-sm  mb-5">
        <div className="w-full">
          <InputGroup
            id="description"
            name="상세설명"
            type="text"
            placeholder={petInfo.description}
            onChange={(e) => {
              handleChange(e);
            }}
            value={petInfo.description}
          />
        </div>
      </div>
    </div>
  );
};

export default VMRegisterForm;
