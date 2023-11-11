import ErrorBoundary from 'layouts/ErrorBoundary';
import { ClipLoader } from 'react-spinners';
import { Suspense } from 'react';
import ProfileList from '../components/ProfileList';

const UrgentListPage = () => {
  return (
    <Suspense
      fallback={<ClipLoader className="absolute top-[50%] left-{50%}" />}
    >
      <ErrorBoundary>
        <ProfileList prop="urgent" />
      </ErrorBoundary>
    </Suspense>
  );
};

export default UrgentListPage;
