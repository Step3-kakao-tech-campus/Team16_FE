import ErrorBoundary from 'layouts/ErrorBoundary';
import ProfileListHome from './ProfileListHome';

const ProfileListPage = () => {
  return (
    <ErrorBoundary>
      <ProfileListHome />
    </ErrorBoundary>
  );
};

export default ProfileListPage;
