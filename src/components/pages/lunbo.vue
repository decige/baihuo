<template>
  <!-- 添加了:autoplay="{delay: 3000, disableOnInteraction: false}"实现自动切换 -->
  <swiper :modules="modules" :pagination="{clickable: true}" :autoplay="{delay: 2000, disableOnInteraction: false}">
    <swiper-slide><img src="../../assets/lunbo001.jpg" alt="登录界面示例图"></swiper-slide>
    <swiper-slide><img src="../../assets/lunbo002.jpg" alt="产品展示图"></swiper-slide>
    <swiper-slide><img src="../../assets/lunbo003.jpg" alt="登录界面示例图"></swiper-slide>
    <swiper-slide><img src="../../assets/lunbo004.jpg" alt="产品展示图"></swiper-slide>
    <swiper-slide><img src="../../assets/lunbo005.jpg" alt="产品展示图"></swiper-slide>
  </swiper>
  
</template>

<script>
import { Pagination, Autoplay } from 'swiper'; // 引入Autoplay模块
import { Swiper } from 'swiper/vue';
import { SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // 引入Autoplay样式
import order from './order.vue';

export default {
  name: 'lubo',
  data() {
    return {
      // 添加Autoplay到modules数组
      modules: [Pagination, Autoplay],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    // 注意：Pagination是模块不是组件，这里不需要注册
    // 原代码中注册Pagination组件是错误的，已移除
    order,
  },
}
</script>

<style scoped>
img {
  width: 100%;
  height: 250px;
  border-radius: 8px;
}
</style>