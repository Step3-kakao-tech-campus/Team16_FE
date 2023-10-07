import Calendar from 'components/atoms/Calendar';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import registerState from 'recoil/registerState';

const DayModalInput = () => {
  const [open, setOpen] = useState(false);
  // recoil에서 date 부분만 가져와서 쓰도록
  const protectionDate = useRecoilValue(registerState);
  const { protectionExpirationDate } = protectionDate;

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <label htmlFor="day-modal" className="text-sm font-semibold">
        안락사 일자
      </label>
      <input
        id="day-modal"
        className="border-2 rounded-md border-gray-300 p-2 text-center"
        name="안락사 일자"
        type="text"
        placeholder="날짜를 선택해주세요."
        onClick={handleClick}
        value={protectionExpirationDate}
        autoComplete="date"
      />
      <dialog open={open} className="">
        <Calendar handleClick={handleClick} />
      </dialog>
    </div>
  );
};

export default DayModalInput;
