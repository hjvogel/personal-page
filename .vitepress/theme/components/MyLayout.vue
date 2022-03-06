<template>
  <Layout>
    <template #page-top>
      <Title v-if="isPost" />
      <Category v-if="isPost" />
    </template>
    <template #navbar-search> <ToggleTheme /></template>
   
    <template #home-features> <Page /> </template>
    <template #page-bottom>   </template>
  </Layout>

  <!--Footer /-->
</template>
<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import Title from "./Title.vue";
import ToggleTheme from "./ToggleTheme.vue";
import Footer from "./Footer.vue";
import Comments from "./Comments.vue";
import Page from "./Page.vue";
import Category from "./Category.vue";
import { useData } from "vitepress";
import { computed } from "vue";
const { Layout } = DefaultTheme;
const isPost = computed(() => {
  console.log("compute");
  return useData().page.value.relativePath.indexOf("posts") > -1 ? true : false;
});
</script>
<style scoped>
</style>