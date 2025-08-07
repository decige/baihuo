<template>
  <div class="cart-container">
    <h2>我的购物车</h2>

    <!-- 购物车为空时提示 -->
    <p v-if="cart.length === 0" class="empty-cart">购物车是空的哦～快去添加商品吧！</p>

    <!-- 购物车商品列表 -->
    <ul class="cart-list">
      <li v-for="product in cart" :key="product.id" class="cart-item">
        <img :src="product.imageUrl" :alt="product.name" class="product-image" />
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p>单价：{{ product.price }} 元</p>
          <p>数量：1</p>
        </div>
        <div class="button-group">
    <button class="remove-btn" @click="removeFromCart(product)">移除</button>
    <button class="buy-btn" @click="dindan(product)">购买</button>
  </div>
      </li>
    </ul>

    <!-- 总价统计 -->
    <div class="total-price" v-if="cart.length > 0">
      <strong>总价：{{ totalPrice }} 元</strong>
    </div>

    <!-- 清空购物车按钮 -->
    <button class="clear-cart-btn" @click="clearCart" v-if="cart.length > 0">
      清空购物车
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import {  mapActions } from 'vuex'; // 导入 mapActions
export default {
  computed: {
    ...mapState(['cart']),//要用的数据
    // 计算总价
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + item.price, 0);
    }
  },
  methods: {
    ...mapMutations(['CLEAR_CART','DELETE','addToOrder']),
    ...mapActions(['addToCart','addToOrder']), 
    clearCart() {
      this.CLEAR_CART();
    },
    removeFromCart(product) {
      this.DELETE(product);
    },
   dindan(product) {
        alert("购买成功");
         console.log('尝试添加订单:', product);
      this.addToOrder(product); // 调用映射过来的 action 方法
      //加入订单后将商品从购物车中删除调用删除方法即可
      this.DELETE(product);
    }
  }
}
</script>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.cart-list {
  list-style: none;
  padding: 0;
}

.cart-item {
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

.product-details h3 {
  margin: 0;
  font-size: 1.1rem;
}
.product-details p {
  margin: 0.2rem 0;
  font-size: 0.95rem;
  color: #777;
}
.total-price {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #e74c3c;
}

.clear-cart-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #e56458;
  color: rgb(50, 44, 44);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.clear-cart-btn:hover {
  background-color: #c0392b;
}

.empty-cart {
  text-align: center;
  color: #888;
  font-size: 1rem;
}
.cart-item {
  display: flex;
  justify-content: space-between; /* 左右对齐 */
 
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.product-info {
  display: flex;
  
}

.product-details {
  margin-left: 1rem;
}

.button-group {
  display: flex;
  background-color: #f0e8e7;
  color: rgb(50, 44, 44);
  gap: 0.5rem; /* 两个按钮之间留点空隙 */
}
</style>