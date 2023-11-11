import ErrorBoundary from 'layouts/ErrorBoundary';
import { Suspense } from 'react';
import { ClipLoader } from 'react-spinners';
import ProfileList from '../components/ProfileList';

const NewListPage = () => {
  return (
    <Suspense
      fallback={<ClipLoader className="absolute top-[50%] left-{50%}" />}
    >
      <ErrorBoundary>
        <ProfileList prop="new" />
      </ErrorBoundary>
    </Suspense>
  );
};

export default NewListPage;
