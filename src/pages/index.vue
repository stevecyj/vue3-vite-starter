<script setup>
import { useCounterStore } from '@/stores/counter.js';
import { useHomeStore } from '@/stores/home.js';
import { storeToRefs } from 'pinia';

const store = useHomeStore();
const { name } = storeToRefs(store);
const { setName } = store;
// console.log(store);
</script>

<template>
  <main>
    <TheWelcome />
    <h1>{{ name }}</h1>
    <button @click="setName">Click</button>
  </main>
</template>
