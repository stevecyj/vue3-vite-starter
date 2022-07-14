<script setup>
import { useCounterStore } from '@/stores/counter.js';
const store = useCounterStore();
</script>

<template>
  <main>
    <TheWelcome />
    <h1>{{ store.name }}</h1>
  </main>
</template>
