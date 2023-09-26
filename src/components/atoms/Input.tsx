type Props = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
};

const Input = ({ id, name, type, placeholder }: Props) => {
  return <input id={id} name={name} type={type} placeholder={placeholder} />;
};

export default Input;
