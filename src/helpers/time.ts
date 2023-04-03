import dayjs from 'dayjs';

const FORMATS = {
  FULL_DATE: 'YYYY-MM-DDTHH:00',
  TIME: 'HH:mm',
  DATE: 'D MMM',
};

export const getNowFullDate = () => dayjs().format(FORMATS.FULL_DATE);
export const getNowTime = () => dayjs().format(FORMATS.TIME);

export const getTimeFromFullDate = (fullDate: string) => dayjs(fullDate, FORMATS.FULL_DATE).format(FORMATS.TIME);
export const getDateFromFullDate = (fullDate: string) => dayjs(fullDate, FORMATS.FULL_DATE).format(FORMATS.DATE);