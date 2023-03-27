import { DateTime } from "luxon";

export const days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const dateNow: string = DateTime.now().toFormat('y-MM-dd');
export const actualMonth: number = Number(DateTime.now().toFormat('M'));