import Container from 'components/atoms/Container';
import Postcode from 'components/atoms/PostCode';
import React from 'react';

type AddressProps = {
  zonecode: string;
  sido: string;
  sigungu: string;
  roadname: string;
  detail: string;
};

interface StateProps {
  userAddress: AddressProps;
  setUserAddress: React.Dispatch<React.SetStateAction<AddressProps>>;
}

const AddressInputGroup = ({ userAddress, setUserAddress }: StateProps) => {
  return (
    <Container className="flex flex-col">
      <label htmlFor="zone-code" className="font-semibold">
        보호소 주소
      </label>
      <div className="zone-code-input">
        <input
          id="zone-code"
          name="우편번호"
          type="text"
          placeholder="우편번호"
          value={userAddress.zonecode}
        />
        <Postcode userAddress={userAddress} setUserAddress={setUserAddress} />
      </div>
      <div className="user-address">
        <input
          disabled
          id="sido"
          name="시/도"
          type="text"
          placeholder="시/도"
          value={userAddress.sido}
        />
        <input
          disabled
          id="sigungu"
          name="시/군/구"
          type="text"
          placeholder="시/군/구"
          value={userAddress.sigungu}
        />
        <input
          disabled
          id="roadname"
          name="도로명 주소"
          type="text"
          placeholder="도로명 주소"
          value={userAddress.roadname}
        />
      </div>
      <input
        id="building-name"
        name="상세 주소"
        type="text"
        placeholder="상세 주소(입력)"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const target = e.target as HTMLInputElement;
          setUserAddress({ ...userAddress, detail: target.value });
        }}
      />
    </Container>
  );
};

export default AddressInputGroup;
