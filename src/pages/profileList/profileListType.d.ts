import { HTMLProps } from 'react';

export interface PageButtonProps extends HTMLProps<HTMLAnchorElement> {
  active?: boolean;
}

export interface VProfileInfoProps {
  profileImageUrl: string;
  petId: number;
  petName: string;
  petAge: number | null;
  shelterName: string;
  adoptionStatus?: string;
  protectionExpirationDate?: string;
}

export interface ListProps {
  map(
    arg0: (
      newItem: any,
      index: number,
    ) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  profileImageUrl: string;
  petId: number;
  petName: string;
  petAge: number;
  shelterName: string;
  status: string;
}

export interface Profiles {
  sosProps: ListProps;
  newProps: ListProps;
}

export interface ProfileListProps {
  listProps: ListProps;
  pageProps: PageNationProps;
}

// NewList
export interface PageNationProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  lastPage: number;
  maxLength: number;
}
