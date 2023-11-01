import { getCookie, setCookie } from 'commons/cookie/cookie';
import LoginGuideModal from 'commons/modals/LoginGuideModal';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const ValidateCheckLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // 1분마다 loginToken이라는 이름의 쿠키가 있는지 검사
    const checkTokenInterval = setInterval(() => {
      const loginToken = getCookie('loginToken');
      const userAccount = getCookie('userAccountInfo');
      if (!loginToken && !userAccount) {
        // loginToken이 없으면 모달 열기
        setIsModalOpen(true);
      }
    }, 60000);

    return () => {
      // 컴포넌트가 언마운트될 때 타이머를 정리
      clearInterval(checkTokenInterval);
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <LoginGuideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          }
        />
        ;
        <Route
          path="/pet/:id"
          element={
            <LoginGuideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          }
        />
        ;
        <Route
          path="/profile"
          element={
            <LoginGuideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          }
        />
        ;
        <Route
          path="/shelter/:id/:page"
          element={
            <LoginGuideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          }
        />
        ;
        <Route
          path="/profile/urgent/:page"
          element={
            <LoginGuideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          }
        />
        ;
        <Route
          path="/profile/new/:page"
          element={
            <LoginGuideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          }
        />
        ;
        <Route
          path="/register"
          element={
            <LoginGuideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          }
        />
        ;
        <Route
          path="/find-shelter"
          element={
            <LoginGuideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          }
        />
        ;
        <Route
          path="/pet-update/:id"
          element={
            <LoginGuideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          }
        />
        ;
      </Routes>
      <Routes>{children}</Routes>
    </div>
  );
};

export default ValidateCheckLayout;
