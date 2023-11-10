import RadarChart from 'pages/detailPet/components/RadarChart';
import DetailPetInfo from 'pages/detailPet/components/DetailPetInfo';
import ModalPortal from 'commons/modals/ModalPortal';
import ImageModal from 'commons/modals/ImageModal';
import { VDetailPetDataProps } from '../detailPetType';

const VDetailPetData = ({
  detailPetInfoProps,
  radarChartProps,
  modal,
  handleModalImageClick,
  handleModalCloseClick,
  handleModalOutsideClick,
  imageUrl,
}: VDetailPetDataProps) => {
  return (
    <div className="flex min-w-[375px] items-center flex-col justify-center md:flex-row">
      <img
        className="relative w-96 cursor-pointer lg:mr-20 lg:ml-20 lg:w-1/2"
        src={detailPetInfoProps.profileImageUrl}
        alt="z"
        onClick={handleModalImageClick}
      />
      <ModalPortal>
        {modal && (
          <ImageModal
            imageUrl={imageUrl}
            handleModalCloseClick={handleModalCloseClick}
            handleModalOutsideClick={handleModalOutsideClick}
          />
        )}
      </ModalPortal>
      <div className="flex flex-col w-5/6 items-center">
        <DetailPetInfo {...detailPetInfoProps} />
        <RadarChart {...radarChartProps} />
      </div>
    </div>
  );
};

export default VDetailPetData;
