export interface PolygonProfile {
  intelligence: number;
  affinity: number;
  athletic: number;
  adaptability: number;
  activeness: number;
}

export interface RadarChartProps {
  setCanvas: React.Dispatch<React.SetStateAction<HTMLCanvasElement | null>>;
  width: number;
  height: number;
  canvas: HTMLCanvasElement | null;
  labels: string[];
  data: PolygonProfile;
  willAnimate: boolean;
}
export interface DetailPetInfoProps {
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

export interface VDetailPetDataProps {
  detailPetInfoProps: DetailPetInfoProps;
  radarChartProps: RadarChartProps;
  modal: boolean;
  handleModalImageClick: () => void;
  handleModalCloseClick: () => void;
  handleModalOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  imageUrl: string;
}
