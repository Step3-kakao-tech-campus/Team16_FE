import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';
import { getCookie } from 'commons/cookie/cookie';
import usePostFetch from 'commons/apis/usePostFetch';
import useGetFetch from 'commons/apis/useGetFetch';
import { useEffect } from 'react';
import VEditProfilePage from './VEditProfilePage';

const EditProfilePage = () => {
  const params = useParams();
  const shelterId = params.id;
  const token = getCookie('loginToken');
  const [shelterInfo, setShelterInfo] = useRecoilState(shelterSignupState);

  const { getStatusCode, getLoading, getData } = useGetFetch(
    `${process.env.REACT_APP_URI}/shelter/${shelterId}?page=1`,
  );

  const { postStatusCode, postloading, postData } = usePostFetch(
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

  const mutation = useMutation(getData, {
    onSuccess: (info) => {
      setShelterInfo({
        ...shelterInfo,
        name: info.response.shelter.name,
        contact: info.response.shelter.contact,
        address: {
          ...info.response.shelter.address,
        },
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();
  };

  useEffect(() => {
    mutation.mutate();
  }, []);

  const EditProfileProps = {
    getLoading,
    postloading,
    handleSubmit,
    shelterInfo,
  };

  return <VEditProfilePage {...EditProfileProps} />;
};

export default EditProfilePage;
