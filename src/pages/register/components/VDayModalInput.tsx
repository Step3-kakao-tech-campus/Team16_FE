import Calendar from 'pages/register/components/Calendar';
import { useRecoilValue } from 'recoil';
import registerState from 'recoil/registerState';
import { DayModalProps } from '../registerType';

const VDayModalInput = ({ open, handleClick }: DayModalProps) => {
  const protectionDate = useRecoilValue(registerState);
  const { protectionExpirationDate } = protectionDate;

  return (
    <div className="flex flex-col items-center gap-2 relative">
      <div className="flex flex-col w-80 gap-2">
        <label
          htmlFor="day-modal"
          className="flex justify-start items-start text-start text-sm font-semibold"
        >
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
          autoComplete="off"
          readOnly
        />
        <dialog
          open={open}
          className="absolute top-10 mt-2 border-2 border-gray-300 rounded-md"
        >
          <Calendar handleClick={handleClick} />
        </dialog>
      </div>
    </div>
  );
};

export default VDayModalInput;
