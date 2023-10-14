import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'commons/cookie/cookie';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import registerState from 'recoil/registerState';
import DayModalInput from 'pages/register/DayModalInput';
import PatchStatusSelectGroup from './PatchStatusSelectGroup';
import UpdateRegisterForm from './UpdateRegisterForm';

const UpdatePage = () => {
  const params = useParams();
  const petId = params.id;
  const cookie = getCookie('loginToken');
  const [updateState, setUpdateState] = useRecoilState(registerState);

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
        return { ...apiData.response };
      });
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['pet-update'],
    queryFn: () => getPetInfo(),
    onSuccess: (fetchedData) => {
      setUpdateState({ ...fetchedData });
    },
  });

  // 데이터 들어오는 것 확인 용도
  useEffect(() => {
    if (!isLoading && data) {
      console.log('status: ', updateState);
    }
  }, [updateState]);

  return !isLoading ? (
    <div>
      <DayModalInput />
      <PatchStatusSelectGroup
        petStatus={updateState.petPolygonProfileDto}
        setUpdateState={setUpdateState}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default UpdatePage;
