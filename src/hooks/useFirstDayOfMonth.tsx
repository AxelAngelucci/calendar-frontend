import { useState } from 'react';
import useMonthSelector from './useMonthSelector';
import { DateTime } from 'luxon';
import { days } from '@/utils/constants';

interface UseFirstDayOfMonthI {
    startDayOfMonth: number;
}
const useFirstDayOfMonth = (): UseFirstDayOfMonthI => {
    const { selectedDate } = useMonthSelector();
    const [startDayOfMonth, setStartDayOfMonth] = useState<number>(0);
    const getFirstDayOfMonth = (): void => {
        const firstDay: string = DateTime.fromObject(selectedDate).toFormat('ccc');
        const startDay: number = days.indexOf(firstDay) + 1;
        setStartDayOfMonth(startDay);
    };
    getFirstDayOfMonth();
    return { startDayOfMonth };
};

export default useFirstDayOfMonth;