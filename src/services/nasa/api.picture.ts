import { NasaResponseI } from "@/interfaces/nasaApi";
import { dateNow } from "@/utils";

export const picturesApi = {
    getPicture: async (date: string | string[] | undefined): Promise<NasaResponseI> => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_NASA_API}&date=${date}`);
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        } catch (error) {
            throw new Error;
        }
    },
    getPictures: async (firstDay: string, endDate: string = dateNow): Promise<NasaResponseI[] | string[]> => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_NASA_API}&start_date=${firstDay}&end_date=${endDate}`);
            return res.json();
        } catch (error) {
            throw new Error;
        }
    }
};