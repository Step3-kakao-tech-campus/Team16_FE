import Map from 'pages/map/Map';
import GNB from 'layouts/GNB';
import ErrorBoundary from 'commons/ErrorBoundary';

const MapPage = () => {
  return (
    <ErrorBoundary>
      <div>
        <GNB />
        <Map />
      </div>
    </ErrorBoundary>
  );
};

export default MapPage;
