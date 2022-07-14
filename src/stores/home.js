import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHomeStore = defineStore('home', () => {
  const counter = ref(0);
  const name = ref('Moon Knight');

  const setName = () => {
    name.value = 'Khonshu';
  };

  return {
    counter,
    name,
    setName,
  };
});
