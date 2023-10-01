import Container from 'components/atoms/Container';
import Input from 'components/atoms/Input';

type Props = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputGroup = ({ id, name, type, placeholder, onChange }: Props) => {
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
      />
    </Container>
  );
};

export default InputGroup;
