import { Suspense } from 'react';
import GNB from 'layouts/GNB';
import ErrorBoundary from 'commons/ErrorBoundary';
import UpdateTemplate from './UpdateTemplate';

const UpdatePage = () => {
  return (
    <>
      <GNB />
      <ErrorBoundary>
        <Suspense fallback={<div className="h-screen w-screen bg-slate-500" />}>
          <UpdateTemplate />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default UpdatePage;
