<script lang="ts">
  import { WeatherInfo } from 'src/@types/weather';
  import { defineComponent, toRefs, Ref } from 'vue';

  import { getTimeFromFullDate, getDateFromFullDate } from '../helpers/time';
  import { WEATHER_CODE_NAME } from '../constants/weather';

  export default defineComponent({
    props: {
      modelValue: { type: Number, required: true },
      weather: { type: Object, required: true },
      type: { type: String, required: true },
    },
    emits: ['update:modelValue'],
    setup(props) {
      const refsProps = toRefs(props);
      const weather = refsProps.weather as Ref<WeatherInfo>;
      const type = refsProps.type as Ref<'hourly' | 'daily'>;
      return {
        modelValue: refsProps.modelValue,
        "onUpdate:modelValue": refsProps['onUpdate:modelValue'],
        weather,
        type,
        getTimeFromFullDate,
        getDateFromFullDate,
        WEATHER_CODE_NAME,
      };
    },
  });
</script>

<template>
  <v-slide-group
    :value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    center-active
  >
    <v-slide-group-item
      v-for="(value, index) in weather[type].time"
      :key="value"
      v-slot="{ isSelected, select }"
    >
      <v-card
        variant="tonal"
        :color="isSelected ? 'cyan-darken-4' : 'blue-darken-1'"
        :class="`${index === 0 ? 'ml-0' : 'ml-6'} rounded-lg pa-2 d-flex flex-column justify-space-between`"
        height="140"
        width="140"
        @click="() => { select(true); }"
      >
        <v-card-title
          :class="`text-center ${isSelected ? 'font-weight-black' : 'font-weight-regular'}`"
        >
          {{ type === 'hourly' ? getTimeFromFullDate(weather[type].time[index]) : getDateFromFullDate(weather[type].time[index]) }}
        </v-card-title>
        <v-card-subtitle
          :class="`text-center text-wrap ${isSelected ? 'font-weight-black' : 'font-weight-regular'}`"
        >
          {{ WEATHER_CODE_NAME[weather[type].weathercode[index]] }}
        </v-card-subtitle>
        <v-card-subtitle
          :class="`
            text-center
            text-wrap
            text-h6
            ${isSelected ? 'font-weight-black' : 'font-weight-regular'}
          `"
        >
          {{
            type === 'hourly'
              ? `${weather.hourly.temperature_2m[index]}${weather.hourly_units.temperature_2m}`
              : `${(weather.daily.temperature_2m_min[index] + weather.daily.temperature_2m_max[index]) / 2}${weather.daily_units.temperature_2m_max}`
          }}
        </v-card-subtitle>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
  <v-card
    v-if="modelValue !== null"
    variant="tonal"
    color="cyan-darken-4"
    class="my-4"
  >
    <slot></slot>
  </v-card>
</template>