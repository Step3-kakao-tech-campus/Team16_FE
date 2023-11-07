import DetailPetData from 'pages/detailPet/DetailPetData';
import GNB from 'layouts/GNB';
import ErrorBoundary from 'commons/ErrorBoundary';

const DetailPetPage = () => {
  return (
    <>
      <GNB />
      <ErrorBoundary>
        <DetailPetData />
      </ErrorBoundary>
    </>
  );
};

export default DetailPetPage;
