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
