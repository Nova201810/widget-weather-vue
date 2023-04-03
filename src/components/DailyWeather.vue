<script lang="ts">
  import { defineComponent, toRefs, Ref } from 'vue';

  import { getWindDirection } from '../helpers/weather';
  import { getTimeFromFullDate } from '../helpers/time';
  import { WeatherInfo } from 'src/@types/weather';

  export default defineComponent({
    props: {
      dailyWeather: { type: Object, required: true },
      dailyUnits: { type: Object, required: true },
      dayIndex: { type: Number, default: 0 },
    },
    setup(props) {
      const refsProps = toRefs(props);
      const dailyWeather = refsProps.dailyWeather as Ref<WeatherInfo['daily']>;
      const dailyUnits = refsProps.dailyUnits as Ref<WeatherInfo['daily_units']>;

      return ({ dailyWeather, dailyUnits, dayIndex: refsProps.dayIndex, getWindDirection, getTimeFromFullDate });
    },
  });
</script>

<template>
  <div class="d-flex justify-space-between flex-wrap">
    <v-list-item min-width="50%">
      <v-list-item-title>Температура</v-list-item-title>
      <v-list-item-subtitle>
        Минимальная: {{ dailyWeather.temperature_2m_min[dayIndex] }}{{ dailyUnits.temperature_2m_min }},
        Максимальная: {{ dailyWeather.temperature_2m_max[dayIndex] }}{{ dailyUnits.temperature_2m_max }}
      </v-list-item-subtitle>
    </v-list-item>
    <v-list-item min-width="50%">
      <v-list-item-title>Ветер</v-list-item-title>
      <v-list-item-subtitle>
        {{ getWindDirection(dailyWeather.winddirection_10m_dominant[dayIndex]) }}
        скоростью до {{ dailyWeather.windspeed_10m_max[dayIndex] }} м/с
      </v-list-item-subtitle>
    </v-list-item>
    <v-list-item min-width="50%">
      <v-list-item-title>Восход</v-list-item-title>
      <v-list-item-subtitle>{{ getTimeFromFullDate(dailyWeather.sunrise[dayIndex]) }}</v-list-item-subtitle>
    </v-list-item>
    <v-list-item min-width="50%">
      <v-list-item-title>Закат</v-list-item-title>
      <v-list-item-subtitle>{{ getTimeFromFullDate(dailyWeather.sunset[dayIndex]) }}</v-list-item-subtitle>
    </v-list-item>
  </div>
</template>