import ErrorBoundary from 'layouts/ErrorBoundary';
import ProfileListHome from './ProfileListHome';
import { Suspense } from 'react';
import { ClipLoader } from 'react-spinners';

const ProfileListPage = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={<ClipLoader className="absolute top-[50%] left-{50%}" />}
      >
        <ProfileListHome />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProfileListPage;
