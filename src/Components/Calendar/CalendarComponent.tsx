import React from 'react';
import { DateTime } from 'luxon';
import { useQuery } from 'react-query';
import useMonthSelector from '@/hooks/useMonthSelector';
import { actualMonth, days, getSelectedMonth } from '@/utils';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { LoaderComponent, CalendarDayItem } from '@/Components';
import { picturesApi } from '@/services/nasa/api.picture';
import styles from './CalendarComponent.module.scss';
import ErrorComponent from '../Error/ErrorComponent';

export const CalendarComponent = () => {
    const { selectedDate, handlePrev, handleNext, dates, firstDay } = useMonthSelector();
    const { data, status } = useQuery(['pictures', firstDay], () => picturesApi.getPictures(firstDay));

    const startDay: string = DateTime.fromObject(selectedDate).toFormat('ccc');
    const startDayOfMonth: number = days.indexOf(startDay) + 1;
    if (status === 'loading') {
        return <LoaderComponent />;
    }
    if (status === 'error') {
        return <ErrorComponent />;
    }
    return (
        <div className={styles.calendar_container}>
            <div className={styles.navigate_panel}>
                <button onClick={handlePrev} className={styles.button}><RiArrowLeftLine /></button>
                <h1>{getSelectedMonth(selectedDate.month, selectedDate.year)}</h1>
                <button onClick={handleNext} className={styles.button} disabled={selectedDate.month === DateTime.now().toObject().month && selectedDate.year === DateTime.now().toObject().year}><RiArrowRightLine /></button>
            </div>
            {
                actualMonth === selectedDate.month && <h3>We do not have images after the current date</h3>
            }
            <div className={styles.week_container}>
                {
                    days.map((day, i) => {
                        return (<div className={styles.day_of_week} key={i}>{day}</div>);
                    })
                }
            </div>

            <div className={styles.days_container}>
                {
                    dates.flatMap((_actualDate: DateTime, i: number) => {
                        if (i % 7 === 0) {
                            return Array(7).fill(null).map((_item: DateTime, index: number) => (
                                <CalendarDayItem actualDate={dates[i + index]} data={data} index={index} startDayOfMonth={startDayOfMonth} key={i + index} />
                            ));
                        }
                        return [];
                    }
                    )
                }
            </div>
        </div>
    );
};
