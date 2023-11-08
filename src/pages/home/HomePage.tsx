import { Suspense } from 'react';
import ErrorBoundary from 'commons/ErrorBoundary';
import GNB from 'layouts/GNB';
import Home from './Home';

const HomePage = () => {
  return (
    <div>
      <GNB />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
