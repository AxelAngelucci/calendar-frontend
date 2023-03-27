import { CommentsResponseI } from '@/interfaces/commentsApi';
import styles from './CommentBox.module.scss';
import React from 'react';

interface CommentBoxI {
    comment: CommentsResponseI;
    i: number;
}
const CommentBox = ({ comment, i }: CommentBoxI) => {
    return (
        <div className={styles.comment_container} key={i}>
            <p>{comment.comment}</p>
            <div><p>{comment.name}</p> - <p>{comment.actualDate}</p></div>
        </div>
    );
};

export default CommentBox;