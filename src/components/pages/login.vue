<template>
  <lunbo></lunbo>
  <hr>
  <SearchProducts></SearchProducts>
  <order></order>
  <lunbo></lunbo>
</template>

<script>
import { Pagination, Autoplay } from 'swiper'; // 引入Autoplay模块
import { Swiper } from 'swiper/vue';
import { SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // 引入Autoplay样式
import order from './order.vue';
import lunbo from './lunbo.vue';
import SearchProducts from './SearchProducts.vue';

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
    lunbo,
    SearchProducts,
    
  },
}
</script>

<style scoped>
img {
  width: 100%;
  height: 250px;
  border-radius: 8px;
}
/* 强制设置 input 文字颜色 */
input {
  color: #000 !important;
}
.container {
  background-color: #de2525; /* 浅灰色背景 */
  padding: 20px;
}

</style>