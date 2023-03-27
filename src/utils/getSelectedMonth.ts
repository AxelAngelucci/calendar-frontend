import { DateTime } from 'luxon';

export const getSelectedMonth = (mes: number, anio: number): string => {
    return DateTime.fromObject({ day: 1, month: mes, year: anio }).toFormat('LLLL yyyy');
};