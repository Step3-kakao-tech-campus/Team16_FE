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
      <div className="w-full justify-center flex">
        <div className="flex w-11/12 my-5 lg:hidden justify-between">
          <Link to="/">
            <img src="" alt="" />
            <h1 className="text-brand-color font-bold text-2xl">애니모리</h1>
          </Link>
          <button className="text-3xl" onClick={handleToggleClick}>
            =
          </button>
        </div>
      </div>
      {isToggleOpen && (
        <div className="bg-white text-center z-10 flex w-content justify-center border-b">
          <div className="lg:hidden w-full flex flex-col items-center text-xl gap-8">
            <div className="flex justify-center w-full gap-2">
              <Link to="/login">
                <button className="border border-2 box-border border-brand-color text-brand-color rounded-md w-28 py-1">
                  로그인
                </button>
              </Link>
              <Link to="/signup">
                <button className="border box-border border-brand-color border-2 bg-brand-color text-white rounded-md w-28 py-1">
                  회원가입
                </button>
              </Link>
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
      {/* 넓은 화면 */}
      <div className="flex w-full my-5 justify-center">
        <div className="lg:flex w-11/12 hidden items-center justify-between text-xl gap-10">
          <Link to="/">
            <img src="" alt="" />
            <h1 className="text-brand-color font-bold text-2xl">애니모리</h1>
          </Link>

          <ol className="flex gap-4">
            <li>
              <button onClick={handleCategoryButtonClick}>카테고리</button>
            </li>
            <li className={`${isProfilePage ? 'text-brand-color' : ''}`}>
              <Link to="/profile">프로필 목록</Link>
            </li>
            <li className={`${isFindShelterPage ? 'text-brand-color' : ''}`}>
              <Link to="/find-shelter">내 주변 보호소 찾기</Link>
            </li>
            <li className={`${isRegisterPage ? 'text-brand-color' : ''}`}>
              <Link to="/register">등록하기</Link>
            </li>
          </ol>

          <div className="flex gap-4 font-bold">
            <Link to="/login">
              <button className="border border-2 box-content border-brand-color text-brand-color rounded-md py-1 px-4">
                로그인
              </button>
            </Link>
            <Link to="/signup">
              <button className="border border-brand-color border-2 bg-brand-color text-white rounded-md py-1 px-4">
                회원가입
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VGNB;
