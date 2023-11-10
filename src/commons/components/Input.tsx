import { InputGroupProps } from 'commons/components/InputGroup';

const Input = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  autocomplete,
  defaultValue,
  dataInputType,
}: InputGroupProps) => {
  return (
    <input
      className="border-2 rounded-md border-gray-300 p-2"
      id={id}
      data-input-type={dataInputType}
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
