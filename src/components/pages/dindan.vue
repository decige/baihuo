<template>
  <div class="order-container">
    <h2>我的订单</h2>

    <!-- 没有订单时提示 -->
    <p v-if="dindan.length === 0" class="empty-order">暂无订单，请先去购物～</p>

    <!-- 订单商品列表 -->
    <ul class="order-list" v-else>
      <li v-for="product in dindan" :key="product.id" class="order-item">
        <img :src="product.imageUrl" :alt="product.name" class="product-image" />
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p>单价：{{ product.price }} 元</p><p>状态：运输中</p>
        </div>
      </li>
    </ul>

    <!-- 总价统计 -->
    <div class="total-price" v-if="dindan.length > 0">
      <strong>总计：{{ totalPrice }} 元</strong>
    </div>

    <!-- 返回购物按钮 -->
    <button class="continue-shopping-btn" @click="$router.push('/sa')">
      继续购物
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['dindan']),
    // 计算总价
    totalPrice() {
      return this.dindan.reduce((sum, item) => sum + item.price, 0);
    }
  }
}
</script>

<style scoped>
.order-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.order-list {
  list-style: none;
  padding: 0;
}

.order-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 6px;
}

.product-info h3 {
  margin: 0;
  font-size: 1.1rem;
}

.total-price {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #e74c3c;
}

.continue-shopping-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.continue-shopping-btn:hover {
  background-color: #2980b9;
}

.empty-order {
  text-align: center;
  color: #888;
  font-size: 1rem;
}
.product-info p {
  margin: 0.2rem 0;
  font-size: 0.95rem;
  color: #777;
}
</style>