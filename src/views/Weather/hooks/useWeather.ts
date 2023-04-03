
import { ref, watch, Ref } from 'vue';

import { PERIOD_TABS } from '../../../constants/periodTabs';
import { getWeatherApi } from '../../../api/getWeather';
import { City } from '../../../@types/city';
import { WeatherInfo } from '../../../@types/weather';

type Props = {
  targetCity: Ref<City | null>;
  currentTab: Ref<PERIOD_TABS>;
};

export function useWeather({ targetCity, currentTab }: Props) {
  const weather = ref<WeatherInfo | null>(null);

  const updateWeatherOnCurrentTabChange = async () => {
    if (targetCity.value?.id) {
      const { latitude, longitude } = targetCity.value;
      weather.value = await getWeatherApi({
        latitude,
        longitude,
        period: currentTab.value,
      });
    }
  };

  const updateWeatherOnTargetCityChange = async () => {
    if (targetCity.value?.id) {
      const { latitude, longitude } = targetCity.value;
      weather.value = await getWeatherApi({
        latitude,
        longitude,
        period: currentTab.value,
      });
    } else {
      weather.value = null;
    }
  };

  watch(currentTab, updateWeatherOnCurrentTabChange);
  watch(targetCity, updateWeatherOnTargetCityChange);

  return { weather };
}