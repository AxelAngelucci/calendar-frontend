import React from 'react';
import { NextRouter, useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient, dehydrate } from 'react-query';
import { picturesApi } from '@/services/nasa/api.picture';
import { Detail, LoaderComponent } from '@/Components';
import useDayDetailQuery from '@/hooks/Queries/useDayDetailQuery';

const DayDetail = () => {
    const router: NextRouter = useRouter();
    const day: string = typeof router.query?.day === "string" ? router.query.day : "";
    const { isSuccess, data, isLoading, isError } = useDayDetailQuery(day);
    if (isSuccess) {
        return (
            //@ts-ignore
            <Detail day={data} />
        );
    }
    if (isLoading) {
        return <LoaderComponent />;
    }
    if (isError) {
        return router.push("/404");
    }
    return (
        <></>
    );

};

export const getStaticProps: GetStaticProps = async (context) => {
    const day: string = context.params?.day as string;
    const queryClient: QueryClient = new QueryClient();
    await queryClient.prefetchQuery(["getPicture", day], () => picturesApi.getPicture(day));

    return {
        props: { dehydratedState: dehydrate(queryClient) }
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    };
};
export default DayDetail;