import { Cookies } from 'react-cookie';

const cookies = new Cookies();

type CookieSetOptions = {
  expires?: Date;
  maxAge?: number;
};

export const setCookie = (
  name: string,
  value: string,
  option?: CookieSetOptions,
) => {
  return cookies.set(name, value, { ...option });
};

// 토큰 값 이용
export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};

export const removeToken = () => {
  removeCookie('loginToken');
  removeCookie('accountInfo');
  removeCookie('loginState');
};
