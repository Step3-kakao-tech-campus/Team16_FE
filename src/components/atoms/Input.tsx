import { InputGroupProps } from 'components/molecules/InputGroup';

const Input = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  autocomplete,
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
    />
  );
};

export default Input;
