import { DateTime } from 'luxon';

export const generateMonthDays = (month: number, year: number): DateTime[] => {
    const days: DateTime[] = [];
    const initMonth: DateTime = DateTime.fromObject({ day: 1, month, year });
    const monthEnd: DateTime = initMonth.endOf('month');

    for (let i = 0; i < monthEnd.day; i++) {
        const day: DateTime = initMonth.plus({ days: i });
        days.push(day);
    }
    return days;
};