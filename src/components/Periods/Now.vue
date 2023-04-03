<script lang="ts">
  import { defineComponent, ref, toRefs, Ref, watch } from 'vue';

  import { City } from '../../@types/city';
  import { WeatherInfo } from '../../@types/weather';
  import { WEATHER_CODE_NAME } from '../../constants/weather';
  import HourlyWeather from '../HourlyWeather.vue';
  import PeriodHeader from '../PeriodHeader.vue';
  import { getWindDirection, getNowWeather } from '../../helpers/weather';

  export default defineComponent({
    props: {
      weather: { type: Object, required: true },
      targetCity: { type: Object, required: true },
      nowFullDate: { type: String, required: true },
      nowTime: { type: String, required: true },
    },
    components: {
      HourlyWeather,
      PeriodHeader,
    },
    setup(props) {
      const refsProps = toRefs(props);
      const weather = refsProps.weather as Ref<WeatherInfo>;
      const targetCity = refsProps.targetCity as Ref<City>;
      const { nowFullDate, nowTime } = refsProps;
      const nowWeather = ref(
        weather.value
         ? getNowWeather(weather.value, nowFullDate.value)
         : null
      );

      watch(weather, (newWeather) => {
        nowWeather.value = getNowWeather(newWeather, nowFullDate.value);
      });

      watch(nowFullDate, (time) => {
        nowWeather.value = getNowWeather(weather.value, time);
      });

      return {
        WEATHER_CODE_NAME,
        getWindDirection,
        nowTime,
        nowWeather,
        units: weather.value.hourly_units,
        targetCity,
      };
    },
  });
</script>

<template>
  <v-card v-if="nowWeather?.weathercode">
    <period-header 
      :city-name="targetCity.name"
      :weather-code-name="WEATHER_CODE_NAME[nowWeather.weathercode]"
      :now-time="nowTime"
    />

    <v-card variant="tonal" color="cyan-darken-4" class="text-h2 pa-4 rounded-0">
      {{ `${nowWeather.temperature_2m}${units.temperature_2m}` }}
    </v-card>

    <hourly-weather :hourly-weather="nowWeather" />
  </v-card>
</template>