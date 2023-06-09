import { WeatherCode } from '../@types/weather';

export const WEATHER_CODE_NAME: Record<WeatherCode, string> = {
  [WeatherCode.ClearSky]: 'Ясно',
  [WeatherCode.MainlyClear]: 'Малооблачно',
  [WeatherCode.PartlyCloudy]: 'Облачно',
  [WeatherCode.Overcast]: 'Пасмурно',
  [WeatherCode.Fog]: 'Туман',
  [WeatherCode.DepositingRimeFog]: 'Туман с отложением твердого осадка',
  [WeatherCode.DrizzleLight]: 'Слабая морось',
  [WeatherCode.DrizzleModerate]: 'Морось',
  [WeatherCode.DrizzleDense]: 'Интенсивная морось',
  [WeatherCode.FreezingDrizzleLight]: 'Слабый моросящий дождь',
  [WeatherCode.FreezingDrizzleDense]: 'Интенсивный моросящий дождь',
  [WeatherCode.RainSlight]: 'Слабый дождь',
  [WeatherCode.RainModerate]: 'Дождь',
  [WeatherCode.RainHeavy]: 'Интенсивный дождь',
  [WeatherCode.FreezingRainLight]: 'Слабый дождь, образующий гололед',
  [WeatherCode.FreezingRainHeavy]: 'Интенсивный дождь, образующий гололед',
  [WeatherCode.SnowFallSlight]: 'Небольшой снегопад',
  [WeatherCode.SnowFallModerate]: 'Снегопад',
  [WeatherCode.SnowFallHeavy]: 'Сильный снегопад',
  [WeatherCode.SnowGrains]: 'Снежные зерна',
  [WeatherCode.RainShowerSlight]: 'Небольшой ливневый дождь',
  [WeatherCode.RainShowerModerate]: 'Ливневый дождь',
  [WeatherCode.RainShowerViolent]: 'Интенсивный ливневый дождь',
  [WeatherCode.SnowShowerSlight]: 'Слабый ливневый снег',
  [WeatherCode.SnowShowerHeavy]: 'Интенсивный ливневый снег',
  [WeatherCode.ThunderstormSlight]: 'Гроза',
  [WeatherCode.ThunderstormSlightHail]: 'Гроза с градом',
  [WeatherCode.ThunderstormHeavyHail]: 'Сильная гроза с градом',
};

export const WIND_DIRECTIONS = {
  NORTH: 'Северный',
  NORTH_WEST: 'Северо-западный',
  WEST: 'Западный',
  SOUTH_WEST: 'Юго-западный',
  SOUTH: 'Южный',
  SOUTH_EAST: 'Юго-восточный',
  EAST: 'Восточный',
  NORTH_EAST: 'Северо-восточный',
};