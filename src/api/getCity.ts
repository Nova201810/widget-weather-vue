import { getUrlWithQuery } from '../helpers/api';
import { City } from '../@types/city';

export const getCityApi = async (city: string): Promise<City[]> => {
  const url = getUrlWithQuery('https://geocoding-api.open-meteo.com/v1/search', { name: city });
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};