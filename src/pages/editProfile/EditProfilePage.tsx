import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';
import { useEffect, useState } from 'react';
import { getCookie } from 'commons/cookie/cookie';
import VEditProfilePage from './VEditProfilePage';

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

    const res = await response.json();
    return res;
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
  }, [data]);

  const EditProfileProps = {
    isLoading,
    isButtonLoading,
    handleSubmit,
    data,
  };

  return <VEditProfilePage {...EditProfileProps} />;
};

export default EditProfilePage;
