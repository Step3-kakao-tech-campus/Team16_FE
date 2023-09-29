interface VShelterInfoProps {
  name?: string;
  id?: number;
  adress?: string;
  call?: string;
}

const VShelterCard = ({ name, id, adress, call }: VShelterInfoProps) => (
  <div className="flex-initial m-20">
    <li className="block ml-14">
      <a href="#" className="relative block group">
        <img src={'/assets/frame.png'} alt="" className="object-cover w-auto" />

        <div className="absolute text-sm sm:text-lg font-bold inset-0 flex flex-col items-start justify-start p-6">
          <div className="text-xl font-Bold">{name}</div>
          <div className="mt-1.5 max-w-[40ch] font-medium center">{adress}</div>
          <div className="mt-1.5 mb-1 max-w-[40ch] font-medium">
            연락처 {call}
          </div>
          <span className="mt-auto inline-block bg-green-700 px-2 py-1.5 text-xs font-medium uppercase tracking-wide text-white rounded-xl">
            전화걸기
          </span>
        </div>
      </a>
    </li>
  </div>
);

export default VShelterCard;
