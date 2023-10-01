import { Link } from 'react-router-dom';

export interface VGNBProps {
  handleCategoryButtonClick: () => void;
  isProfilePage: boolean;
  isFindShelterPage: boolean;
  isRegisterPage: boolean;
}

const VGNB = (props: VGNBProps) => {
  const {
    handleCategoryButtonClick,
    isProfilePage,
    isFindShelterPage,
    isRegisterPage,
  } = props;

  return (
    <div className="flex justify-center my-5">
      <div className="lg:hidden lg:w-4/5 flex justify-between px-10 text-xl">
        <Link to="/">
          <img src="" alt="" />
          <h1 className="text-brand-color font-bold text-2xl">애니모리</h1>
        </Link>

        <ol className="flex gap-8">
          <li>
            <button onClick={handleCategoryButtonClick}>카테고리</button>
          </li>
          <li>
            <Link to="/anything">프로필 목록</Link>
          </li>
          <li>
            <Link to="/anything">내 주변 보호소 찾기</Link>
          </li>
          <li>
            <Link to="/anything">등록하기</Link>
          </li>
        </ol>

        <div>
          <Link to="/login">
            <button className="border rounded-md">로그인</button>
          </Link>
          <Link to="/signup">
            <button className="border rounded-md">회원가입</button>
          </Link>
        </div>
      </div>
      <div className="lg:flex lg:w-7/8 hidden items-center justify-between px-10 text-xl gap-8">
        <Link to="/">
          <img src="" alt="" />
          <h1 className="text-brand-color font-bold text-2xl">애니모리</h1>
        </Link>

        <ol className="flex gap-4">
          <li>
            <button onClick={handleCategoryButtonClick}>카테고리</button>
          </li>
          <li className={`${isProfilePage ? 'text-brand-color' : ''}`}>
            <Link to="/anything">프로필 목록</Link>
          </li>
          <li className={`${isFindShelterPage ? 'text-brand-color' : ''}`}>
            <Link to="/anything">내 주변 보호소 찾기</Link>
          </li>
          <li className={`${isRegisterPage ? 'text-brand-color' : ''}`}>
            <Link to="/anything">등록하기</Link>
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
  );
};

export default VGNB;
