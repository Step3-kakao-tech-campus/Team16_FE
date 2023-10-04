import Radio from 'components/atoms/Radio';

export interface RadioProps {
  name?: string;
  label: string;
  value: string;
  selected?: boolean;
}

const RadioGroup = (radioProps: RadioProps) => {
  return (
    <div>
      <Radio
        name={radioProps.name}
        value={radioProps.value}
        label={radioProps.label}
        selected={radioProps.selected}
      />
    </div>
  );
};

export default RadioGroup;
