export enum WeatherCode {
  ClearSky = 0,
  MainlyClear = 1,
  PartlyCloudy = 2,
  Overcast = 3,
  Fog = 45,
  DepositingRimeFog = 48,
  DrizzleLight = 51,
  DrizzleModerate = 53,
  DrizzleDense = 55,
  FreezingDrizzleLight = 56,
  FreezingDrizzleDense = 57,
  RainSlight = 61,
  RainModerate = 63,
  RainHeavy = 65,
  FreezingRainLight = 66,
  FreezingRainHeavy = 67,
  SnowFallSlight = 71,
  SnowFallModerate = 73,
  SnowFallHeavy = 75,
  SnowGrains = 77,
  RainShowerSlight = 80,
  RainShowerModerate = 81,
  RainShowerViolent = 82,
  SnowShowerSlight = 85,
  SnowShowerHeavy = 86,
  ThunderstormSlight = 95,
  ThunderstormSlightHail = 96,
  ThunderstormHeavyHail = 99,
}

export type NowWeather = {
  time: string;
  temperature_2m: number;
  relativehumidity_2m: number;
  weathercode: WeatherCode;
  surface_pressure: number;
  windspeed_10m: number;
  winddirection_10m: number;
};

/**
 * latitude: широта;  
 * longitude: долгота;  
 * utc_offset_seconds: сдвиг от UTC (с);  
 * timezone: часовой пояс;  
 * timezone_abbreviation: аббревиатура часового пояса;  
 * elevation: высота (м); 
 */
type BaseWeatherAttrs = {
  latitude: number;
  longitude: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: 152;
};

/**
 * @param hourly_units - почасовые единицы измерения   
 * @param hourly - почасовые параметры
 * @public     
 * {   
 *   time: время;  
 *   temperature_2m: температура;  
 *   relativehumidity_2m: относительная влажность;  
 *   weathercode: погодный код;  
 *   surface_pressure: давление;  
 *   windspeed_10m: скорость ветра;  
 *   winddirection_10m: направление ветра;   
 * }  
 */
type HourlyWeatherAttr = {
  hourly_units: {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    weathercode: string;
    surface_pressure: string;
    windspeed_10m: string;
    winddirection_10m: string;
  },
  hourly: {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    weathercode: WeatherCode[];
    surface_pressure: number[];
    windspeed_10m: number[];
    winddirection_10m: number[];
  },
};

/**
 * @param daily_units - ежедневные единицы измерения   
 * @param daily - ежедневные параметры   
 * @public
 * {   
 *  time: время;  
 *  weathercode: погодный код;  
 *  temperature_2m_max: максимальная температура;  
 *  temperature_2m_min: минимальная температура;  
 *  sunrise: восход;    
 *  sunset: закат;    
 *  windspeed_10m_max: максимальная скорость ветра;   
 *  winddirection_10m_dominant: доминантное направление ветра;  
 * }  
 */
type DailyWeatherAttr = {
  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    sunrise: string;
    sunset: string;
    windspeed_10m_max: string;
    winddirection_10m_dominant: string;
  },
  daily: {
    time: string[];
    weathercode: WeatherCode[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    windspeed_10m_max: number[];
    winddirection_10m_dominant: number [];
}
};

export type WeatherInfo = BaseWeatherAttrs & HourlyWeatherAttr & DailyWeatherAttr;