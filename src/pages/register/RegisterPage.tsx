import Radio from 'commons/Radio';
import DayModalInput from 'components/molecules/DayModalInput';
import MRegisterForm from 'components/organisms/MRegisterForm';
import RegisterHeader from 'pages/register/RegisterHeader';
import GNB from 'layouts/GNB';

const RegisterPage = () => {
  return (
    <div>
      <GNB />
      <RegisterHeader />
      <MRegisterForm />
      <DayModalInput />
      <Radio />
    </div>
  );
};

export default RegisterPage;
