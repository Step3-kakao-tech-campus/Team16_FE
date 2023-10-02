import { Link } from 'react-router-dom';

const LogoButton = () => {
  return (
    <Link to="/">
      <div className="flex gap-2">
        <span className="text-2xl">🐾</span>
        <h1 className="text-brand-color font-bold text-2xl">애니모리</h1>
      </div>
    </Link>
  );
};

export default LogoButton;
