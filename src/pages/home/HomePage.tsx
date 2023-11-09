import { Suspense } from 'react';
import ErrorBoundary from 'commons/ErrorBoundary';
import Home from './Home';

const HomePage = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
