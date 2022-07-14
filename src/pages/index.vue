<script setup>
import { useCounterStore } from '@/stores/counter.js';
const store = useCounterStore();
console.log(store);
</script>

<template>
  <main>
    <TheWelcome />
    <h1>{{ store.name }}</h1>
    <button @click="store.setName">Click</button>
  </main>
</template>
