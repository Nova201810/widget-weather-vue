import { ref } from 'vue';

import { getCityApi } from '../../../api/getCity';
import { City } from '../../../@types/city';

type CitiesListItem = {
  title: string;
  value: City;
};

export function useCity() {
  const citiesList = ref<CitiesListItem[]>([]);
  const cityName = ref<string>('');
  const targetCity = ref<City | null>(null);

  const onCityUpdate = async (inputValue: unknown) => {
    // Кейс ввода
    if (typeof inputValue === 'string') {
      // Сбрасываем выбранный город, если изменили инпут
      if (targetCity.value?.id) {
        targetCity.value = null;
      }

      cityName.value = inputValue;
      if (inputValue.length >= 3) {
        const cities = await getCityApi(inputValue);
        citiesList.value = cities?.map(city => ({
          title: `${city.name} [${city.country}]`,
          value: city,
        }));
      }
      return;
    }

    // Кейс выбора
    const { value: { id } } = inputValue as CitiesListItem;
    targetCity.value = citiesList.value.find(({ value }) => value.id === id)!.value;
    cityName.value = `${targetCity.value.name} [${targetCity.value.country}]`;
    citiesList.value = [];
  };

  return {
    citiesList,
    cityName,
    targetCity,
    onCityUpdate,
  };
}