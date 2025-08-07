<template>
  <div id="app">
    <!-- 导航栏 -->
    <router-view /> <!-- 路由内容将在这里显示 -->
  </div>
  <SpeedInsights />
</template>

<script>
import { SpeedInsights } from '@vercel/speed-insights/vue';
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>