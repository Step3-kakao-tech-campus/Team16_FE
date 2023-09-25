interface VDetailPetInfoProps {
  name: string;
  age: string;
  sex: string;
  weight: number;
  description: string;
}

const VDetailPetInfo = ({
  name,
  age,
  sex,
  weight,
  description,
}: VDetailPetInfoProps) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-3xl">{name}</h2>
      <div className="flex gap-10 justify-around">
        <div className="w-20">
          <span className="font-bold">나이</span> {age}{' '}
        </div>
        <div className="w-48">
          <span className="font-bold">성별</span> {sex}
        </div>
      </div>
      <div className="flex gap-10 justify-around">
        <div className="w-20">
          <span className="font-bold">몸무게</span> {weight}kg{' '}
        </div>
        <div className="w-48">
          <span className="font-bold">분양지역</span> 광주북구동물보호소
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default VDetailPetInfo;
