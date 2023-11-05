import { useQuery } from '@tanstack/react-query';
import Banner from 'commons/Banner';
import InputGroup from 'commons/InputGroup';
import GNB from 'layouts/GNB';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';
import { useEffect, useState } from 'react';
import { getCookie } from 'commons/cookie/cookie';
import EditAddressInputGroup from './EditAddressInputGroup';

const EditProfilePage = () => {
  const params = useParams();
  const shelterId = params.id;
  const [shelterInfo, setShelterInfo] = useRecoilState(shelterSignupState);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);

  const getProfileInfo = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URI}/shelter/${shelterId}?page=1`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      if (response.status === 500) {
        console.error('서버측 에러');
      } else {
        console.error('내부 에러 : 알 수 없음');
      }
    }

    return response.json();
  };

  const shelterFetch = async () => {
    const token = getCookie('loginToken');
    const response = await fetch(
      `${process.env.REACT_APP_URI}/shelter/${shelterId}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name: shelterInfo.name,
          contact: shelterInfo.contact,
          shelterAddressUpdateDto: shelterInfo.address,
        }),
      },
    );

    if (!response.ok) {
      if (response.status === 500) {
        console.error('서버측 에러');
      } else {
        console.error('내부 에러 : 알 수 없음');
      }
    }
    console.log('shelterFetch');
    console.log('response: ', response);
    setIsButtonLoading(false);

    return response.json();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsButtonLoading(true);
    shelterFetch();
    getProfileInfo();
  };

  // isLoading으로 데이터 가져오기 전까지 보여줄 스켈레톤 만들기
  const { data, isLoading } = useQuery({
    queryKey: ['editProfile', shelterId],
    queryFn: getProfileInfo,
  });

  useEffect(() => {
    setShelterInfo({
      ...shelterInfo,
      name: data?.response.shelter.name,
      contact: data?.response.shelter.contact,
      address: {
        ...data?.response.shelter.address,
      },
    });
    console.log(data);
  }, [data]);

  return (
    <div className="h-full">
      <GNB />
      <div
        className="flex flex-col justify-center items-center gap-10 min-h-[80vh]"
        style={{
          backgroundImage: 'url(assets/images/backgroundImage.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Banner className="font-semibold text-2xl">My 보호소 정보 수정</Banner>

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
          {/*  defaultValue=data.shelter.address */}{' '}
          {/* 내부 구조 바꾸는 작업 필요 => props 받는 방식을 바꾸면 될 듯 */}
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
    </div>
  );
};

export default EditProfilePage;
