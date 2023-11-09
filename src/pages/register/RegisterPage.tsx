import DayModalInput from 'pages/register/DayModalInput';
import MRegisterForm from 'pages/register/MRegisterForm';
import StatusSelectGroup from './StatusSelectGroup';
import RegisterHeader from './RegisterHeader';

const RegisterPage = () => {
  return (
    <div>
      <RegisterHeader />
      <MRegisterForm />
      <DayModalInput />
      <StatusSelectGroup />
    </div>
  );
};

export default RegisterPage;
