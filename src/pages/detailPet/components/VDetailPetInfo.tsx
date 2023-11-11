import { Link } from 'react-router-dom';
import { DetailPetInfoProps } from '../detailPetType';

const VDetailPetInfo = (data: DetailPetInfoProps) => {
  return (
    <div className="flex flex-col w-full  items-center">
      <div className="flex flex-col w-full items-center text-sm md:text-base">
        <div className="flex py-7 justify-around">
          <div className="flex">
            <h2 className="text-3xl font-semibold w-32 mb-4">{data.name}</h2>
          </div>
          <div className="flex">
            <span className="w-20 block font-bold"></span>
            <span className="w-36 block"></span>
          </div>
        </div>
        <div className="flex py-7 justify-around">
          <div className="flex">
            <span className="w-16 block font-bold">나이</span>
            <span className="w-20 block">{data.age}</span>
          </div>
          <div className="flex">
            <span className="w-20 block font-bold">성별</span>
            <span className="w-32 block">
              {data.sex === 'MALE' ? '수컷' : '암컷'}
            </span>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="flex">
            <span className="w-16 block font-bold">몸무게</span>
            <span className="w-20 block">{data.weight}kg</span>
          </div>
          <div>
            <div className="flex">
              <span className="w-20 block font-bold">분양지역</span>
              <span className="w-32 block">{data.shelterInfo.name}</span>
            </div>
            <span className="text-xs font-bold text-yellow-600">
              {'애니모리에 등록된 보호소입니다. '}
            </span>
            <Link
              to={`/shelter/${data.shelterInfo.id}/1`}
              className="text-xs font-bold text-blue-700"
            >
              정보 보기
            </Link>
          </div>
        </div>

        <div className="flex py-7 justify-around">
          <div className="flex">
            <span className="w-16 block font-bold">백신접종</span>
            <span className="w-20 block">{data.vaccinationStatus}</span>
          </div>
          <div className="flex">
            <span className="w-20 block font-bold">중성화</span>
            <span className="w-32 block">{data.neutralizationStatus}</span>
          </div>
        </div>

        <div className="flex py-7 justify-around">
          <div className="flex">
            <span className="w-16 block font-bold">입양 여부</span>
            <span className="w-20 block">{data.adoptionStatus}</span>
          </div>
          <div className="flex">
            <span className=" w-20 block font-bold">보호종료일</span>
            <span className="w-32 block">{data.protectionExpirationDate}</span>
          </div>
        </div>

        <div className="hidden py-7 md:flex justify-around">
          <div className="flex">
            <span className="w-16 block font-bold">연락처</span>
            <span className="w-32 block">{data.shelterInfo.contact}</span>
          </div>
          <div className="flex">
            <span className="w-20 block font-bold"></span>
            <span className="w-20 block"></span>
          </div>
        </div>

        <a href={`tel:${data.shelterInfo.contact}`}>
          <span className="border-2 text-white font-bold md:hidden flex w-[22rem] h-10 mb-10 bg-green-700 rounded-xl items-center justify-center">
            문의하기
          </span>
        </a>

        <div className="flex">
          <span className="w-16 block font-bold">상세정보</span>
          <span className="w-72 mb-5 block">{data.description}</span>
        </div>
      </div>
    </div>
  );
};

export default VDetailPetInfo;
