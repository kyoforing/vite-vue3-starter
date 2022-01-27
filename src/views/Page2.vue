<script setup lang="ts">
import { useStore } from 'src/store/main';
const counter = useStore();

defineProps({
  title: String
});
</script>

<template>
  <h1>Counter Page2</h1>
  <img alt="Vue logo" src="src/assets/logo.png" />
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="counter.increment">increment</button>
  <p>count is: {{ counter.count }}, double count is: {{ counter.double }}</p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
