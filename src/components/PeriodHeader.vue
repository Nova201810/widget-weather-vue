<script lang="ts">
  import { defineComponent, toRefs } from 'vue';

  export default defineComponent({
    props: {
      cityName: { type: String, required: true },
      weatherCodeName: { type: String },
      nowTime: { type: String, required: true },
    },
    setup(props) {
      return { ...toRefs(props) };
    }
  });
</script>

<template>
  <div class="d-flex justify-space-between align-start">
      <v-card-item :title="cityName">
        <template v-if="weatherCodeName" v-slot:subtitle>
          {{ weatherCodeName }}
        </template>
      </v-card-item>
      <v-card-item :title="nowTime" />
    </div>
</template>