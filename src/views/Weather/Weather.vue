
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  import { useCity } from './hooks/useCity';
  import { useWeather } from './hooks/useWeather';
  import { useTime } from './hooks/useTime';
  import { getTabFromRoutePath } from '../../helpers/route';

  export default defineComponent({
    setup() {
      const route = useRoute();
      const currentTab = ref(getTabFromRoutePath(route.path));
      const cityParams = useCity();
      const weatherParams = useWeather({
        targetCity: cityParams.targetCity,
        currentTab,
      });
      const timeParams = useTime();

      watch(() => route.path, (newPath) => {
        currentTab.value = getTabFromRoutePath(newPath);
      });

      return { ...cityParams, ...weatherParams, ...timeParams, currentTab };
    }
  });
</script>

<template>
  <v-container class="pa-0">
    <v-combobox
      label="Введите город"
      :items="citiesList"
      variant="solo"
      :model-value="cityName"
      @update:model-value="onCityUpdate"
    />
    <v-container v-if="targetCity && weather" class="pa-0 mt-8">
      <router-view
        :key="currentTab"
        :weather="weather"
        :target-city="targetCity"
        :now-time="nowTime"
        :now-full-date="nowFullDate"
      />
    </v-container>
  </v-container>
</template>