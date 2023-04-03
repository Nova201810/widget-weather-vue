<script lang="ts">
  import { defineComponent, toRefs, Ref } from 'vue';

  import { NowWeather } from '../@types/weather';
  import { getWindDirection } from '../helpers/weather';

  export default defineComponent({
    props: {
      hourlyWeather: { type: Object, required: true },
    },
    setup(props) {
      const refsProps = toRefs(props);
      const hourlyWeather = refsProps.hourlyWeather as Ref<Omit<NowWeather, 'time' | 'temperature_2m' | 'weathercode'>>;

      return { hourlyWeather, getWindDirection };
    },
  });
</script>

<template>
  <div class="d-flex flex-wrap justify-space-between py-4">
    <v-list-item density="compact" title="Скорость ветра">
      <v-list-item-subtitle>{{ `${hourlyWeather.windspeed_10m} м/с` }}</v-list-item-subtitle>
    </v-list-item>
    <v-list-item density="compact" title="Направление ветра">
      <v-list-item-subtitle>{{ `${getWindDirection(hourlyWeather.winddirection_10m)}` }}</v-list-item-subtitle>
    </v-list-item>
    <v-list-item density="compact" title="Влажность">
      <v-list-item-subtitle>{{ `${hourlyWeather.relativehumidity_2m}%` }}</v-list-item-subtitle>
    </v-list-item>
    <v-list-item density="compact" title="Атмосферное давление">
      <v-list-item-subtitle>{{ `${Math.round(hourlyWeather.surface_pressure * 0.7501)} мм рт. ст.` }}</v-list-item-subtitle>
    </v-list-item>
  </div>
</template>