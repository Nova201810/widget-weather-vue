<script lang="ts">
  import { defineComponent } from 'vue';

  import PeriodTabs from './components/PeriodTabs.vue';
  import Weather from './views/Weather/Weather.vue';

  export default defineComponent({
    components: { Weather, PeriodTabs },
  });
</script>

<template>
  <v-card
    class="mt-8 pa-8 mx-auto rounded-shaped"
    color="blue-lighten-3"
    max-width="800"
  >
    <v-card-title class="text-h4 font-weight-black pa-0">Погода</v-card-title>
    <v-card-item class="mt-6 pa-0">
      <period-tabs />
    </v-card-item>
    <v-card-item class="mt-8 pa-0">
      <weather />
    </v-card-item>
  </v-card>
</template>
