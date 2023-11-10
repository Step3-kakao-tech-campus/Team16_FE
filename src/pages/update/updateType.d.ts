import { RegisterType } from 'recoil/registerState';

export interface PetStatusType {
  intelligence: number;
  affinity: number;
  athletic: number;
  adaptability: number;
  activeness: number;
}

export interface PetStatusProps {
  petStatus: PetStatusType;
  setUpdateState: SetterOrUpdater<RegisterType>;
}

export interface PetProps {
  petInfo: RegisterType;
}

export interface RegisterProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  petInfo: RegisterType;
}
