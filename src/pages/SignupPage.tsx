import { useNavigate } from 'react-router-dom';
import VSignupPage from './VSignupPage';

const SignupPage = () => {
  const navigate = useNavigate();
  const redirectLoginPage = () => {
    navigate('/login');
  };
  const SignupProps = {
    redirectLoginPage,
  };
  return <VSignupPage {...SignupProps} />;
};

export default SignupPage;
