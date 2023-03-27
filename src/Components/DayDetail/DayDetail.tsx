import { NasaResponseI } from '@/interfaces/nasaApi';
import styles from './DayDetail.module.scss';
import React from 'react';
import Comments from '../Comments/Comments';
import { NextRouter, useRouter } from 'next/router';
import { RiArrowLeftLine } from 'react-icons/ri';

interface DayDetaiI {
    day: NasaResponseI
}
const Detail = ({ day }: DayDetaiI) => {
    const router: NextRouter = useRouter();
    return (
        <div>
            <div className={styles.container}>
                <button style={{ position: 'absolute' }} onClick={() => router.back()}><RiArrowLeftLine /></button>
                <div className={styles.image_container}>
                    <img src={day.hdurl.toString()} alt="NASA image" />
                </div>
                <div>
                    <h1 >{day?.title}</h1>
                    <p><span>{day?.copyright} - </span>{day?.explanation}</p>
                </div>
            </div>
            <Comments date={day.date.toString()} />
        </div>
    );
};

export default Detail;