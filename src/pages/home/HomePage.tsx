import { Suspense } from 'react';
import GNB from 'layouts/GNB';
import Home from './Home';

const HomePage = () => {
  return (
    <div>
      <GNB />
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
};

export default HomePage;
