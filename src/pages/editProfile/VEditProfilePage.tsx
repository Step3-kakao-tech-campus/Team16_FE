import GNB from 'layouts/GNB';
import React from 'react';
import Banner from 'commons/Banner';
import InputGroup from 'commons/InputGroup';
import { ClipLoader } from 'react-spinners';
import EditProfilePageSkeleton from './EditProfilePageSkeleton';
import EditAddressInputGroup from './EditAddressInputGroup';

interface VEditProfileProps {
  isLoading: boolean;
  isButtonLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  data: any;
}

const VEditProfilePage = ({
  isLoading,
  isButtonLoading,
  handleSubmit,
  data,
}: VEditProfileProps) => {
  return (
    <div className="h-full">
      <GNB />
      {isLoading ? (
        <EditProfilePageSkeleton />
      ) : (
        <div
          className="flex flex-col justify-center items-center gap-10 min-h-[80vh]"
          style={{
            backgroundImage: 'url(assets/images/backgroundImage.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Banner className="font-semibold text-2xl mb-4">
            My 보호소 정보 수정
          </Banner>

          <form
            className="flex flex-col gap-6 w-full max-w-[400px] px-2"
            onSubmit={handleSubmit}
          >
            <InputGroup
              id="shelter"
              name="보호소 이름"
              type="text"
              placeholder="보호소 이름을 입력해주세요."
              onChange={() => {}}
              autocomplete="off"
              defaultValue={data?.response.shelter.name}
            />
            <InputGroup
              id="shelter-contact"
              name="보호소 연락처"
              type="text"
              placeholder="보호소에 연락 가능한 연락처를 입력해주세요."
              onChange={() => {}}
              autocomplete="off"
              defaultValue={data?.response.shelter.contact}
            />
            <EditAddressInputGroup />
            <button className="bg-brand-color text-white w-full rounded-md p-2">
              {isButtonLoading ? (
                <ClipLoader size={20} color="#fff" loading={isButtonLoading} />
              ) : (
                '정보 수정하기'
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default VEditProfilePage;
