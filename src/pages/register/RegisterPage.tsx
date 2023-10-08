import DayModalInput from 'pages/register/DayModalInput';
import MRegisterForm from 'pages/register/MRegisterForm';
import GNB from 'layouts/GNB';
import StatusSelectGroup from './StatusSelectGroup';
import RegisterHeader from './RegisterHeader';

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
