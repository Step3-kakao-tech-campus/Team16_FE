interface VProfileInfoProps {
  image?: string;
  id?: number;
  name?: string;
  age?: number;
  shelter?: string;
  state?: string;
}

const VProfileCard = ({
  image,
  name,
  age,
  shelter,
  state,
}: VProfileInfoProps) => (
  <div className="flex items-center gap-4 p-4 sm:p-6 lg:p-8">
    <img className="relative w-35 cursor-pointer lg:mr-20" src={image} alt="" />
    <div>
      <div className="flex flex-col-reverse">
        {name} ({age}살)
      </div>
      <div className="text-sm text-gray-400">{shelter}</div>
      <div className="font-bold">{state}</div>
    </div>
  </div>
);

export default VProfileCard;
