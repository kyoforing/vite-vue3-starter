import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useStore = defineStore('main', () => {
  const count = ref(0);
  const double = computed(() => count.value * 2);
  const increment = () => count.value++;

  return {
    count,
    double,
    increment
  };
});
