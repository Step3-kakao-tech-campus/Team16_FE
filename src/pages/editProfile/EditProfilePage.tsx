import { Suspense } from 'react';
import ErrorBoundary from 'layouts/ErrorBoundary';
import { ClipLoader } from 'react-spinners';
import EditProfileTemplate from './components/EditProfileTemplate';

const EditProfilePage = () => {
  return (
    <ErrorBoundary fallback={'Error...'}>
      <Suspense
        fallback={<ClipLoader className="absolute top-[50%] left-{50%}" />}
      >
        <EditProfileTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default EditProfilePage;
