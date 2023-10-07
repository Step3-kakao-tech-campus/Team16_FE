import Radio from 'components/atoms/Radio';
import DayModalInput from 'components/molecules/DayModalInput';
import MRegisterForm from 'components/organisms/MRegisterForm';
import RegisterHeader from 'components/organisms/RegisterHeader';

const RegisterPage = () => {
  return (
    <div>
      <RegisterHeader />
      <MRegisterForm />
      <DayModalInput />
      <Radio />
    </div>
  );
};

export default RegisterPage;
