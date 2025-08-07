<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" @click="goToDetail(product.id)">
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">价格：{{ product.price }} 元</p>
        <p class="product-stock">库存：{{ product.stock }}</p>
        <button class="add-to-cart" @click="dindan(product)">购买</button><span>""</span>
        <button class="add-to-cart" @click="handleAddToCart(product)" :disabled="product.stock <= 0">{{ product.stock > 0 ? '加入购物车' : '已售罄' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {//注册
    ...mapState(['products', 'a', 'count'])
  },
  methods: {//方法
   ...mapActions(['addToCart','addToOrder']), // 引入 action，每写一个 action，都需要在这里注册
//    addToCart(product) 是 Vuex 的 action，不能直接在模板上调用。
// 你需要通过一个组件方法（比如 handleAddToCart）来调用这个 action。
// 所以你应该把模板中的 @click="addToCart(product)" 改成
      handleAddToCart(product) {
        alert("加入购物车成功");
         console.log('尝试添加到购物车:', product);
      this.addToCart(product); // 调用映射过来的 action 方法
    },
     dindan(product) {
        alert("购买成功");
         console.log('尝试添加订单:', product);
      this.addToOrder(product); // 调用映射过来的 action 方法
    },
    // 新增：跳转到详情页
  goToDetail(productId) {
    console.log('跳转到详情页:', productId);
    this.$router.push(`/product/detail/${productId}`);
  }
  },
  

}

</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 240px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-name {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.product-price {
  color: #e67e22;
  font-weight: bold;
}

.product-stock {
  color: #666;
  font-size: 14px;
}

.add-to-cart {
  margin-top: 10px;
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #27ae60;
}
</style>