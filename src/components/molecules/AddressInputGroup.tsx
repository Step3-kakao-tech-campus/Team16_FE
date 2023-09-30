import Container from 'components/atoms/Container';
import Postcode from 'components/atoms/PostCode';
import React from 'react';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';

const AddressInputGroup = () => {
  const [shelterInfo, setShelterInfo] = useRecoilState(shelterSignupState);
  return (
    <Container className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="zone-code" className="font-semibold">
          보호소 주소
        </label>
        <div className="zone-code-input flex justify-between border-2 rounded-md border-gray-300 p-2">
          <input
            className="mx-2 w-full"
            id="zone-code"
            name="우편번호"
            type="text"
            placeholder="우편번호"
            value={shelterInfo.zonecode}
          />
          <Postcode />
        </div>
      </div>
      <div className="user-address flex justify-between max-w-full">
        <input
          disabled
          className="border-2 rounded-md border-gray-300 p-2 max-w-[33%]"
          id="sido"
          name="시/도"
          type="text"
          placeholder="시/도"
          value={shelterInfo.address.province}
        />
        <input
          disabled
          className="border-2 rounded-md border-gray-300 p-2 max-w-[33%]"
          id="sigungu"
          name="시/군/구"
          type="text"
          placeholder="시/군/구"
          value={shelterInfo.address.city}
        />
        <input
          disabled
          className="border-2 rounded-md border-gray-300 p-2 max-w-[33%]"
          id="roadname"
          name="도로명 주소"
          type="text"
          placeholder="도로명 주소"
          value={shelterInfo.address.roadName}
        />
      </div>
      <input
        className="border-2 rounded-md border-gray-300 p-1"
        id="building-name"
        name="상세 주소"
        type="text"
        placeholder="상세 주소(입력)"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const target = e.target as HTMLInputElement;
          setShelterInfo({
            ...shelterInfo,
            address: {
              ...shelterInfo.address,
              detail: target.value,
            },
          });
        }}
      />
    </Container>
  );
};

export default AddressInputGroup;
