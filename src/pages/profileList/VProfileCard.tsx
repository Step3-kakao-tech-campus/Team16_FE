export interface VProfileInfoProps {
  profileImageUrl: string;
  petId: number;
  petName: string;
  petAge: number | null;
  shelterName: string;
  adoptionStatus: string;
}

const VProfileCard = (vProfileInfoProps: VProfileInfoProps) => (
  <div className="flex flex-col items-center justify-center m-1 flex-nowrap">
    <a
      href={`/pet/${vProfileInfoProps.petId}`}
      className="flex items-center justify-start gap-6 w-52 h-24 ml-10"
    >
      <div className="flex justify-center w-1/3 h-3/4">
        <img
          className="flex object-cover w-full h-full cursor-pointer "
          src={vProfileInfoProps.profileImageUrl}
          alt=""
        />
      </div>
      <div className=" whitespace-nowrap">
        <div className="flex flex-row items-center">
          {vProfileInfoProps.petName}
          <div className="flex ml-4 text-sm text-brand-color">
            {vProfileInfoProps.petAge}
          </div>
        </div>
        <div className="text-sm text-gray-400">
          {vProfileInfoProps.shelterName}
        </div>
        <div className=" text-sm font-semibold">
          {vProfileInfoProps.adoptionStatus}
        </div>
      </div>
    </a>
    <hr className=" w-10/12 h-1"></hr>
  </div>
);

export default VProfileCard;
