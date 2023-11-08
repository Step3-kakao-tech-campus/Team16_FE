import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getCookie, removeToken, setCookie } from './cookie/cookie';

// 로그인 되었을 때 상태를 보여주는 SelectBox 제작
const UserDropdownBox = () => {
  const token = getCookie('loginToken');
  const options = ['My 정보 변경', 'My 보호소 이동', '로그아웃'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 메뉴 열림/닫힘 상태
  const navigate = useNavigate();
  const shelterId = getCookie('accountInfo');
  const id = shelterId ? shelterId.id : '';

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
    setIsDropdownOpen(false);
  };

  if (!token) {
    return (
      <div className="flex gap-4 font-bold z-50">
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
    <div className="relative inline-block text-left z-50">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full rounded-full border-2 border-gray-300 hover:border-gray-400 shadow-sm p-2 focus:outline-none"
          id="options-menu"
          aria-haspopup="listbox"
          aria-expanded="true"
        >
          <img
            src="/assets/images/shelterIcon.png"
            alt="유저 정보 아이콘"
            className="w-8 h-8"
          />
        </button>
      </div>

      {isDropdownOpen && (
        <div className="origin-top-right absolute border-2 border-gray-300 hover:border-gray-400 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="block px-4 py-3 text-sm font-bold text-gray-500 hover:bg-gray-100 hover:text-black cursor-pointer"
                onClick={() => handleOptionClick(option)}
                role="menuitem"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdownBox;
