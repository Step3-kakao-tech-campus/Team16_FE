import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';
import { getCookie } from 'commons/cookie/cookie';
import usePostFetch from 'commons/apis/usePostFetch';
import useGetFetch from 'commons/apis/useGetFetch';
import { useEffect, useState } from 'react';
import VEditProfilePage from './VEditProfileTemplate';

const EditProfileTemplate = () => {
  const params = useParams();
  const shelterId = params.id;
  const token = getCookie('loginToken');
  const [shelterInfo, setShelterInfo] = useRecoilState(shelterSignupState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');

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
    onError: () => {
      if (getStatusCode === 404) {
        setModalText('해당 보호소는 없는 보호소입니다.');
        setModalOpen(true);
      }
      if (getStatusCode === 500) {
        setModalText('서버에 오류가 발생했습니다.');
        setModalOpen(true);
      }
    },
  });

  const getInputValue = (target: HTMLInputElement) => {
    const inputKey = target.dataset.inputType as string;
    setShelterInfo((prev) => ({ ...prev, [inputKey]: target.value }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    getInputValue(target);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePutStatusCode = (status: number) => {
    if (status === 403) {
      setModalText('타 보호소 정보 수정에 대한 접근 권한이 없습니다.');
      setModalOpen(true);
    }
    if (status === 404) {
      setModalText('존재하지 않는 보호소 계정입니다.');
      setModalOpen(true);
    }
    if (status === 500) {
      setModalText('서버에 오류가 발생했습니다.');
      setModalOpen(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();
    handlePutStatusCode(postStatusCode);
  };

  useEffect(() => {
    mutation.mutate();
  }, []);

  const EditProfileProps = {
    getLoading,
    postloading,
    modalOpen,
    modalText,
    handleSubmit,
    handleChange,
    handleModalClose,
  };

  return <VEditProfilePage {...EditProfileProps} />;
};

export default EditProfileTemplate;
