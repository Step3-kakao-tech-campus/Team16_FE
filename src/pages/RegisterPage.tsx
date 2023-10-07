import Calendar from 'components/atoms/Calendar';
import MRegisterForm from 'components/organisms/MRegisterForm';
import RegisterHeader from 'components/organisms/RegisterHeader';
import GNB from 'layouts/GNB';

const RegisterPage = () => {
  return (
    <div>
      <GNB />
      <RegisterHeader />
      <MRegisterForm />
      <Calendar />
    </div>
  );
};

export default RegisterPage;
