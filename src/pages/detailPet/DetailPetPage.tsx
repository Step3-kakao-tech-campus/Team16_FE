import DetailPetData from 'pages/detailPet/components/DetailPetData';
import ErrorBoundary from 'layouts/ErrorBoundary';

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
