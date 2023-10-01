import { Link } from 'react-router-dom';

export interface VGNBProps {
  handleCategoryButtonClick: () => void;
}

const VGNB = ({ handleCategoryButtonClick }: VGNBProps) => {
  return (
    <>
      <div className="lg:flex lg:w-4/5 hidden justify-between px-10 text-xl">
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
    </>
  );
};

export default VGNB;
