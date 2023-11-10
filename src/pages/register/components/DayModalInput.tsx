import { useState } from 'react';
import VDayModalInput from './VDayModalInput';

const DayModalInput = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const DayModalInputProps = {
    open,
    handleClick,
  };

  return <VDayModalInput {...DayModalInputProps} />;
};

export default DayModalInput;
