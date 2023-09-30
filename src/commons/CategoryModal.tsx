import { useRecoilState } from 'recoil';
import regionAtom, { RegionType } from 'recoil/regionAtom';
import speciesAtom, { SpeciesType } from 'recoil/speciesAtom';

export interface CategoryModalProps {
  handleModalCloseClick: () => void;
  handleModalOutsideClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  speciesOrRegion: CategoryModalType;
  setSpeciesOrRegion: (speciesOrRegion: CategoryModalType) => void;
}

export type CategoryModalType = 'species' | 'region';

const CategoryModal = ({
  handleModalCloseClick,
  handleModalOutsideClick,
  speciesOrRegion,
  setSpeciesOrRegion,
}: CategoryModalProps) => {
  const [, setSpecies] = useRecoilState(speciesAtom);
  const [, setRegion] = useRecoilState(regionAtom);

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

  const handleSpeciesClick = (species: SpeciesType) => {
    setSpecies(species);
    setSpeciesOrRegion('region');
  };
  const handleRegionClick = (region: RegionType) => {
    setRegion(region);
    handleModalCloseClick();
  };
  return (
    <div
      onClick={handleModalOutsideClick}
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="flex flex-col w-3/5 h-4/5 fixed bg-white rounded-md overflow-auto">
        <div className="flex justify-between p-5">
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

        {/* 밑 부분은 하나의 컴포넌트로 분리 가능해보임.
            위에도 V컴포넌트로 분리 될 것 같긴 한데 굳이? */}
        {speciesOrRegion === 'species' && (
          <div className="grid grid-cols-1 justify-items-center content-around h-full md:grid-cols-2">
            {speciesList.map((species) => {
              return (
                <button
                  onClick={() => handleSpeciesClick(species)}
                  key={species}
                  className="w-40 h-40 md:w-52 md:h-52 border rounded-md hover:bg-gray-100"
                >
                  {species}
                </button>
              );
            })}
          </div>
        )}
        {speciesOrRegion === 'region' && (
          <div className="flex flex-col">
            {regionList.map((region) => {
              return (
                <button
                  onClick={() => handleRegionClick(region)}
                  key={region}
                  className="flex flex-col justify-start pl-5 border border-b-white py-3 hover:bg-gray-100 hover:pl-6"
                >
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
