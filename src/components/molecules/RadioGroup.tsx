import DetailRadio from 'components/atoms/DetailRadio';
import { useRecoilState } from 'recoil';
import registerState from 'recoil/registerState';

const RadioGroup = () => {
  const [registerData, setRegisterData] = useRecoilState(registerState);

  const handleSexChange = (value: string) => {
    setRegisterData({ ...registerData, sex: value });
  };

  const handleAdoptionStatusChange = (value: string) => {
    setRegisterData({ ...registerData, adoptionStatus: value });
  };

  const handleNeutralizationStatusChange = (value: string) => {
    setRegisterData({ ...registerData, neutralizationStatus: value });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:gap-20 justify-center">
      <div>
        <h2 className="font-semibold my-3  whitespace-nowrap">성별</h2>
        <div className="grid grid-cols-2 gap-8 text-sm  sm:whitespace-nowrap">
          <DetailRadio
            label="남"
            name="sex" // 고유한 name 속성 설정
            value="MALE"
            selected={registerData.sex === 'MALE'}
            onChange={() => handleSexChange('MALE')}
          />
          <DetailRadio
            label="여"
            name="sex" // 고유한 name 속성 설정
            value="FEMALE"
            selected={registerData.sex === 'FEMALE'}
            onChange={() => handleSexChange('FEMALE')}
          />
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-sm my-3 whitespace-nowrap">
          입양 상태
        </h2>
        <div className="grid grid-cols-2  gap-5 text-sm sm:whitespace-nowrap">
          <DetailRadio
            label="입양"
            name="adoptionStatus" // 고유한 name 속성 설정
            value="YES"
            selected={registerData.adoptionStatus === 'YES'}
            onChange={() => handleAdoptionStatusChange('YES')}
          />
          <DetailRadio
            label="미입양"
            name="adoptionStatus" // 고유한 name 속성 설정
            value="NO"
            selected={registerData.adoptionStatus === 'NO'}
            onChange={() => handleAdoptionStatusChange('NO')}
          />
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-sm my-3 whitespace-nowrap">
          중성화 상태
        </h2>
        <div className="grid grid-cols-3 gap-8 text-sm sm:whitespace-nowrap">
          <DetailRadio
            label="했어요"
            name="neutralizationStatus" // 고유한 name 속성 설정
            value="YES"
            selected={registerData.neutralizationStatus === 'YES'}
            onChange={() => handleNeutralizationStatusChange('YES')}
          />
          <DetailRadio
            label="안했어요"
            name="neutralizationStatus" // 고유한 name 속성 설정
            value="NO"
            selected={registerData.neutralizationStatus === 'NO'}
            onChange={() => handleNeutralizationStatusChange('NO')}
          />
          <DetailRadio
            label="몰라요"
            name="neutralizationStatus" // 고유한 name 속성 설정
            value="UNKNOWN"
            selected={registerData.neutralizationStatus === 'UNKNOWN'}
            onChange={() => handleNeutralizationStatusChange('UNKNOWN')}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioGroup;
