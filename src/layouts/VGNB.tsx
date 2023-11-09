import LogoButton from 'commons/LogoButton';
import UserToggleBox from 'commons/UserToggleBox';
import { Link } from 'react-router-dom';

export interface VGNBProps {
  handleCategoryButtonClick: () => void;
  isProfilePage: boolean;
  isFindShelterPage: boolean;
  isRegisterPage: boolean;
  isToggleOpen: boolean;
  handleToggleClick: () => void;
}

const VGNB = (props: VGNBProps) => {
  const {
    handleCategoryButtonClick,
    isProfilePage,
    isFindShelterPage,
    isRegisterPage,
    isToggleOpen,
    handleToggleClick,
  } = props;

  return (
    <>
      {/* 좁은 화면 */}
      <div className="w-full lg:hidden h-10 my-5 justify-center flex">
        <div className="flex w-11/12 justify-between items-center">
          <LogoButton />
          <button className="text-3xl" onClick={handleToggleClick}>
            <img className="w-8" src="/assets/images/menu.png" alt="메뉴" />
          </button>
        </div>
      </div>
      {isToggleOpen && (
        <div className="bg-white text-center z-10 flex w-content justify-center border-b">
          <div className="lg:hidden w-full flex flex-col items-center text-xl gap-4">
            <div className="flex justify-center w-full gap-2">
              <UserToggleBox />
            </div>
            <ol className="flex flex-col justify-center w-full gap-4">
              <li className="border-b pb-4">
                <button onClick={handleCategoryButtonClick}>카테고리</button>
              </li>
              <li
                className={`${
                  isProfilePage ? 'text-brand-color' : ''
                } border-b pb-4`}
              >
                <Link to="/profile">프로필 목록</Link>
              </li>
              <li
                className={`${
                  isFindShelterPage ? 'text-brand-color' : ''
                } border-b pb-4`}
              >
                <Link to="/find-shelter">내 주변 보호소 찾기</Link>
              </li>
              <li
                className={`${
                  isRegisterPage ? 'text-brand-color' : ''
                } border-b pb-4`}
              >
                <Link to="/register">등록하기</Link>
              </li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default VGNB;
