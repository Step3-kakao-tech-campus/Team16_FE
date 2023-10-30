import { validateExpiredToken } from 'commons/cookie/getUser';
import React, { useEffect } from 'react';
import { Routes } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const ValidateCheckLayout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    validateExpiredToken();
    const intervalId = setInterval(validateExpiredToken, 60000 * 30); // 30분에 한 번

    return () => clearInterval(intervalId);
  }, []);

  return <Routes>{children}</Routes>;
};

export default ValidateCheckLayout;
