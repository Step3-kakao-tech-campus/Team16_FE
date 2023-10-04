interface RadioProps {
  name?: string;
  label: string;
  value: string;
  selected?: boolean;
}

const Radio = (radioProps: RadioProps) => {
  return (
    <div>
      <label htmlFor="radio">
        <input
          type="radio"
          name={radioProps.name}
          value={radioProps.value}
          defaultChecked={radioProps.selected}
        />
        {radioProps.label}
      </label>
    </div>
  );
};

export default Radio;
