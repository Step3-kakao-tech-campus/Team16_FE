export interface VProfileInfoProps {
  profileImageUrl: string;
  petId: number;
  petName: string;
  petAge: number;
  shelterName: string;
  adoptionStatus: string;
}

const VProfileCard = (vProfileInfoProps: VProfileInfoProps) => (
  <div className="flex flex-col items-center justify-center m-5 flex-nowrap">
    <a
      href={`/pet/${vProfileInfoProps.petId}`}
      className="flex items-center justify-center gap-6"
    >
      <img
        className="relative w-28 cursor-pointer"
        src={vProfileInfoProps.profileImageUrl}
        alt=""
      />
      <div className=" whitespace-nowrap">
        <div className="flex flex-col-reverse">
          {vProfileInfoProps.petName} ({vProfileInfoProps.petAge})
        </div>
        <div className="text-sm text-gray-400">
          {vProfileInfoProps.shelterName}
        </div>
        <div className="font-bold">{vProfileInfoProps.adoptionStatus}</div>
      </div>
    </a>
    <hr className="mt-5 w-full h-1"></hr>
  </div>
);

export default VProfileCard;
