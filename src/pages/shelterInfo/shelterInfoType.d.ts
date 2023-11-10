export interface VShelterInfoProps {
  name?: string;
  id?: number;
  adress?: string;
  call?: string;
}

export interface ShelterInfoProps {
  name: string;
  id: number;
  adress: string;
  call: string;
}

export interface PageNationProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  lastPage: number;
  maxLength: number;
}

export interface ProfileProps {
  map(
    arg0: (item: any, index: number) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  profileImageUrl: string;
  id: number;
  name: string;
  adoptionStatus: string;
  age: number;
}

export interface ShelterInfoPageProps {
  profileProps: ProfileProps;
  shelterInfoProps: ShelterInfoProps;
  pageNationProps: PageNationProps;
}
