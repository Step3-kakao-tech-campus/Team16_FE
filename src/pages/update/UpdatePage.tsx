import { Suspense } from 'react';
import ErrorBoundary from 'commons/ErrorBoundary';
import UpdateTemplate from './UpdateTemplate';

const UpdatePage = () => {
  return (
    <>
      <ErrorBoundary fallback={<div className="">권한이 없습니다.</div>}>
        <Suspense fallback={<div className="h-screen w-screen bg-slate-500" />}>
          <UpdateTemplate />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default UpdatePage;
