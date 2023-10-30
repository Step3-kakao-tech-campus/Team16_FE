import { getCookie, removeCookie } from './cookie';

export const getLoginState = () => {
  const token = getCookie('loginToken');
  if (token) {
    return '로그아웃';
  }
  return '로그인';
};

export const validateExpiredToken = () => {
  const now = new Date();
  const expiredDate = new Date(getCookie('expiredDate'));
  console.log('만료 검사');

  // 토큰만료 검사 후 삭제
  if (now > expiredDate) {
    removeCookie('loginToken');
    removeCookie('expiredDate');
    removeCookie('userAccountInfo');
    console.log('토큰이 만료되어 삭제되었습니다.');
  }
};

export const removeToken = () => {
  removeCookie('loginToken');
};
