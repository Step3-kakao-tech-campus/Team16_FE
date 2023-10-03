import { Link } from 'react-router-dom';

const LogoButton = () => {
  return (
    <Link to="/">
      <div className="flex gap-2">
        <img className="w-8" src="/assets/images/paw.png" alt="애니모리 로고" />
        <h1 className="text-brand-color font-bold text-2xl">애니모리</h1>
      </div>
    </Link>
  );
};

export default LogoButton;
