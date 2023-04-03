import { NowWeather, WeatherInfo } from '../@types/weather';
import { WIND_DIRECTIONS } from '../constants/weather';

export const getNowWeather = (weather: WeatherInfo, nowTime: string) => {
  const hourlyWeather = (weather as WeatherInfo).hourly;
  const hourlyWeatherIndex = hourlyWeather.time.indexOf(nowTime);

  return Object.entries(hourlyWeather).reduce((result, [key, values]) => ({
    ...result,
    [key]: values[hourlyWeatherIndex],
  }), {} as NowWeather);
};

export const getWindDirection = (directionInDegrees: number) => {
  if (directionInDegrees >= 22.5 && directionInDegrees < 67.5) {
    return WIND_DIRECTIONS.NORTH_WEST;
  } else if (directionInDegrees >= 67.5 && directionInDegrees < 112.5) {
    return WIND_DIRECTIONS.WEST;
  } else if (directionInDegrees >= 112.5 && directionInDegrees < 157.5) {
    return WIND_DIRECTIONS.SOUTH_WEST;
  } else if (directionInDegrees >= 157.5 && directionInDegrees < 202.5) {
    return WIND_DIRECTIONS.SOUTH;
  } else if (directionInDegrees >= 202.5 && directionInDegrees < 247.5) {
    return WIND_DIRECTIONS.SOUTH_EAST;
  } else if (directionInDegrees >= 247.5 && directionInDegrees < 292.5) {
    return WIND_DIRECTIONS.EAST;
  } else if (directionInDegrees >= 292.5 && directionInDegrees < 337.5) {
    return WIND_DIRECTIONS.NORTH_EAST;
  }
  return WIND_DIRECTIONS.NORTH;
};