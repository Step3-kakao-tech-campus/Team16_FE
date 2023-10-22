interface StatusProps {
  status: string;
  score: number;
  selectedOption: number;
  handleChange: (status: string, option: number) => void;
}

const Dash = () => {
  return (
    <div className="flex">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="mx-1 h-[2px] w-1 bg-[#C4C4C4] rounded-full"
        />
      ))}
    </div>
  );
};

const StatusScore = ({ status, selectedOption, handleChange }: StatusProps) => {
  const getButtonColor = (option: string) => {
    return `appearance-none ${
      String(selectedOption) !== option
        ? 'border-[#C4C4C4] bg-[#C4C4C4]'
        : 'border-brand-color bg-brand-color'
    } border-8 rounded-full w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] lg:w-[4rem] lg:h-[4rem] cursor-pointer`;
  };

  return (
    <div className="flex flex-col justify-center gap-2 items-center my-2 sm:my-2 md:my-3 lg:my-4 w-[100%]">
      <div className="flex justify-center lg:text-lg font-semibold">
        {status}
      </div>
      <div className="flex flex-row gap-2 items-center">
        <span className="flex text-base sm:text-sm lg:text-lg font-semibold">
          Low
        </span>
        <div className="flex flex-row items-center">
          <input
            type="radio"
            value="1"
            className={getButtonColor('1')}
            onClick={() => handleChange(status, 1)}
          />
          <Dash />
          <input
            type="radio"
            value="2"
            className={getButtonColor('2')}
            onClick={() => handleChange(status, 2)}
          />
          <Dash />
          <input
            type="radio"
            value="3"
            className={getButtonColor('3')}
            onClick={() => handleChange(status, 3)}
          />
          <Dash />
          <input
            type="radio"
            value="4"
            className={getButtonColor('4')}
            onClick={() => handleChange(status, 4)}
          />
          <Dash />
          <input
            type="radio"
            value="5"
            className={getButtonColor('5')}
            onClick={() => handleChange(status, 5)}
          />
        </div>
        <span className="text-base sm:text-sm lg:text-lg font-semibold">
          High
        </span>
      </div>
    </div>
  );
};

export default StatusScore;
