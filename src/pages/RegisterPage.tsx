import Calendar from 'components/atoms/Calendar';
import MRegisterForm from 'components/organisms/MRegisterForm';
import RegisterHeader from 'components/organisms/RegisterHeader';

const RegisterPage = () => {
  return (
    <div>
      <RegisterHeader />
      <MRegisterForm />
      <Calendar />
    </div>
  );
};

export default RegisterPage;
