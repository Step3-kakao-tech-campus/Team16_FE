import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const Postcode = () => {
  const scriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: any) => {
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
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''; // (성수동1가)
    }

    console.log('Data', data); // 여기서 data 형식 확인하기
    console.log(data.sido); // 서울
    console.log(data.sigungu); // 성동구
    console.log(data.roadname); // 왕십리로2길 20
    console.log(data.zonecode); // 우편번호
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return <button onClick={handleClick}>우편번호 찾기</button>;
};

export default Postcode;
