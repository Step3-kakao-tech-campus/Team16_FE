interface RadioProps {
  name?: string;
  label: string;
  value: string;
  selected?: boolean;
  onChange: (e: any) => void;
}

const Radio = ({ name, label, value, selected, onChange }: RadioProps) => {
  return (
    <div>
      <label htmlFor="radio">
        <input
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

export default Radio;
