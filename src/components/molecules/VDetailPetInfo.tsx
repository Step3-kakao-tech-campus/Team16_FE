import { MockDetailPetInfoProps } from 'components/organisms/VDetailPetData';

const VDetailPetInfo = (data: MockDetailPetInfoProps) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-3xl">{data.name}</h2>

      <div className="flex gap-10 justify-around">
        <div className="w-32">
          <span className="font-bold">나이</span> {data.age}{' '}
        </div>
        <div className="w-48">
          <span className="font-bold">성별</span> {data.sex}
        </div>
      </div>

      <div className="flex gap-10 justify-around">
        <div className="w-32">
          <span className="font-bold">몸무게</span> {data.weight}kg{' '}
        </div>
        <div className="w-48">
          <span className="font-bold">분양지역</span> 광주북구동물보호소
        </div>
      </div>

      <div className="flex gap-10 justify-around">
        <div className="w-32">
          <span className="font-bold">백신접종</span>
          {` ${data.vaccinationStatus}`}{' '}
        </div>
        <div className="w-48">
          <span className="font-bold">중성화</span>
          {` ${data.neutralizationStatus}`}
        </div>
      </div>

      <div className="flex gap-10 justify-around">
        <div className="w-32">
          <span className="font-bold">입양 여부</span>
          {` ${data.adoptionStatus}`}{' '}
        </div>
        <div className="w-48">
          <span className="font-bold">보호종료일</span>
          {` ${data.protectionExpirationDate}`}
        </div>
      </div>
      <div>{data.description}</div>
    </div>
  );
};

export default VDetailPetInfo;
