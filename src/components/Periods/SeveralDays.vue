<script lang="ts">
  import { defineComponent, toRefs, ref, Ref } from 'vue';

  import { WeatherInfo } from '../../@types/weather';
  import PeriodHeader from '../PeriodHeader.vue';
  import DailyWeather from '../DailyWeather.vue';
  import SlideGroup from '../SlideGroup.vue';
  import { City } from '../../@types/city';

  export default defineComponent({
    props: {
      weather: { type: Object, required: true },
      targetCity: { type: Object, required: true },
      nowTime: { type: String, required: true },
    },
    components: {
      PeriodHeader,
      DailyWeather,
      SlideGroup,
    },
    setup(props) {
      const refsProps = toRefs(props);
      const targetCity = refsProps.targetCity as Ref<City>;
      const weather = refsProps.weather as Ref<WeatherInfo>;
      const { nowTime } = refsProps;
      // @ts-expect-error
      const sliderValue = ref(null) as Ref<number>;

      return {
        targetCity,
        weather,
        nowTime,
        sliderValue,
      };
    },
  });
</script>

<template>
  <v-card v-if="weather">
    <period-header
      :city-name="targetCity.name"
      :now-time="nowTime"
    />
    <v-card-item>
      <slide-group
        type="daily"
        v-model="sliderValue"
        :weather="weather"
      >
        <div class="py-4">
          <daily-weather
            :daily-weather="weather.daily"
            :daily-units="weather.daily_units"
            :day-index="sliderValue"
          />
        </div>
      </slide-group>
    </v-card-item>
  </v-card>
</template>