import NewList from 'pages/profileList/newList/NewList';
import GNB from 'layouts/GNB';
import ErrorBoundary from 'commons/ErrorBoundary';

const NewListPage = () => {
  return (
    <div>
      <GNB />
      <ErrorBoundary>
        <NewList />
      </ErrorBoundary>
    </div>
  );
};

export default NewListPage;
