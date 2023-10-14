import Container from 'commons/Container';
import { RegisterType } from 'recoil/registerState';
// eslint-disable-next-line import/no-cycle
import Input from './UpdateInput';

export interface InputGroupProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
}

const InputGroup = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  value,
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
        value={value}
      />
    </Container>
  );
};

export default InputGroup;
