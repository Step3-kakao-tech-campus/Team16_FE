import { Suspense } from 'react';
import ErrorBoundary from 'layouts/ErrorBoundary';
import Home from './Home';
import Skeleton from './Skeleton';

const HomePage = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense
          fallback={
            <Skeleton text="친구들을 데려오는 중입니다🐶" loader={true} />
          }
        >
          <Home />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
