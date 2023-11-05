import Map from 'pages/map/Map';
import GNB from 'layouts/GNB';
import ErrorBoundary from 'commons/ErrorBoundary';

const MapPage = () => {
  return (
    <div>
      <GNB />
      <ErrorBoundary>
        <Map />
      </ErrorBoundary>
    </div>
  );
};

export default MapPage;
