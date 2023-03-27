import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { generateMonthDays } from '@/utils/generateMonthDays';


export const useMonthSelector = () => {

    const [selectedDate, setSelectedDate] = useState({ month: DateTime.now().get('month'), year: DateTime.now().get('year') });
    let dates: DateTime[] = generateMonthDays(selectedDate.month, selectedDate.year);
    const [firstDay, setFirstDay] = useState<string>(dates[0].toFormat('y-MM-dd'));
    useEffect(() => {
        dates = generateMonthDays(selectedDate.month, selectedDate.year);
        setFirstDay(dates[0].toFormat('y-MM-dd'));
    }, [selectedDate]);

    const handlePrev = (): void => {
        if (selectedDate.month > 1) setSelectedDate({ ...selectedDate, month: selectedDate.month - 1 });
        if (selectedDate.month === 1) setSelectedDate({ ...selectedDate, month: 12, year: selectedDate.year - 1 });
    };
    const handleNext = (): void => {
        if (selectedDate.month < 12) setSelectedDate({ ...selectedDate, month: selectedDate.month + 1 });
        if (selectedDate.month === 12) setSelectedDate({ ...selectedDate, month: 1, year: selectedDate.year + 1 });
    };

    return { selectedDate, setSelectedDate, handlePrev, handleNext, dates, firstDay };
};

export default useMonthSelector;