import React, { ReactEventHandler } from 'react';

type Props = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autocomplete: string;
};

const Input = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  autocomplete,
}: Props) => {
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
