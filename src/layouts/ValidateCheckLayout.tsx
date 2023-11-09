import { getCookie } from 'commons/cookie/cookie';
import LoginGuideModal from 'commons/modals/LoginGuideModal';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { tokenCheckState } from 'recoil/shelterState';

const ValidateCheckLayout = () => {
  const setIsLogined = useSetRecoilState(tokenCheckState);
  const loginToken = getCookie('loginToken');
  const loginState = getCookie('loginState');
  const location = useLocation();

  // 로그인 정보가 담긴 쿠키가 만료된 상태에서 사용자가 api 호출 관련 기능을 쓰기 전에 미리 알려주기
  useEffect(() => {
    if (!loginToken && loginState === 'Login') {
      setIsLogined(false);
    }
  }, [location]);

  return (
    <>
      <Outlet />
      <LoginGuideModal />
    </>
  );
};

export default ValidateCheckLayout;
