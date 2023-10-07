import Container from 'components/atoms/Container';
import Input from 'components/atoms/Input';

export interface InputGroupProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autocomplete: string;
}

const InputGroup = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  autocomplete,
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
      />
    </Container>
  );
};

export default InputGroup;
