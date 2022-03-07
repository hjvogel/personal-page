<template>
  <div class="toggleTheme" @click="toggle">
    <div class="light" v-if="isLight">🔆</div>
    <div class="dark" v-else>🌙</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
let isLight = ref(true);
const toggle = () => {
  const html = document.querySelector("html")!;
  html.classList.toggle("dark");
  isLight.value = !isLight.value;
};
</script>
<style scoped>
.toggleTheme {
  display: flex;
  cursor: pointer;
  width: 22px;
  margin-left: 15px;
}
</style>