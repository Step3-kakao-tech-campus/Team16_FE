import { Suspense } from 'react';
import ErrorBoundary from 'layouts/ErrorBoundary';
import ShelterInfo from './components/ShelterInfo';
import ShelterInfoSkeleton from './components/ShelterInfoSkeleton';

const ShelterInfoPage = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<ShelterInfoSkeleton />}>
        <ShelterInfo />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ShelterInfoPage;
