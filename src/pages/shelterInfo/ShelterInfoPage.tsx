import ErrorBoundary from 'layouts/ErrorBoundary';
import ShelterInfo from './components/ShelterInfo';

const ShelterInfoPage = () => {
  return (
    <ErrorBoundary>
      <ShelterInfo />
    </ErrorBoundary>
  );
};

export default ShelterInfoPage;
