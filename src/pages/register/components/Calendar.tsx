import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import registerState from 'recoil/registerState';
import {
  CurrentMonthDays,
  NextMonthDays,
  PrevMonthDays,
} from '../../../commons/MonthDays';
import { CalendarProps } from '../registerType';

const Calendar = ({ handleClick }: CalendarProps) => {
  const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const setProtectionDate = useSetRecoilState(registerState);

  // 달의 시작 닐찌 요일 index
  const currentMonthStartDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  // 달의 마지막 날짜
  const currentMonthEndDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );

  // 지난 날 마지막 날짜
  const prevMonthEndDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0,
  );

  // 다음 달 시작 날짜
  const nextMonthStartDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1,
  );

  // 캘린더 생성
  const makeCalendar = () => {
    // 이전 달 날짜 가져오기
    const days: Date[] = Array.from(
      { length: currentMonthStartDate },
      (_, i) => {
        return new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          prevMonthEndDate.getDate() - i,
        );
      },
    ).reverse();

    // 이번 달 날짜 가져오기
    days.push(
      ...Array.from(
        { length: currentMonthEndDate.getDate() },
        (_, i) =>
          new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1),
      ),
    );

    // 다음 달 날짜 가져오기
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      days.push(
        ...Array.from(
          { length: remainingDays },
          (_, i) =>
            new Date(
              nextMonthStartDate.getFullYear(),
              nextMonthStartDate.getMonth(),
              i + 1,
            ),
        ),
      );
    }

    return days;
  };

  // 이전 달로 이동
  const prevMonth = (year: number, month: number) => {
    const prevIndex = month - 1;
    const prevYear = currentDate.getFullYear() - 1;
    if (prevIndex > 11 && prevYear !== year) {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth((prev) => prev + 11);
      setCurrentDate(new Date(prevYear, prevIndex + 12));
    } else {
      setCurrentMonth((prev) => prev - 1);
      setCurrentDate(new Date(currentYear, prevIndex));
    }
  };

  // 다음 달로 이동
  const nextMonth = (year: number, month: number) => {
    const nextIndex = month + 1;
    const nextYear = currentDate.getFullYear() + 1;
    if (nextIndex > 11 && nextYear !== year) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth((prev) => prev - 11);
      setCurrentDate(new Date(nextYear, nextIndex - 12));
    } else {
      setCurrentMonth((prev) => prev + 1);
      setCurrentDate(new Date(currentYear, nextIndex));
    }
  };

  // 날짜 받아오기
  const makeCalendarDays = (days: Date[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 리팩토링 필요
    return days.map((day: Date, index: number) => {
      // 지난 달에서 가져온 날짜
      // 연도가 같을 때
      if (day.getFullYear() === currentDate.getFullYear()) {
        if (day.getMonth() < currentDate.getMonth()) {
          return (
            <PrevMonthDays
              key={index}
              day={day}
              index={index}
              className={'prevMonthDay text-gray-400 py-2'}
              prevMonth={() =>
                prevMonth(currentDate.getFullYear(), currentDate.getMonth())
              }
            />
          );
        }

        // 다음 달에서 가져온 날짜
        if (day.getMonth() > currentDate.getMonth()) {
          return (
            <NextMonthDays
              key={index}
              day={day}
              index={index}
              className={'nextMonthDay text-gray-400 py-2'}
              nextMonth={() =>
                nextMonth(currentDate.getFullYear(), currentDate.getMonth())
              }
            />
          );
        }
      }

      // 연도가 다를 때
      if (day.getFullYear() !== currentDate.getFullYear()) {
        if (day.getMonth() < currentDate.getMonth()) {
          return (
            <NextMonthDays
              key={index}
              day={day}
              index={index}
              className={'nextMonthDay2 text-gray-400 py-2'}
              nextMonth={() =>
                nextMonth(currentDate.getFullYear(), currentDate.getMonth())
              }
            />
          );
        }

        // 다음 달에서 가져온 날짜
        if (day.getMonth() > currentDate.getMonth()) {
          return (
            <PrevMonthDays
              key={index}
              day={day}
              index={index}
              className={'prevMonthDay2 text-gray-400 py-2'}
              prevMonth={() =>
                prevMonth(currentDate.getFullYear(), currentDate.getMonth())
              }
            />
          );
        }
      }

      // 이번달 중 날짜가 지난 날
      if (
        day < today &&
        day.getFullYear() === today.getFullYear() &&
        day.getMonth() === today.getMonth()
      ) {
        return (
          <CurrentMonthDays
            key={index}
            day={day}
            index={index}
            className={'prevDay py-2'}
            setProtectionDate={setProtectionDate}
            handleClick={handleClick}
          />
        );
      }

      // 오늘 날짜
      if (
        day.getFullYear() === today.getFullYear() &&
        day.getMonth() === today.getMonth() &&
        day.getDate() === today.getDate()
      ) {
        return (
          <CurrentMonthDays
            key={index}
            day={day}
            index={index}
            className={'today bg-brand-color rounded-full text-white w-8 h-8'}
            setProtectionDate={setProtectionDate}
            handleClick={handleClick}
          />
        );
      }

      // 아직 오지 않은 이번 달 날짜
      return (
        <CurrentMonthDays
          key={index}
          day={day}
          index={index}
          className={'futureDay py-2'}
          setProtectionDate={setProtectionDate}
          handleClick={handleClick}
        />
      );
    });
  };

  const divideWeek = (calendarDays: JSX.Element[]) => {
    return calendarDays.reduce(
      (acc: JSX.Element[][], cur: JSX.Element, index: number) => {
        if (index % 7 === 0) {
          acc.push([cur]);
        } else {
          acc[acc.length - 1].push(cur);
        }
        return acc;
      },
      [],
    );
  };

  const calendarDays = makeCalendar();
  const calendarTags = makeCalendarDays(calendarDays);
  const calendarRows = divideWeek(calendarTags);

  return (
    <div className="calendar border-1 min-w-[350px] min-h-[350px] max-w-[350px] max-h-[500px] shadow-lg">
      <div className="calendarNav">
        <div className="calendarNav-title flex flex-row justify-around p-4">
          <button
            className="calendarNav-arrow px-6"
            onClick={() => prevMonth(currentDate.getFullYear(), currentMonth)}
          >
            {'<'}
          </button>
          <div className="current-month-year text-2xl font-bold">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <button
            className="calendarNav-arrow px-6"
            onClick={() => nextMonth(currentDate.getFullYear(), currentMonth)}
          >
            {'>'}
          </button>
        </div>
      </div>

      <table className="flex flex-col gap-2 font-medium">
        <thead className="grid grid-cols-7 grid-rows-1">
          {dayOfWeek.map((row: string, index: number) => (
            <tr key={index} className="weeks mx-auto">
              <td>{row}</td>
            </tr>
          ))}
        </thead>
        <tbody className="h-full grid gap-2">
          {calendarRows.map((row: JSX.Element[], index: number) => (
            <tr key={index} className="text-center grid grid-cols-7">
              {row}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
