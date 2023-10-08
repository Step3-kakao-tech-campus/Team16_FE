import Calendar from 'components/atoms/Calendar';
import { useRecoilValue } from 'recoil';
import registerState from 'recoil/registerState';

interface Props {
  open: boolean;
  handleClick: () => void;
}

const VDayModalInput = ({ open, handleClick }: Props) => {
  const protectionDate = useRecoilValue(registerState);
  const { protectionExpirationDate } = protectionDate;

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
        defaultValue={protectionExpirationDate}
        autoComplete="date"
      />
      <dialog open={open} className="">
        <Calendar handleClick={handleClick} />
      </dialog>
    </div>
  );
};

export default VDayModalInput;
