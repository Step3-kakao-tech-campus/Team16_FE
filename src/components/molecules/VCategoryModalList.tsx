import { SpeciesType } from 'recoil/speciesAtom';
import { RegionType } from 'recoil/regionAtom';

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

  return (
    <>
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
    </>
  );
};

export default VCatetegoryModalList;
