import React, { useState } from 'react';

const Datepicker = () => {
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

  // 일요일 기준 0부터 시작하는 Index
  // 여기에서 더한 값을 7로 나눈 나머지가 요일이 될 듯
  const currentMonthStartDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const currentMonthEndDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );

  const prevMonthEndDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0,
  );

  const nextMonthStartDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1,
  );

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

  const prevMonth = (month: number) => {
    const prevIndex = month - 1;
    if (prevIndex < 0) {
      // 1월 이전은 12월로 넘어가야 됨
      // 날짜도 변경해야 됨
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth(prevIndex + 12);
      setCurrentDate(new Date(currentYear, prevIndex + 12));
    } else {
      setCurrentMonth(prevIndex);
      setCurrentDate(new Date(currentYear, prevIndex)); // 시작, 끝나는 요일 정하기
    }
  };
  const nextMonth = (month: number) => {
    const nextIndex = month + 1;
    if (nextIndex > 11) {
      // 12월 다음은 다음 연도 1월로 넘어가야 됨
      // 날짜도 변경해야 됨
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(nextIndex - 12);
      setCurrentDate(new Date(currentYear, nextIndex - 12));
    } else {
      setCurrentMonth(nextIndex);
      setCurrentDate(new Date(currentYear, nextIndex));
    }
  };

  const makeCalendarDays = (days: Date[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return days.map((day: Date, index: number) => {
      // 지난 달에서 가져온 날짜
      if (day.getMonth() < currentDate.getMonth()) {
        return (
          <td key={index} className="prevMonthDay text-gray-400 py-2">
            <button
              className="w-full h-full"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                const target = event.target as HTMLButtonElement;
                console.log(target.textContent);
              }}
            >
              {day.getDate()}
            </button>
          </td>
        );
      }

      // 다음 달에서 가져온 날짜
      if (day.getMonth() > currentDate.getMonth()) {
        return (
          <td key={index} className="nextMonthDay text-gray-400 py-2">
            <button
              className="w-full h-full"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                const target = event.target as HTMLButtonElement;
                console.log(target.textContent);
              }}
            >
              {day.getDate()}
            </button>
          </td>
        );
      }

      // 이번 달이 아닌 다른 달의 날짜 건들 때 사용
      // if (today.getMonth() !== currentDate.getMonth()) {
      //   return (
      //     <td key={index} className="prevMonth text-gray-400 py-2">
      //       {day.getDate()}
      //     </td>
      //   );
      // }

      // 이번달 중 날짜가 지난 날
      if (
        day < today &&
        day.getFullYear() === today.getFullYear() &&
        day.getMonth() === today.getMonth()
      ) {
        return (
          <td key={index} className="prevDay py-2">
            <button
              className="w-full h-full"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                const target = event.target as HTMLButtonElement;
                console.log(target.textContent);
              }}
            >
              {day.getDate()}
            </button>
          </td>
        );
      }

      // 오늘 날짜
      if (
        day.getFullYear() === today.getFullYear() &&
        day.getMonth() === today.getMonth() &&
        day.getDate() === today.getDate()
      ) {
        return (
          <td
            key={index}
            className="today bg-brand-color rounded-full text-white py-2"
          >
            <button
              className="w-full h-full"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                const target = event.target as HTMLButtonElement;
                console.log(target.textContent);
              }}
            >
              {day.getDate()}
            </button>
          </td>
        );
      }

      // 아직 오지 않은 이번 달 날짜
      return (
        <td key={index} className="futureDay py-2">
          <button
            className="w-full h-full"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              const target = event.target as HTMLButtonElement;
              console.log(target.textContent);
            }}
          >
            {day.getDate()}
          </button>
        </td>
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
            onClick={() => prevMonth(currentMonth)}
          >
            {'<'}
          </button>
          <div className="current-month-year text-2xl font-bold">
            {months[currentMonth]} {currentYear}
          </div>
          <button
            className="calendarNav-arrow px-6"
            onClick={() => nextMonth(currentMonth)}
          >
            {'>'}
          </button>
        </div>
      </div>

      <table className="flex flex-col gap-2 font-medium">
        <thead className="grid grid-cols-7 grid-rows-1 text-center">
          {dayOfWeek.map((row: string, index: number) => (
            <tr key={index} className="weeks">
              {row}
            </tr>
          ))}
        </thead>
        <tbody className="h-full grid gap-2">
          {calendarRows.map((row: JSX.Element[], index: number) => (
            <tr key={index} className="text-center grid grid-cols-7 gap-2">
              {row}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datepicker;
