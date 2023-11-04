import { atom } from 'recoil';

export interface ShelterSignupType {
  email: string;
  password: string;
  name: string;
  contact: string;
  zonecode: string;
  address: {
    province: string;
    city: string;
    roadName: string;
    detail: string;
  };
}

export type ShelterLoginType = {
  email: string;
  password: string;
};

export const shelterSignupState = atom<ShelterSignupType>({
  key: 'shelterSignupState',
  default: {
    email: '',
    password: '',
    name: '',
    contact: '',
    zonecode: '',
    address: {
      province: '',
      city: '',
      roadName: '',
      detail: '',
    },
  },
});

export const shelterLoginState = atom<ShelterLoginType>({
  key: 'shelterLoginState',
  default: {
    email: '',
    password: '',
  },
});

export const tokenCheckState = atom<boolean>({
  key: 'tokenCheckState',
  default: true,
});
