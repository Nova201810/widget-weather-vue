<script lang="ts">
  import { defineComponent, toRefs, ref, Ref } from 'vue';

  import { City } from '../../@types/city';
  import { WeatherInfo } from '../../@types/weather';
  import { WEATHER_CODE_NAME } from '../../constants/weather';
  import { getWindDirection } from '../../helpers/weather';
  import { getTimeFromFullDate } from '../../helpers/time';
  import HourlyWeather from '../HourlyWeather.vue';
  import PeriodHeader from '../PeriodHeader.vue';
  import DailyWeather from '../DailyWeather.vue';
  import SlideGroup from '../SlideGroup.vue';

  export default defineComponent({
    props: {
      weather: { type: Object, required: true },
      targetCity: { type: Object, required: true },
      nowTime: { type: String, required: true },
    },
    components: {
      HourlyWeather,
      PeriodHeader,
      DailyWeather,
      SlideGroup,
    },
    setup(props) {
      const refsProps = toRefs(props);
      const weather = refsProps.weather as Ref<WeatherInfo>;
      const targetCity = refsProps.targetCity as Ref<City>;
      const { nowTime } = refsProps;
      // @ts-expect-error
      const sliderValue = ref(null) as Ref<number>;

      return {
        WEATHER_CODE_NAME,
        getWindDirection,
        getTimeFromFullDate,
        nowTime,
        weather,
        units: weather.value.hourly_units,
        targetCity,
        sliderValue,
      };
    },
  });
</script>

<template>
  <v-card v-if="weather">
    <period-header
      :city-name="targetCity.name"
      :weather-code-name="WEATHER_CODE_NAME[weather.daily.weathercode[0]]"
      :now-time="nowTime"
    />
    <v-card-item>
      <slide-group
        type="hourly"
        v-model="sliderValue"
        :weather="weather"
      >
        <hourly-weather
          :hourly-weather="{
            relativehumidity_2m: weather.hourly.relativehumidity_2m[sliderValue],
            surface_pressure: weather.hourly.surface_pressure[sliderValue],
            windspeed_10m: weather.hourly.windspeed_10m[sliderValue],
            winddirection_10m: weather.hourly.winddirection_10m[sliderValue],
          }"
        />
      </slide-group>
    </v-card-item>
    <div class="pb-4">
      <daily-weather :daily-weather="weather.daily" :daily-units="weather.daily_units" />
    </div>
  </v-card>
</template>