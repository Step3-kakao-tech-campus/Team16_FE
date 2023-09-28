interface VProfileInfoProps {
  id?: number;
  name?: string;
  age?: number;
  shelter?: string;
  state?: string;
}

const VProfileCard = ({ id, name, age, shelter, state }: VProfileInfoProps) => {
  return (
    <div>
      {id}
      {name}
      {age}
      {shelter}
      {state}
    </div>
  );
};

export default VProfileCard;
