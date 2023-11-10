import ErrorBoundary from 'layouts/ErrorBoundary';
import ProfileList from '../components/ProfileList';

const UrgentListPage = () => {
  return (
    <ErrorBoundary>
      <ProfileList prop="urgent" />
    </ErrorBoundary>
  );
};

export default UrgentListPage;
