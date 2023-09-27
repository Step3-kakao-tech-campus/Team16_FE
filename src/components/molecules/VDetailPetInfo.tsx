import { Link } from 'react-router-dom';
import { MockDetailPetInfoProps } from 'components/organisms/VDetailPetData';

const VDetailPetInfo = (data: MockDetailPetInfoProps) => {
  return (
    <div>
      <h2 className="text-3xl my-10">{data.name}</h2>
      <div className="flex flex-col items-center">
        <div className="flex h-20 gap-10 justify-around">
          <div className="w-28">
            <span className="font-bold">나이</span> {data.age}{' '}
          </div>
          <div className="w-52">
            <span className="font-bold">성별</span> {data.sex}
          </div>
        </div>

        <div className="flex h-20 gap-10 justify-around">
          <div className="w-28">
            <span className="font-bold">몸무게</span> {data.weight}kg{' '}
          </div>
          <div className="w-52">
            <span className="font-bold">분양지역</span> 광주북구동물보호소
            <br />
            <span className="text-xs font-bold text-yellow-600">
              {'애니모리에 등록된 보호소입니다. '}
            </span>
            <Link
              to={`/shelter/${data.shelterId}`}
              className="text-xs font-bold text-blue-700"
            >
              정보 보기
            </Link>
          </div>
        </div>

        <div className="flex h-20 gap-10 justify-around">
          <div className="w-28">
            <span className="font-bold">백신접종</span>
            {` ${data.vaccinationStatus}`}{' '}
          </div>
          <div className="w-52">
            <span className="font-bold">중성화</span>
            {` ${data.neutralizationStatus}`}
          </div>
        </div>

        <div className="flex h-20 gap-10 justify-around">
          <div className="w-28">
            <span className="font-bold">입양 여부</span>
            {` ${data.adoptionStatus}`}{' '}
          </div>
          <div className="w-52">
            <span className="font-bold">보호종료일</span>
            {` ${data.protectionExpirationDate}`}
          </div>
        </div>
        <div className="w-full">{data.description}</div>
      </div>
    </div>
  );
};

export default VDetailPetInfo;
