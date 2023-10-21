interface VShelterInfoProps {
  name?: string;
  id?: number;
  adress?: string;
  call?: string;
}

const VShelterCard = ({ name, id, adress, call }: VShelterInfoProps) => (
  <div className="flex w-auto justify-center">
    <div className="flex mx-2">
      <div className="relative flex">
        <img src={'/assets/frame.png'} alt="" className=" w-auto" />
        <div className="absolute text-xs sm:text-lg inset-0 flex flex-col items-start justify-start px-8 py-5 sm:p-10">
          <div className="flex text-lg sm:text-2xl font-bold whitespace-nowrap">
            {name}
          </div>
          <div className="flex center whitespace-nowrap">{adress}</div>
          <div className="sm:mt-3 mb-1 whitespace-nowrap">연락처 {call}</div>
          <span className="mt-auto inline-block bg-green-700 px-2 py-1 text-xs font-medium uppercase text-white rounded-xl whitespace-nowrap">
            <a href={`tel:${call}`}>전화하기</a>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default VShelterCard;
