import { RegisterType } from 'recoil/registerState';

interface DaysProps {
  day: Date;
  index: number;
  className: string;
}

interface CurrentDaysProps extends DaysProps {
  setProtectionDate: (
    valOrUpdater: RegisterType | ((currVal: RegisterType) => RegisterType),
  ) => void;
  handleClick: () => void;
}

interface NextMonthDaysProps extends DaysProps {
  nextMonth: (month: number) => void;
}

interface PrevMonthDaysProps extends DaysProps {
  prevMonth: (month: number) => void;
}

export const CurrentMonthDays = ({
  day,
  index,
  className,
  setProtectionDate,
  handleClick,
}: CurrentDaysProps) => {
  return (
    <td key={index} className="flex justify-center w-[50px] h-[50px]">
      <button
        className={className}
        onClick={() => {
          const dateFormat = `${day.getFullYear()}-${String(
            day.getMonth() + 1 < 9
              ? `0${day.getMonth() + 1}`
              : day.getMonth() + 1,
          )}-${String(
            day.getDate() < 9 ? `0${day.getDate()}` : day.getDate(),
          )}`;
          setProtectionDate((prev) => ({
            ...prev,
            protectionExpirationDate: dateFormat,
          }));
          handleClick();
        }}
      >
        {day.getDate()}
      </button>
    </td>
  );
};

export const PrevMonthDays = ({
  day,
  index,
  className,
  prevMonth,
}: PrevMonthDaysProps) => {
  const currentDate = new Date();

  return (
    <td key={index} className={className}>
      <button
        className="w-full h-full"
        onClick={() => {
          prevMonth(currentDate.getMonth());
          // 날짜 클릭 연도 문제 해결해야 됨
        }}
      >
        {day.getDate()}
      </button>
    </td>
  );
};

export const NextMonthDays = ({
  day,
  index,
  className,
  nextMonth,
}: NextMonthDaysProps) => {
  const currentDate = new Date();

  return (
    <td key={index} className={className}>
      <button
        className="w-full h-full"
        onClick={() => {
          nextMonth(currentDate.getMonth());
          // 날짜 클릭 연도 문제 해결해야 됨 -> day.getMonth() 고려해보기
        }}
      >
        {day.getDate()}
      </button>
    </td>
  );
};
