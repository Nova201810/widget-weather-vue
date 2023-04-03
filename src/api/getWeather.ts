import dayjs from 'dayjs';

import { getUrlWithQuery } from '../helpers/api';
import { WeatherInfo } from '../@types/weather';
import { PERIOD_TABS, PERIOD_FORECAST_DAYS } from '../constants/periodTabs';

type WeatherQuery = {
  latitude: number;     // широта
  longitude: number;    // долгота
  period: PERIOD_TABS;  // период
};

type WeatherPeriod = {
  start_date: string;    // начальный период прогноза погоды
  end_date: string;      // конечный период прогноза погоды
};

const internalQuery = {
  // почасовые погодные переменные
  hourly: [
    'temperature_2m',      // температура
    'relativehumidity_2m', // относительная влажность
    'weathercode',         // погодный код
    'surface_pressure',    // поверхностное давление
    'windspeed_10m',       // скорость ветра
    'winddirection_10m',   // направление ветра
  ],
  // ежедневные погодные переменные
  daily: [
    'weathercode',                // погодный код
    'temperature_2m_max',         // максимальная температура
    'temperature_2m_min',         // минимальная температура
    'sunrise',                    // восход солнца
    'sunset',                     // закат солнца
    'windspeed_10m_max',          // максимальная скорость ветра
    'winddirection_10m_dominant', // доминирующее направление ветра
  ],
  windspeed_unit: 'ms',      // единица измерения скорости ветра
  timezone: 'Europe/Moscow', // часовой пояс
};

export const getWeatherApi = async ({ period, ...externalQuery }: WeatherQuery): Promise<WeatherInfo> => {
  const today = dayjs();
  const tomorrow = today.add(1, 'day');
  const startDate = period === PERIOD_TABS.TOMORROW ? tomorrow : today;
  const endDate = startDate.add(PERIOD_FORECAST_DAYS[period], 'day');
  const dateFormat = 'YYYY-MM-DD';
  const weatherPeriod = {
    start_date: startDate.format(dateFormat),
    end_date: endDate.format(dateFormat)
  } as WeatherPeriod;
  const url = getUrlWithQuery(
    'https://api.open-meteo.com/v1/forecast',
    { ...externalQuery, ...weatherPeriod, ...internalQuery },
  );
  const response = await fetch(url);
  return await response.json();
};