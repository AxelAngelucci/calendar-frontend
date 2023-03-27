import { CommentsRequestI } from '@/interfaces/commentsApi';
import React, { useState } from 'react';
import useCommentsQuery from './Queries/useCommentsQuery';
import { dateNow } from '@/utils';


const useComments = (date: string) => {
    const [newComment, setNewComment] = useState<CommentsRequestI>({ name: "", comment: "", actualDate: dateNow });
    const { mutate, isSuccess, data, isError, error, isLoading, } = useCommentsQuery({ date, newComment });

    const handleNameChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setNewComment({ ...newComment, name: e.currentTarget.value, actualDate: dateNow });
    };
    const handleMessageChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        setNewComment({ ...newComment, comment: e.currentTarget.value, actualDate: dateNow });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        mutate();
        setNewComment({ name: "", comment: "", actualDate: dateNow });
    };
    return { handleMessageChange, handleNameChange, handleSubmit, isSuccess, data, isError, error, isLoading, newComment };
};

export default useComments;