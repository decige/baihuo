<template>
  <div class="product-detail">
    <div v-if="product" class="product-card">
      <img :src="product.imageUrl" :alt="product.name" class="product-image">
      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="product-price">价格：{{ product.price }} 元</p>
        <p class="product-stock">库存：{{ product.stock }}</p>
        <button class="add-to-cart" @click="handleAddToCart(product)">加入购物车</button>
        <button class="add-to-cart" @click="dindan(product)">立即购买</button>
      </div>
    </div>
    <div v-else>
      商品不存在或加载失败。
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      productId: this.$route.params.id
    };
  },
  computed: {
    ...mapState(['products']),
    product() {
      return this.products.find(p => p.id == this.productId); // 注意 == 是为了类型转换
    }
  },
  methods: {
    ...mapActions(['addToCart', 'addToOrder']),
    handleAddToCart(product) {
      this.addToCart(product);
    },
    dindan(product) {
      this.addToOrder(product);
    }
  }
};
</script>

<style scoped>
/* 和商品列表样式类似，可以复用或简化 */
.product-detail {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.product-info {
  margin-top: 15px;
}

.add-to-cart {
  margin-right: 10px;
}
button {
  color: #000 !important;
}
p  {
  
  color: #000 !important;
}
</style>