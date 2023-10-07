interface RadioProps {
  name?: string;
  label: string;
  value: string;
  selected?: boolean;
  onChange: (e: any) => void;
}

const RadioButton = ({
  name,
  label,
  value,
  selected,
  onChange,
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
        />
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
