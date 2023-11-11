import ErrorBoundary from 'layouts/ErrorBoundary';
import { Suspense } from 'react';
import { ClipLoader } from 'react-spinners';
import ProfileList from '../components/ProfileList';

const NewListPage = () => {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center">
          <ClipLoader color="black" loading={true} size={50} />
        </div>
      }
    >
      <ErrorBoundary>
        <ProfileList prop="new" />
      </ErrorBoundary>
    </Suspense>
  );
};

export default NewListPage;
