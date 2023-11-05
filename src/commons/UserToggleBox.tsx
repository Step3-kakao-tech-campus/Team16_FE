import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie, setCookie } from './cookie/cookie';

const UserToggleBox = () => {
  const token = getCookie('loginToken');
  const [isTabVisible, setTabVisible] = useState(false);
  const navigate = useNavigate();
  const shelterId = getCookie('accountInfo');
  const id = shelterId ? shelterId.id : '';

  const toggleTab = () => {
    setTabVisible(!isTabVisible);
  };

  const removeToken = () => {
    removeCookie('loginToken');
    removeCookie('userAccountInfo');
  };

  const handleOptionClick = (option: string) => {
    switch (option) {
      case 'My 정보 변경':
        navigate(`/shelter/${id}/edit`); // 아직 회원정보 수정 페이지 구현 안됨
        break;
      case 'My 보호소 이동':
        navigate(`/shelter/${id}/1`);
        break;
      case '로그아웃':
        removeToken();
        setCookie('userAccountInfo', 'Not Login');
        window.location.reload();
        break;
      default:
        break;
    }
  };

  if (!token) {
    return (
      <div className="flex gap-4 font-bold">
        <button
          className="border-2 box-content border-brand-color text-brand-color rounded-md py-1 px-4 transition duration-300 hover:bg-brand-color hover:text-white"
          onClick={() => navigate('/login')}
        >
          로그인
        </button>
        <button
          className="border-brand-color border-2 bg-brand-color text-white rounded-md py-1 px-4 transition duration-300 hover:bg-white hover:text-brand-color"
          onClick={() => navigate('/signup')}
        >
          회원가입
        </button>
      </div>
    );
  }

  return (
    <div className="w-full border-b">
      <button onClick={toggleTab} className=" px-4 py-2 rounded">
        <img
          src="/assets/images/shelterIcon.png"
          alt="유저 정보 아이콘"
          className="w-10 h-10"
        />
      </button>

      <div
        className={`w-full m-auto transition-all duration-500 ${
          isTabVisible ? 'h-40' : 'h-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col gap-2">
          <button
            className="px-4 py-2 border-b rounded-md w-[1/3rem]"
            onClick={() => handleOptionClick('My 정보 변경')}
          >
            My 정보 변경
          </button>
          <button
            className="px-4 py-2 border-b rounded w-[1/3rem]"
            onClick={() => handleOptionClick('My 보호소 이동')}
          >
            My 보호소 이동
          </button>
          <button
            className="px-4 py-2 rounded w-[1/3rem]"
            onClick={() => handleOptionClick('로그아웃')}
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserToggleBox;
