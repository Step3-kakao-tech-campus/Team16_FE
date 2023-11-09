import { ShelterLoginType } from 'recoil/shelterState';

export interface LoginInputFormProps {
  errors: Partial<ShelterLoginType>;
  isLoading: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ValidationTextProps {
  text?: string;
}

export interface VLoginPageProps {
  redirectSignupPage: () => void;
}
