import Link from 'next/link';
import React from 'react';
import { DateTime } from 'luxon';
import styles from './CalendarDayItem.module.scss';
import { NasaResponseI } from '@/interfaces/nasaApi';
import { isImage } from '@/utils';

interface CalendarDayItemI {
    index: number,
    actualDate: DateTime,
    startDayOfMonth: number,
    data: string[] | NasaResponseI[] | undefined
}
const CalendarDayItem = ({ index, actualDate, startDayOfMonth, data }: CalendarDayItemI) => {
    if (data?.find) {
        //@ts-ignore
        const dayData: NasaResponseI | undefined = data?.find((day: NasaResponseI) => day.date === (actualDate && actualDate.toFormat('y-MM-dd')));
        const image: String = (dayData && isImage(dayData.url)) ? dayData.url : "https://www.campana.gob.ar/wp-content/uploads/2022/05/placeholder-1.png";
        if (dayData) {
            if (!isImage(dayData.url)) {
                return (
                    <div key={index}
                        style={index === 0 ? { gridColumnStart: startDayOfMonth, backgroundImage: `url(${image})` } : { backgroundImage: `url(${image})` }}
                        className={styles.day_item} >
                        <p>{actualDate && actualDate.toFormat('d')}</p>
                    </div>
                );
            }
            return (
                <Link key={index}
                    href={`/details/${(actualDate && actualDate.toFormat('y-MM-dd'))}`}
                    style={index === 0 ? { gridColumnStart: startDayOfMonth, backgroundImage: `url(${image})` } : { backgroundImage: `url(${image})` }}
                    className={styles.day_item} >
                    <p>{actualDate && actualDate.toFormat('d')}</p>
                </Link>
            );
        }
    }
    return <></>;
};

export default CalendarDayItem;