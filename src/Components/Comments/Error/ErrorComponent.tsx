import styles from './CommentBox.module.scss';
import React from 'react';


const ErrorComment = () => {
    return (
        <div className={styles.comment_container} key={1}>
            <p>We have a problem fetching the previous comments</p>
        </div>
    );
};

export default ErrorComment;