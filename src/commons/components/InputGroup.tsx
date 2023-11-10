import React from 'react';
import Container from 'commons/components/Container';
import Input from 'commons/components/Input';

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autocomplete?: string;
  dataInputType?: string;
}

const InputGroup = ({
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
    <Container className={'flex flex-col gap-1'}>
      <label htmlFor={id} className="text-sm font-semibold">
        {name}
      </label>
      <Input
        id={id}
        dataInputType={dataInputType}
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
