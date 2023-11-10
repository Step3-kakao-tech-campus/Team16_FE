import ErrorBoundary from 'layouts/ErrorBoundary';
import ProfileList from '../components/ProfileList';

const NewListPage = () => {
  return (
    <ErrorBoundary>
      <ProfileList prop="new" />
    </ErrorBoundary>
  );
};

export default NewListPage;
