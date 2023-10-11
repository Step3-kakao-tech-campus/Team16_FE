import { Link } from 'react-router-dom';
import { DetailPetInfoProps } from 'pages/detailPet/VDetailPetData';

const VDetailPetInfo = (data: DetailPetInfoProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl w-5/6 mb-10">{data.name}</h2>
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

        <div className="flex justify-around">
          <div className="flex">
            <span className="w-16 block font-bold">몸무게</span>
            <span className="w-16 block">{data.weight}kg</span>
          </div>
          <div>
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

        <a href={`tel:${data.shelterInfo.contact}`}>
          <span className="block border border-2 border-gray-500 font-bold md:hidden flex w-[22rem] h-10 mb-10 bg-green-500 rounded-md items-center justify-center">
            문의하기
          </span>
        </a>

        <div className="w-5/6">{data.description}</div>
      </div>
    </div>
  );
};

export default VDetailPetInfo;
