import RadarChart, { PolygonProfile } from 'pages/detailPet/RadarChart';
import DetailPetInfo from 'pages/detailPet/DetailPetInfo';
import ModalPortal from 'commons/modals/ModalPortal';
import ImageModal from 'commons/modals/ImageModal';

export interface RadarChartProps {
  setCanvas: React.Dispatch<React.SetStateAction<HTMLCanvasElement | null>>;
  width: number;
  height: number;
  canvas: HTMLCanvasElement | null;
  labels: string[];
  data: PolygonProfile;
  willAnimate: boolean;
}
export interface MockDetailPetInfoProps {
  shelterInfo: {
    id: number;
    name: string;
    contact: string;
  };
  name: string;
  age: string;
  sex: string;
  weight: number;
  description: JSX.Element[];
  protectionExpirationDate: string | null;
  vaccinationStatus: string;
  neutralizationStatus: string;
  adoptionStatus: string;
  profileImageUrl: string;
  size: string;
  polygonProfile: PolygonProfile;
}

interface Props {
  mockDetailPetInfoProps: MockDetailPetInfoProps;
  radarChartProps: RadarChartProps;
  modal: boolean;
  handleModalImageClick: () => void;
  handleModalCloseClick: () => void;
  handleModalOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  imageUrl: string;
}

const VDetailPetData = ({
  mockDetailPetInfoProps,
  radarChartProps,
  modal,
  handleModalImageClick,
  handleModalCloseClick,
  handleModalOutsideClick,
  imageUrl,
}: Props) => {
  return (
    <div className="flex min-w-[375px] items-center flex-col justify-center md:flex-row">
      <img
        className="relative w-96 cursor-pointer lg:mr-20"
        src={mockDetailPetInfoProps.profileImageUrl}
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
      <div className="flex flex-col items-center">
        <DetailPetInfo {...mockDetailPetInfoProps} />
        <RadarChart {...radarChartProps} />
      </div>
    </div>
  );
};

export default VDetailPetData;
