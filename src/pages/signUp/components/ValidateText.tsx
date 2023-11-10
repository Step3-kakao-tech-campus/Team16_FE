import { ValidationProps } from '../signupType';

const ValidateText = ({ text, className }: ValidationProps) => {
  return text ? <div className={className}>{text}</div> : null;
};

export default ValidateText;
