import React from 'react';
import styles from './Comments.module.scss';
import useComments from '@/hooks/useComments';
import CommentBox from './CommentBox/CommentBox';
import ErrorComment from './Error/ErrorComponent';

interface CommentsI {
    date: string
}
const Comments = ({ date }: CommentsI) => {
    const { data, isLoading, handleMessageChange, handleNameChange, handleSubmit, newComment, isError } = useComments(date);
    return (
        <div className={styles.container}>
            {
                isError ? <ErrorComment /> : data?.map((comment, i) => {
                    return (
                        <CommentBox comment={comment} i={i} key={i} />
                    );
                })
            }
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name' onChange={handleNameChange} name='name' value={newComment.name} />
                <textarea placeholder='Your comment' onChange={handleMessageChange} name='comment' value={newComment.comment} />
                <button type="submit">{isLoading ? "Sending..." : "Send Comment"}</button>
            </form>
        </div>
    );
};

export default Comments;