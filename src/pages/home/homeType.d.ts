export interface HomeVideoProps {
  url: string;
  muted: boolean;
  handleDoubleClick: () => void;
  hovering: boolean;
  setHovering: (hover: boolean) => void;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  index: number;
}

export interface HomeVideoSliderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  muted: boolean;
  setMuted: (muted: boolean) => void;
  setOpacity: (opacity: number) => void;
  fetchNextPage: () => void;
}

export interface ShortFormPage {
  error: string;
  response: {
    hasNext: boolean;
    nextPage: number;
    shortForms: ShortFormVideo[];
  };
  success: boolean;
}

export interface ShortFormVideo extends ShortForm {
  adoptionStatus: string;
  age: string;
  likeCount: string;
  name: string;
  petId: number;
  profileShortFormUrl: string;
  shelterId: number;
  shelterName: string;
}

export interface ShortForm {
  adoptionStatus: string;
  age: string;
  name: string;
  shelterName: string;
}

export interface VideoMuteIconProps {
  muted: boolean;
  opacity: number;
}

export interface VideoOverlayProps {
  opacity: number;
  hovering: boolean;
  loading: boolean;
  playing: boolean;
  index: number;
}

export interface CategoryBarProps {
  handleRemoveFilter: (speciesOrRegion: string) => void;
  species: string;
  region: string;
}
