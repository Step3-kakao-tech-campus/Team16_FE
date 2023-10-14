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
  <a
    href="/pet/1"
    className="flex items-center justify-center gap-5 p-2 sm:p-3"
  >
    <img className="relative w-28 cursor-pointer mr-3" src={image} alt="" />
    <div className=" whitespace-nowrap">
      <div className="flex flex-col-reverse">
        {name} ({age}살)
      </div>
      <div className="text-sm text-gray-400">{shelter}</div>
      <div className="font-bold">{state}</div>
    </div>
  </a>
);

export default VProfileCard;
