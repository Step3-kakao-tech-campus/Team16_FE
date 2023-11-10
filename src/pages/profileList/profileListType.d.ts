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
  adoptionStatus: string;
}

export interface SosListProps {
  map(
    arg0: (
      sosItem: any,
      index: number,
    ) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  profileImageUrl: string;
  petId: number;
  petName: string;
  petAge: number;
  shelterName: string;
  protectionExpirationDate: string;
}

export interface NewListProps {
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
  adoptionStatus: string;
}

export interface ProfileListProps {
  sosListProps: SosListProps;
  newListProps: NewListProps;
}

// NewList
export interface PageNationProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  lastPage: number;
  maxLength: number;
}

export interface VNewListProps {
  profileListProps: NewListProps;
  pageNationProps: PageNationProps;
}

// UrgentList
export interface VUrgentListProps {
  profileListProps: SosListProps;
  pageNationProps: PageNationProps;
}
