<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onMounted } from "vue";
// import { useData } from "vitepress";
// const relativePath = useData().page.value.relativePath;

const gitalk = new Gitalk({
  clientID: "1",
  clientSecret: "1",
  repo: "blog-comments",
  owner: "johndoe",
  admin: ["johndoe"],
  id: decodeURI(window.location.pathname), // Ensure uniqueness and length less than 50
  language: "us-EN",
  distractionFreeMode: true, // Facebook-like distraction free mode
});
onMounted(() => {
  gitalk.render("gitalk-container");
});
</script>
<style scoped>
</style>

