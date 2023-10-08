import DayModalInput from 'pages/register/DayModalInput';
import MRegisterForm from 'components/organisms/MRegisterForm';
import GNB from 'layouts/GNB';
import StatusSelectGroup from './register/StatusSelectGroup';
import RegisterHeader from './register/RegisterHeader';

const RegisterPage = () => {
  return (
    <div>
      <GNB />
      <RegisterHeader />
      <MRegisterForm />
      <DayModalInput />
      <StatusSelectGroup />
    </div>
  );
};

export default RegisterPage;
