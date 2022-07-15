import { defineStore } from 'pinia';

const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    name: 'anya',
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter += 1;
    },
    setName() {
      this.name = 'Forger';
    },
  },
});
export default useCounterStore;
