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
    } border-8 rounded-full w-[50px] h-[50px] cursor-pointer`;
  };

  return (
    <div className="flex flex-col justify-center items-center m-2">
      <div className="text-lg font-semibold">{status}</div>
      <div className="flex flex-row m-2 items-center">
        <span className="text-sm font-semibold mx-1">Low</span>
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
        <span className="text-sm font-semibold mx-1">High</span>
      </div>
    </div>
  );
};

export default StatusScore;
