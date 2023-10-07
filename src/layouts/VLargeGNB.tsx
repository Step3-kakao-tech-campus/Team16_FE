import { Link } from 'react-router-dom';
import LogoButton from 'components/atoms/LogoButton';

export interface VLargeGNBProps {
  handleCategoryButtonClick: () => void;
  isProfilePage: boolean;
  isFindShelterPage: boolean;
  isRegisterPage: boolean;
}

const VLargeGNB = (props: VLargeGNBProps) => {
  const {
    handleCategoryButtonClick,
    isProfilePage,
    isFindShelterPage,
    isRegisterPage,
  } = props;

  return (
    <div className="flex w-full h-10 my-5 justify-center">
      <div className="lg:flex w-11/12 hidden items-center justify-between text-xl gap-10">
        <LogoButton />

        <ol className="flex gap-4 h-8">
          <li>
            <button
              onClick={handleCategoryButtonClick}
              className="hover:text-brand-color hover:border-b-2 hover:border-brand-color"
            >
              카테고리
            </button>
          </li>
          <li
            className={`${
              isProfilePage
                ? 'text-brand-color'
                : 'hover:text-brand-color hover:border-b-2 hover:border-brand-color'
            }`}
          >
            <Link to="/profile">프로필 목록</Link>
          </li>
          <li
            className={`${
              isFindShelterPage
                ? 'text-brand-color'
                : 'hover:text-brand-color hover:border-b-2 hover:border-brand-color'
            }`}
          >
            <Link to="/find-shelter">내 주변 보호소 찾기</Link>
          </li>
          <li
            className={`${
              isRegisterPage
                ? 'text-brand-color'
                : 'hover:text-brand-color hover:border-b-2 hover:border-brand-color'
            }`}
          >
            <Link to="/register">등록하기</Link>
          </li>
        </ol>

        <div className="flex gap-4 font-bold">
          <Link to="/login">
            <button className="border border-2 box-content border-brand-color text-brand-color rounded-md py-1 px-4 transition duration-300 hover:bg-brand-color hover:text-white">
              로그인
            </button>
          </Link>
          <Link to="/signup">
            <button className="border border-brand-color border-2 bg-brand-color text-white rounded-md py-1 px-4 transition duration-300 hover:bg-white hover:text-brand-color">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VLargeGNB;
