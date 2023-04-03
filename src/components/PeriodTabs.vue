<script lang="ts">
  import { defineComponent } from 'vue';

  import { PERIOD_TABS, PERIOD_TABS_NAMES } from '../constants/periodTabs';

  export default defineComponent({
    setup() {
      return ({
        PERIOD_TABS,
        PERIOD_TABS_NAMES,
      });
    },
  });
</script>

<template>
  <v-tabs
    role="menu"
    class="rounded-xl"
    align-tabs="center"
    bg-color="white"
    color="blue-darken-4"
    grow
  >
    <v-tab
      v-for="tab in PERIOD_TABS"
      :key="tab"
      :to="`/${tab}`"
    >
      {{PERIOD_TABS_NAMES[tab]}}
    </v-tab>
  </v-tabs>
</template>