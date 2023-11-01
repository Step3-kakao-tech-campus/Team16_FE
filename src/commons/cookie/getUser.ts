import { getCookie, removeCookie } from './cookie';

export const getLoginState = () => {
  const token = getCookie('loginToken');
  if (token) {
    return '로그아웃';
  }
  return '로그인';
};

export const removeToken = () => {
  removeCookie('loginToken');
};
