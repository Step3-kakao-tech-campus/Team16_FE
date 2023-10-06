import { SpeciesType } from 'recoil/speciesState';
import { RegionType } from 'recoil/regionState';

export interface VCategoryModalListProps {
  speciesOrRegion: CategoryModalType;
  speciesList: SpeciesType[];
  handleSpeciesClick: (species: SpeciesType) => void;
  regionList: RegionType[];
  handleRegionClick: (region: RegionType) => void;
}

export type CategoryModalType = 'species' | 'region';

const VCatetegoryModalList = (props: VCategoryModalListProps) => {
  const {
    speciesOrRegion,
    speciesList,
    handleSpeciesClick,
    regionList,
    handleRegionClick,
  } = props;

  const speciesImageList = [
    '/assets/images/dog.png',
    '/assets/images/cat.png',
    '/assets/images/racoon.png',
    '/assets/images/all.png',
  ];

  return (
    <>
      {speciesOrRegion === 'species' && (
        <div className="grid grid-cols-1 h-full md:grid-cols-2">
          {speciesList.map((species, index) => {
            return (
              <div
                key={species}
                className="flex flex-col items-center justify-center"
              >
                <button
                  onClick={() => handleSpeciesClick(species)}
                  className="w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 border shadow rounded-lg hover:bg-gray-100"
                >
                  <img src={`${speciesImageList[index]}`} alt="" />
                </button>
                <span>{species}</span>
              </div>
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
    </>
  );
};

export default VCatetegoryModalList;
