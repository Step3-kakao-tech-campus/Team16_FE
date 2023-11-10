import { CategoryBarProps } from '../homeType';

const CategoryBar = (props: CategoryBarProps) => {
  const { species, region, handleRemoveFilter } = props;
  return (
    <div className="flex justify-center gap-7 my-3 items-center">
      <span className=" text-orange-400 text-xl font-semibold">카테고리</span>
      <button
        className="flex bg-orange-400 rounded-full px-5 py-2 text-white"
        onClick={() => handleRemoveFilter(species)}
      >
        {species} x
      </button>
      <button
        className="flex bg-orange-400 rounded-full px-5 py-2 text-white"
        onClick={() => handleRemoveFilter(region)}
      >
        {region} x
      </button>
      <span className="text-lg font-semibold"> 친구들 </span>
    </div>
  );
};

export default CategoryBar;
