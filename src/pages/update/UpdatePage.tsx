import { Suspense } from 'react';
import ErrorBoundary from 'layouts/ErrorBoundary';
import { ClipLoader } from 'react-spinners';
import UpdateTemplate from './components/UpdateTemplate';

const UpdatePage = () => {
  return (
    <>
      <ErrorBoundary fallback={<div className="">권한이 없습니다.</div>}>
        <Suspense
          fallback={
            <div className="h-screen w-screen bg-slate-500">
              <ClipLoader />
            </div>
          }
        >
          <UpdateTemplate />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default UpdatePage;
