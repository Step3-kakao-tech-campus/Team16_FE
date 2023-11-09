import { getCookie } from 'commons/cookie/cookie';
import LoginGuideModal from 'commons/modals/LoginGuideModal';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { tokenCheckState } from 'recoil/shelterState';

interface LayoutProps {
  children: React.ReactNode;
}

const ValidateCheckLayout: React.FC<LayoutProps> = ({ children }) => {
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
    <div>
      <Routes>
        <Route path="/" element={<LoginGuideModal />} />;
        <Route path="/pet/:id" element={<LoginGuideModal />} />;
        <Route path="/profile" element={<LoginGuideModal />} />;
        <Route path="/shelter/:id/:page" element={<LoginGuideModal />} />;
        <Route path="/profile/urgent/:page" element={<LoginGuideModal />} />;
        <Route path="/profile/new/:page" element={<LoginGuideModal />} />;
        <Route path="/register" element={<LoginGuideModal />} />;
        <Route path="/find-shelter" element={<LoginGuideModal />} />;
        <Route path="/pet-update/:id" element={<LoginGuideModal />} />;
      </Routes>
      {/* <LoginGuideModal /> */}
      <Routes>{children}</Routes>
    </div>
  );
};

export default ValidateCheckLayout;
