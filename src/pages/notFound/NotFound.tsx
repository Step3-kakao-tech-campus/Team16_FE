import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col mt-12 gap-12 items-center justify-center w-screen">
      <img
        src="/assets/images/backgroundimage.png"
        alt="backgroundimage"
        className="w-60 h-60 object-cover"
      />
      <h1 className="text-3xl font-bold text-brand-color">
        존재하지 않는 페이지입니다.
      </h1>
      <h2 className="text-2xl font-bold">집으로 돌아가요!</h2>
      <Link
        to="/"
        className="border flex items-center justify-center box-border border-brand-color border-2 bg-brand-color text-white rounded-md w-20 py-1 hover:bg-white hover:text-brand-color transition duration-300 ease-in-out"
      >
        홈으로
      </Link>
    </div>
  );
};

export default NotFound;
