<template>
    <a-layout>
      <a-layout-header class="header" >
        <CommonHeader />
      </a-layout-header>
      <a-layout-content>
        <a-layout>
          <a-layout-sider width="" style="background: #ccc;">
            <CommonSider />
          </a-layout-sider>
          <a-layout-content :style="{ background: '#666' }">
            <CommonContent />
          </a-layout-content>
        </a-layout>
      </a-layout-content>
      <!-- <a-layout-footer style="text-align: center">
        <CommonFooter />
      </a-layout-footer> -->
    </a-layout>
  </template>
  
  <script setup>
   import CommonHeader from './pages/CommonHeader.vue'
   import CommonSider from './pages/CommonSider.vue'
   import CommonFooter from './pages/CommonFooter.vue'
   import CommonContent from './pages/CommonContent.vue'
  </script>
  
  <style>
  body #app {
    width: 100%;
    height: 100%;
    color: #fff;
  }
  #app {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
  .ant-layout {
    height: 100%;
    width: 100%;
  }
  </style>
  