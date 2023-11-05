import React from 'react';
import Container from 'commons/Container';
import Input from 'commons/Input';

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autocomplete: string;
}

const InputGroup = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  autocomplete,
  defaultValue,
}: InputGroupProps) => {
  return (
    <Container className={'flex flex-col gap-1'}>
      <label htmlFor={id} className="text-sm font-semibold">
        {name}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        autocomplete={autocomplete}
        defaultValue={defaultValue}
      />
    </Container>
  );
};

export default InputGroup;
