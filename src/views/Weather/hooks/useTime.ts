import { ref, onMounted, onUnmounted } from 'vue';

import { getNowFullDate, getNowTime } from '../../../helpers/time';

export function useTime() {
  const interval = ref<NodeJS.Timer | null>(null);
  const nowFullDate = ref(getNowFullDate());
  const nowTime = ref(getNowTime());

  onMounted(() => {
    interval.value = setInterval(() => {
      nowTime.value = getNowTime();
      nowFullDate.value = getNowFullDate();
    }, 1000);
  })

  onUnmounted(() => {
    if (interval.value) {
      clearInterval(interval.value);
    }
  })

  return {
    nowTime,
    nowFullDate,
  };
}