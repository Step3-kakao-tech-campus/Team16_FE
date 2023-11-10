import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';

const Postcode = () => {
  const [shelterInfo, setShelterInfo] = useRecoilState(shelterSignupState);
  const scriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    // roadname에서 sido + sigungu를 빼야 도로명 주소 전체가 나옴
    const roadname = fullAddress.replace(`${data.sido} ${data.sigungu} `, '');

    setShelterInfo({
      ...shelterInfo,
      zonecode: data.zonecode,
      address: {
        province: data.sido,
        city: data.sigungu,
        roadName: roadname,
        detail: '',
      },
    });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button
      type="button"
      className="bg-brand-color text-white rounded  min-w-[120px] p-1"
      onClick={handleClick}
    >
      우편번호 찾기
    </button>
  );
};

export default Postcode;
