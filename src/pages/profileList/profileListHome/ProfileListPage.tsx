import ErrorBoundary from 'layouts/ErrorBoundary';
import { Suspense } from 'react';
import { ClipLoader } from 'react-spinners';
import ProfileListHome from './ProfileListHome';

const ProfileListPage = () => {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center">
          <ClipLoader color="black" loading={true} size={50} />
        </div>
      }
    >
      <ErrorBoundary>
        <ProfileListHome />
      </ErrorBoundary>
    </Suspense>
  );
};

export default ProfileListPage;
