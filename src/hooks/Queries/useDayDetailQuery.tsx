import { picturesApi } from '@/services/nasa/api.picture';
import { useQuery } from 'react-query';

const useDayDetailQuery = (day: string) => {
    const { isSuccess, data, isLoading, isError, error } = useQuery(
        ["day", day],
        () => picturesApi.getPicture(day),
        {
            enabled: day.length > 0,
            staleTime: Infinity
        }
    );
    return { isSuccess, data, isLoading, isError, error };
};

export default useDayDetailQuery;