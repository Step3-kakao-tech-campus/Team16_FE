import { Suspense } from 'react';
import { ClipLoader } from 'react-spinners';
import ErrorBoundary from 'layouts/ErrorBoundary';
import DetailPetData from './components/DetailPetData';

const DetailPetPage = () => {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center">
          <ClipLoader color="black" loading={true} size={50} />
        </div>
      }
    >
      <ErrorBoundary>
        <DetailPetData />
      </ErrorBoundary>
    </Suspense>
  );
};

export default DetailPetPage;
