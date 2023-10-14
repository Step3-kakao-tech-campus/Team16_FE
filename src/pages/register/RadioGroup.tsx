import registerState, { RegisterType } from 'recoil/registerState';
import { useRecoilState } from 'recoil';
import DetailRadio from './DetailRadio';

export function checkIfAllFilled(data: RegisterType) {
  const allFieldsFilled = Object.values(data).every((value) => !!value);
  return allFieldsFilled;
}

const RadioGroup = () => {
  const [registerData, setRegisterData] =
    useRecoilState<RegisterType>(registerState);

  const handleSexChange = (value: string) => {
    setRegisterData((prev) => ({ ...prev, sex: value }));
    console.log(registerData);
  };
  const handleAdoptionStatusChange = (value: string) => {
    setRegisterData((prev) => ({ ...prev, adoptionStatus: value }));
  };
  const handleNeutralizationStatusChange = (value: string) => {
    setRegisterData((prev) => ({ ...prev, neutralizationStatus: value }));
  };
  return (
    <div className="flex flex-col sm:flex-row sm:gap-20 justify-center">
      <div>
        <h2 className="font-semibold my-3  whitespace-nowrap">성별</h2>
        <div className="grid grid-cols-2 gap-8 text-sm  whitespace-nowrap">
          <DetailRadio
            label="남"
            name="sex" // 고유한 name 속성 설정
            value="MALE"
            selected={registerData.sex === 'MALE'}
            onChange={() => handleSexChange('MALE')}
            onClick={() => {
              handleSexChange('MALE');
              setRegisterData((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
          />
          <DetailRadio
            label="여"
            name="sex" // 고유한 name 속성 설정
            value="FEMALE"
            selected={registerData.sex === 'FEMALE'}
            onChange={() => handleSexChange('FEMALE')}
            onClick={() => {
              handleSexChange('FEMALE');
              setRegisterData((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
          />
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-sm my-3 whitespace-nowrap">
          입양 상태
        </h2>
        <div className="grid grid-cols-2 w-full  gap-10 text-sm whitespace-nowrap">
          <DetailRadio
            label="입양"
            name="adoptionStatus"
            value="YES"
            selected={registerData.adoptionStatus === 'YES'}
            onChange={() => handleAdoptionStatusChange('YES')}
            onClick={() => {
              handleAdoptionStatusChange('YES');
              setRegisterData((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
          />
          <DetailRadio
            label="미입양"
            name="adoptionStatus"
            value="NO"
            selected={registerData.adoptionStatus === 'NO'}
            onChange={() => handleAdoptionStatusChange('NO')}
            onClick={() => {
              handleAdoptionStatusChange('NO');
              setRegisterData((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
          />
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-sm my-3 whitespace-nowrap">
          중성화 상태
        </h2>
        <div className="grid grid-cols-3 w-full gap-16 text-sm whitespace-nowrap">
          <DetailRadio
            label="했어요"
            name="neutralizationStatus"
            value="YES"
            selected={registerData.neutralizationStatus === 'YES'}
            onChange={() => handleNeutralizationStatusChange('YES')}
            onClick={() => {
              handleNeutralizationStatusChange('YES');
              setRegisterData((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
          />
          <DetailRadio
            label="안했어요"
            name="neutralizationStatus"
            value="NO"
            selected={registerData.neutralizationStatus === 'NO'}
            onChange={() => handleNeutralizationStatusChange('NO')}
            onClick={() => {
              handleNeutralizationStatusChange('NO');
              setRegisterData((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
          />
          <DetailRadio
            label="몰라요"
            name="neutralizationStatus"
            value="UNKNOWN"
            selected={registerData.neutralizationStatus === 'UNKNOWN'}
            onChange={() => handleNeutralizationStatusChange('UNKNOWN')}
            onClick={() => {
              handleNeutralizationStatusChange('UNKNOWN');
              setRegisterData((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioGroup;
