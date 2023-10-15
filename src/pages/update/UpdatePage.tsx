import { Suspense } from 'react';
import GNB from 'layouts/GNB';
import UpdateTemplate from './UpdateTemplate';

const UpdatePage = () => {
  return (
    <>
      <GNB />
      <Suspense fallback={<div className="h-screen w-screen bg-slate-500" />}>
        <UpdateTemplate />
      </Suspense>
    </>
  );
};

export default UpdatePage;
