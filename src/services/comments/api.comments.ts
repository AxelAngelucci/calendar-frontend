import { CommentsResponseI } from "@/interfaces/commentsApi";


export const commentsApi = {
    getComments: async (date: string): Promise<CommentsResponseI[]> => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_COMMENTS_API}${date}`);
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        } catch (error) {
            throw new Error;
        }
    },
};