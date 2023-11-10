import Map from 'pages/map/components/Map';
import ErrorBoundary from 'layouts/ErrorBoundary';

const MapPage = () => {
  return (
    <ErrorBoundary>
      <Map />
    </ErrorBoundary>
  );
};

export default MapPage;
