interface VShelterInfoProps {
  name?: string;
  id?: number;
  adress?: string;
  call?: string;
}

const VShelterCard = ({ name, id, adress, call }: VShelterInfoProps) => (
  <div className="content h-70 w-90 rounded-xl border-black border-spacing-10 hover:shadow-sm hover:[animation-duration:_4s]">
    <img
      className="object-contain inset-0 h-200 w-200 opacity-100 group-hover:opacity-100"
      src={'/assets/frame.png'}
      alt=""
    />

    <div className="absolute font-bold inset-0 flex flex-col items-start justify-start p-6">
      <div className="text-xl font-Bold">{name}</div>
      <div className="mt-1.5 max-w-[40ch] font-medium center">{adress}</div>
      <div className="mt-1.5 max-w-[40ch] font-medium">연락처 {call}</div>
      <span className="mt-10 inline-block bg-green-700 px-2 py-1.5 text-xs font-medium uppercase tracking-wide text-white rounded-xl">
        전화걸기
      </span>
    </div>
  </div>
);

export default VShelterCard;
