import GNB from 'layouts/GNB';
import Home from './Home';
import HomeSwiper from './HomeSwiper';
import HomeIO from './HomeIO';

const HomePage = () => {
  return (
    <div>
      <GNB />
      {/* <HomeSwiper /> */}
      <HomeIO />
    </div>
  );
};

export default HomePage;
