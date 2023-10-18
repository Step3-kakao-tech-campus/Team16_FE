// eslint-disable-next-line import/no-cycle
import { InputGroupProps } from './UpdateInputGroup';

const Input = ({ id, name, type, placeholder, onChange }: InputGroupProps) => {
  return (
    <input
      className="border-2 rounded-md border-gray-300 p-2"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
