import registerState, { RegisterType } from 'recoil/registerState';
import { useRecoilState } from 'recoil';
import DetailRadio from './DetailRadio';
import { RadioGroupProps } from '../registerType';

export function checkIfAllFilled(data: RegisterType) {
  const allFieldsFilled = Object.values(data).every((value) => !!value);
  return allFieldsFilled;
}

const VRadioGroup = ({
  handleChange,
  handleSexChange,
  handleAdoptionStatusChange,
  handleNeutralizationStatusChange,
}: RadioGroupProps) => {
  const [petInfo, setPetInfo] = useRecoilState(registerState);

  return (
    <div className="flex flex-col md:flex-row md:gap-20 justify-center">
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
        <div className="grid grid-cols-2 w-full gap-10 text-sm whitespace-nowrap">
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
        <div className="grid grid-cols-3 w-full gap-14 justify-between text-sm whitespace-nowrap">
          <DetailRadio
            label="했어요"
            name="neutralizationStatus"
            value="했어요"
            selected={petInfo.neutralizationStatus === '했어요'}
            onClick={() => {
              handleNeutralizationStatusChange('했어요');
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
            value="안했어요"
            selected={petInfo.neutralizationStatus === '안했어요'}
            onClick={() => {
              handleNeutralizationStatusChange('안했어요');
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
            value="몰라요"
            selected={petInfo.neutralizationStatus === '몰라요'}
            onClick={() => {
              handleNeutralizationStatusChange('몰라요');
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
