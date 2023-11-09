import DetailPetData from 'pages/detailPet/DetailPetData';
import ErrorBoundary from 'commons/ErrorBoundary';

const DetailPetPage = () => {
  return (
    <>
      <ErrorBoundary>
        <DetailPetData />
      </ErrorBoundary>
    </>
  );
};

export default DetailPetPage;
