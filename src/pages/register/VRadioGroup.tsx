import registerState, { RegisterType } from 'recoil/registerState';
import { useRecoilState } from 'recoil';
import DetailRadio from './DetailRadio';

export function checkIfAllFilled(data: RegisterType) {
  const allFieldsFilled = Object.values(data).every((value) => !!value);
  return allFieldsFilled;
}

type RadioGroupProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSexChange: (arg0: string) => void;
  handleAdoptionStatusChange: (arg0: string) => void;
  handleNeutralizationStatusChange: (arg0: string) => void;
};

const VRadioGroup = ({
  handleChange,
  handleSexChange,
  handleAdoptionStatusChange,
  handleNeutralizationStatusChange,
}: RadioGroupProps) => {
  const [petInfo, setPetInfo] = useRecoilState(registerState);

  return (
    <div className="flex flex-col sm:flex-row sm:gap-20 justify-center">
      <div>
        <h2 className="font-semibold my-3  whitespace-nowrap">성별🔸</h2>
        <div className="grid grid-cols-2 gap-8 text-sm  whitespace-nowrap">
          <DetailRadio
            label="남"
            name="sex" // 고유한 name 속성 설정
            value="MALE"
            selected={petInfo.sex === 'MALE'}
            onClick={() => {
              handleSexChange('MALE');
              console.log(petInfo.sex);
              setPetInfo((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
            onChange={(e) => handleChange(e)}
          />
          <DetailRadio
            label="여"
            name="sex" // 고유한 name 속성 설정
            value="FEMALE"
            selected={petInfo.sex === 'FEMALE'}
            onClick={() => {
              handleSexChange('FEMALE');
              console.log(petInfo.sex);
              setPetInfo((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-sm my-3 whitespace-nowrap">
          입양 상태🔸
        </h2>
        <div className="grid grid-cols-2 w-full  gap-10 text-sm whitespace-nowrap">
          <DetailRadio
            label="입양"
            name="adoptionStatus"
            value="YES"
            selected={petInfo.adoptionStatus === 'YES'}
            onClick={() => {
              handleAdoptionStatusChange('YES');
              setPetInfo((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
            onChange={(e) => handleChange(e)}
          />
          <DetailRadio
            label="미입양"
            name="adoptionStatus"
            value="NO"
            selected={petInfo.adoptionStatus === 'NO'}
            onClick={() => {
              handleAdoptionStatusChange('NO');
              setPetInfo((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-sm my-3 whitespace-nowrap">
          중성화 상태🔸
        </h2>
        <div className="grid grid-cols-3 w-full gap-16 text-sm whitespace-nowrap">
          <DetailRadio
            label="했어요"
            name="neutralizationStatus"
            value="YES"
            selected={petInfo.neutralizationStatus === 'YES'}
            onClick={() => {
              handleNeutralizationStatusChange('YES');
              setPetInfo((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
            onChange={(e) => handleChange(e)}
          />
          <DetailRadio
            label="안했어요"
            name="neutralizationStatus"
            value="NO"
            selected={petInfo.neutralizationStatus === 'NO'}
            onClick={() => {
              handleNeutralizationStatusChange('NO');
              setPetInfo((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
            onChange={(e) => handleChange(e)}
          />
          <DetailRadio
            label="몰라요"
            name="neutralizationStatus"
            value="UNKNOWN"
            selected={petInfo.neutralizationStatus === 'UNKNOWN'}
            onClick={() => {
              handleNeutralizationStatusChange('UNKNOWN');
              setPetInfo((prev) => ({
                ...prev,
                isComplete: checkIfAllFilled(prev),
              }));
            }}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default VRadioGroup;
