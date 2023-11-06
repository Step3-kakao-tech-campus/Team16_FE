import GNB from 'layouts/GNB';
import Home from './Home';

const HomePage = () => {
  return (
    <div>
      <GNB />
      {/* gnb가 감싸게 하기 */}
      <Home />
    </div>
  );
};

export default HomePage;
