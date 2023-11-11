import { ListProps } from '../profileListType';

const ProfileCard = (vProfileInfoProps: ListProps) => {
  let textColor = 'text-neutral-950';
  if (vProfileInfoProps.status === '미입양') {
    textColor = 'text-brand-color'; // 미입양일 때 주황색
  } else if (vProfileInfoProps.status === '입양 완료') {
    textColor = 'text-blue-700'; // 입양완료일 때 파란색
  }
  return (
    <div className="flex flex-col items-center justify-center m-1 flex-nowrap">
      <a
        href={`/pet/${vProfileInfoProps.petId}`}
        className="flex items-center justify-start gap-6 w-auto h-24 ml-10"
      >
        <div className="flex justify-center w-24 h-full">
          <img
            className="flex object-cover w-full h-full cursor-pointer "
            src={vProfileInfoProps.profileImageUrl}
            alt="유기동물 사진"
          />
        </div>
        <div className=" w-44 whitespace-nowrap">
          <div className="flex text-base font-semibold flex-row items-center">
            {vProfileInfoProps.petName}
            <div className="text-lg font-semibold ml-2 text-gray-500">
              {vProfileInfoProps.sex === 'MALE' ? '♂️' : '♀️'}
            </div>
            <div className="flex ml-4 text-sm text-brand-color">
              {vProfileInfoProps.petAge}
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {vProfileInfoProps.shelterName}
          </div>

          <div className={` text-base mt-2 font-semibold ${textColor}`}>
            {vProfileInfoProps.status}
          </div>
        </div>
      </a>
      <hr className=" w-64 h-1 mt-4"></hr>
    </div>
  );
};

export default ProfileCard;
