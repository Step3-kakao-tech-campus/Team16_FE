import { Link } from 'react-router-dom';

type LogoButtonProps = {
  imageClassName?: string;
  logoClassName?: string;
};

const LogoButton = ({ imageClassName, logoClassName }: LogoButtonProps) => {
  return (
    <Link to="/">
      <div className="flex gap-2 items-center">
        <img
          className={`w-8 ${imageClassName}`}
          src="/assets/images/paw.png"
          alt="애니모리 로고"
        />
        <h1 className={`text-brand-color font-bold text-2xl ${logoClassName}`}>
          애니모리
        </h1>
      </div>
    </Link>
  );
};

export default LogoButton;
