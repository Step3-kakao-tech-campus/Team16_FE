import { useEffect, useState } from 'react';

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
  ).getDay();

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

  useEffect(() => {
    console.log(makeCalendar());
  }, []);

  return (
    <div className="calendar border-1 w-[500px] h-[500px] shadow-lg">
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
      <div className="calendarDate">
        <table className="flex flex-col">
          <thead>
            <tr className="weeks flex justify-around"></tr>
          </thead>
          <tbody>
            <tr>날짜</tr>
            <tr>{currentMonthStartDate}</tr>
            <tr>{currentMonthEndDate}</tr>

            {/* 7개 단위로 날짜 보여주도록 해야 됨 */}
            <tr className="days flex justify-around"></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Datepicker;
