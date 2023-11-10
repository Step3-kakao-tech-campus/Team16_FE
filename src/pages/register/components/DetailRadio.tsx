import { RadioProps } from '../registerType';

const DetailRadio = ({
  name,
  label,
  value,
  selected,
  onChange,
  onClick,
}: RadioProps) => {
  return (
    <div>
      <label htmlFor="radio">
        <input
          className=" accent-brand-color  whitespace-nowrap"
          type="radio"
          name={name}
          value={value}
          defaultChecked={selected}
          onChange={onChange}
          onClick={onClick}
        />
        {label}
      </label>
    </div>
  );
};

export default DetailRadio;
