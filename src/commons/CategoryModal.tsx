export interface CategoryModalProps {
  handleModalCloseClick: () => void;
  handleModalOutsideClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  setSelectedRegion: (region: RegionType) => void;
  speciesOrRegion: CategoryModalType;
  setSpeciesOrRegion: (speciesOrRegion: CategoryModalType) => void;
}

export type RegionType =
  | '서울'
  | '경기'
  | '인천'
  | '강원'
  | '충북'
  | '충남'
  | '대전'
  | '경북'
  | '경남'
  | '대구'
  | '울산'
  | '부산'
  | '전북'
  | '전남'
  | '광주'
  | '제주'
  | '세종'
  | '전국';
export type SpeciesType = '강아지' | '고양이' | '기타';
export type CategoryModalType = 'species' | 'region';

const CategoryModal = ({
  handleModalCloseClick,
  handleModalOutsideClick,
  setSelectedRegion,
  speciesOrRegion,
  setSpeciesOrRegion,
}: CategoryModalProps) => {
  const speciesList: SpeciesType[] = ['강아지', '고양이', '기타'];
  const regionList: RegionType[] = [
    '전국',
    '서울',
    '경기',
    '인천',
    '강원',
    '충북',
    '충남',
    '대전',
    '경북',
    '경남',
    '대구',
    '울산',
    '부산',
    '전북',
    '전남',
    '광주',
    '제주',
    '세종',
  ];

  const handleSpeciesClick = (species: string) => {
    // 선택한 종류 recoil에 저장
    setSpeciesOrRegion('region');
  };
  const handleRegionClick = (region: RegionType) => {
    setSelectedRegion(region);
    handleModalCloseClick();
  };
  return (
    <div
      onClick={handleModalOutsideClick}
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="flex flex-col w-4/5 p-10 pt-5 fixed bg-white rounded-md">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <button
              className={`${
                speciesOrRegion === 'species' &&
                'object-contain border-b-2 border-yellow-600 font-bold text-yellow-600'
              }`}
              onClick={() => setSpeciesOrRegion('species')}
            >
              종류
            </button>
            <button
              className={`${
                speciesOrRegion === 'region' &&
                'object-contain border-b-2 border-yellow-600 font-bold text-yellow-600'
              }`}
              onClick={() => setSpeciesOrRegion('region')}
            >
              지역
            </button>
          </div>
          <button onClick={handleModalCloseClick} className="text-2xl">
            X
          </button>
        </div>
        {speciesOrRegion === 'species' && (
          // 배열에 담아서 map으로 뿌려주기 1
          // 종류 선택하면 지역 선택으로 넘어가기
          <div className="flex flex-col">
            {speciesList.map((species) => {
              return (
                <button
                  onClick={() => handleSpeciesClick(species)}
                  key={species}
                >
                  {species}
                </button>
              );
            })}
          </div>
        )}
        {speciesOrRegion === 'region' && (
          // useState로 관리하지 말고 recoil로 관리해야 할 듯
          <div className="flex flex-col">
            {regionList.map((region) => {
              return (
                <button onClick={() => handleRegionClick(region)} key={region}>
                  {region}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryModal;
