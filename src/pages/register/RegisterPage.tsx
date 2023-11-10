import DayModalInput from 'pages/register/components/DayModalInput';
import MRegisterForm from 'pages/register/components/MRegisterForm';
import StatusSelectGroup from './components/StatusSelectGroup';
import RegisterHeader from './components/RegisterHeader';

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
