import { useNavigate } from 'react-router-dom';
import VLoginPage from './VLoginPage';

const LoginPage = () => {
  const navigate = useNavigate();
  const redirectSignupPage = () => {
    navigate('/signup');
  };

  const LoginProps = {
    redirectSignupPage,
  };

  return <VLoginPage {...LoginProps} />;
};

export default LoginPage;
