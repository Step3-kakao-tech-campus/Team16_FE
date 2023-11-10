import { ShelterSignupType } from 'recoil/shelterState';

export interface EmailConfirmProps {
  isValid: boolean;
  checked: boolean;
}

export interface LoadingProps {
  submitIsLoading: boolean;
  duplicateCheckIsLoading: boolean;
}

export interface EmailValidationProps {
  validText: string;
  inValidText: string;
  emailConfirmObj: EmailConfirmProps;
}

export interface AddressInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ValidationProps {
  text?: string;
  className: string;
}

export interface VSignupInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleModalClose: () => void;
  duplicateCheck: () => void;
  emailValidText: string;
  emailInValidText: string;
  passwordConfirm: boolean;
  errors: Partial<ShelterSignupType>;
  isLoading: LoadingProps;
  modalOpen: boolean;
  modalText: string;
}

export interface SignupPageProps {
  redirectLoginPage: () => void;
}

export interface SignupGuideModalProps {
  open: boolean;
  text: string;
  onClose: () => void;
}
