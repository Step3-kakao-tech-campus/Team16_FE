// src/components/RadioGroup.tsx
import Radio from 'components/atoms/Radio';
import RadioButton from 'components/atoms/RadioButton';
import React, { ChangeEvent } from 'react';

interface RadioGroupProps {
  options: { label: string; value: string }[];
  selectedOption: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <div>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          selected={selectedOption === option.value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      ))}
    </div>
  );
};

export default RadioGroup;
