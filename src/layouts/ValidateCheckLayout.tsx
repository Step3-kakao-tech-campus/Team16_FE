import { getCookie } from 'commons/cookie/cookie';
import LoginGuideModal from 'commons/modals/LoginGuideModal';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { tokenCheckState } from 'recoil/shelterState';

const ValidateCheckLayout = () => {
  const setIsLogined = useSetRecoilState(tokenCheckState);
  const loginToken = getCookie('loginToken');
  const userAccount = getCookie('userAccountInfo');

  // userAccount에 대한 정책 수정이 필요
  // Layout 먹이는 방식 수정
  useEffect(() => {
    if (!loginToken && userAccount === 'Login') {
      // loginToken이 없으면 모달 열기
      setIsLogined(false);
    }
    console.log('token 로직 동작');
  }, [loginToken, userAccount]);

  return (
    <>
      <Outlet />
      <LoginGuideModal />
    </>
  );
};

export default ValidateCheckLayout;
