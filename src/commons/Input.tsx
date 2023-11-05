import { InputGroupProps } from 'commons/InputGroup';

const Input = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  autocomplete,
  defaultValue,
}: InputGroupProps) => {
  return (
    <input
      className="border-2 rounded-md border-gray-300 p-2"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete={autocomplete}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
