import ErrorBoundary from 'layouts/ErrorBoundary';
import { ClipLoader } from 'react-spinners';
import { Suspense } from 'react';
import ProfileList from '../components/ProfileList';

const UrgentListPage = () => {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center">
          <ClipLoader color="black" loading={true} size={50} />
        </div>
      }
    >
      <ErrorBoundary>
        <ProfileList prop="urgent" />
      </ErrorBoundary>
    </Suspense>
  );
};

export default UrgentListPage;
