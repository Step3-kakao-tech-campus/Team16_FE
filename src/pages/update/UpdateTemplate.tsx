import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'commons/cookie/cookie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import registerState from 'recoil/registerState';
import DayModalInput from 'pages/register/DayModalInput';
import UpdateHeader from './UpdateHeader';
import PatchStatusSelectGroup from './PatchStatusSelectGroup';
import UpdateRegisterForm from './UpdateRegisterForm';

const UpdateTemplate = () => {
  const params = useParams();
  const petId = params.id;
  const cookie = getCookie('loginToken');
  const [updateState, setUpdateState] = useRecoilState(registerState);
  const [error, setError] = useState({
    isError: false,
    errorMessage: '',
  });

  // petInfo return
  const getPetInfo = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_URI}/pet/register-info/${petId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie}`,
        },
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((apiData) => {
        if (apiData.success === false) {
          throw new Error(apiData.message);
        }
        return { ...apiData.response };
      });
    return res;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pet-update'],
    queryFn: () => getPetInfo(),
    onSuccess: (fetchedData) => {
      const { profileImageUrl, profileShortFormUrl, ...rest } = fetchedData;
      setUpdateState({ ...rest, isComplete: true });
    },
    suspense: true,
  });

  // 데이터 들어오는 것 확인 용도
  useEffect(() => {
    if (!isLoading && data) {
      console.log('status: ', updateState);
    }
  }, [updateState]);

  if (isError) {
    return <div className="bg-slate-500 h-screen">{error.errorMessage}</div>;
  }

  return (
    <>
      <UpdateHeader />
      <UpdateRegisterForm petInfo={updateState} />
      <DayModalInput />
      <PatchStatusSelectGroup
        petStatus={updateState.petPolygonProfileDto}
        setUpdateState={setUpdateState}
      />
    </>
  );
};

export default UpdateTemplate;
