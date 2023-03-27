import { CommentsRequestI } from '@/interfaces/commentsApi';
import { commentsApi } from '@/services/comments/api.comments';
import axios from 'axios';
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';

interface useCommentsQueryI {
    date: string,
    newComment: CommentsRequestI
}
const useCommentsQuery = ({ date, newComment }: useCommentsQueryI) => {
    //GET ALL COMMENTS FROM BACKEND
    const queryClient: QueryClient = useQueryClient();
    const { isSuccess, data, isError } = useQuery(
        ["comments", date],
        () => commentsApi.getComments(date),
        {
            enabled: date.length > 0,
            staleTime: Infinity
        }
    );

    //POST A NEW COMMENT
    const { mutate, error, isLoading } = useMutation(() => axios.post(`${process.env.NEXT_PUBLIC_COMMENTS_API}${date}`, newComment), {
        onSuccess: () => {
            queryClient.invalidateQueries("comments");
        }
    });
    return { isSuccess, data, isError, mutate, error, isLoading };
};

export default useCommentsQuery;