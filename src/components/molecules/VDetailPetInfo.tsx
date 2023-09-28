import { Link } from 'react-router-dom';
import { MockDetailPetInfoProps } from 'components/organisms/VDetailPetData';

const VDetailPetInfo = (data: MockDetailPetInfoProps) => {
  return (
    <div>
      <h2 className="text-3xl my-10">{data.name}</h2>
      <div className="flex flex-col items-center">
        <div className="flex h-14 justify-around">
          <div className="flex">
            <span className="w-16 block font-bold">나이</span>
            <span className="w-16 block">{data.age}</span>
          </div>
          <div className="flex">
            <span className="w-20 block font-bold">성별</span>
            <span className="w-36 block">{data.sex}</span>
          </div>
        </div>

        <div className="flex h-14 justify-around">
          <div className="flex">
            <span className="w-16 block font-bold">몸무게</span>
            <span className="w-16 block">{data.weight}kg</span>
          </div>
          <div className="">
            <div className="flex">
              <span className="w-20 block font-bold">분양지역</span>
              <span className="w-36 block">{data.shelterInfo.name}</span>
            </div>
            <span className="text-xs font-bold text-yellow-600">
              {'애니모리에 등록된 보호소입니다. '}
            </span>
            <Link
              to={`/shelter/${data.shelterInfo.id}`}
              className="text-xs font-bold text-blue-700"
            >
              정보 보기
            </Link>
          </div>
        </div>

        <div className="flex h-14 justify-around">
          <div className="flex">
            <span className="w-16 block font-bold">백신접종</span>
            <span className="w-16 block">{data.vaccinationStatus}</span>
          </div>
          <div className="flex">
            <span className="w-20 block font-bold">중성화</span>
            <span className="w-36 block">{data.neutralizationStatus}</span>
          </div>
        </div>

        <div className="flex h-14 justify-around">
          <div className="flex">
            <span className="w-16 block font-bold">입양 여부</span>
            <span className="w-16 block">{data.adoptionStatus}</span>
          </div>
          <div className="flex">
            <span className="w-20 block font-bold">보호종료일</span>
            <span className="w-36 block">{data.protectionExpirationDate}</span>
          </div>
        </div>

        <div className="hidden md:flex w-[22rem] h-10 mb-10">
          <div className="flex">
            <span className="w-16 block font-bold">연락처</span>
            <span className="w-36 block">{data.shelterInfo.contact}</span>
          </div>
        </div>

        <div className="w-full">{data.description}</div>
      </div>
    </div>
  );
};

export default VDetailPetInfo;
