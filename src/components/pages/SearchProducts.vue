<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <div class="search-bar">
      <input
        v-model.lazy="searchText"
        placeholder="请输入商品名称进行搜索..."
        @keyup.enter="search"
      />
      <button @click="search">搜索</button>
    </div>

    <!-- 加载状态 -->
    <div v-if="loading" class="loading">正在搜索...</div>

    <!-- 无结果提示 -->
    <div v-else-if="foundProducts.length === 0 && searchText" class="no-results">
      抱歉，没有找到与“{{ searchText }}”相关的结果。
    </div>

    <!-- 商品列表 -->
    <div v-else class="product-list">
      <div v-for="product in foundProducts" :key="product.id" class="product-card">
        <img :src="product.imageUrl" :alt="product.name" class="product-image" @click="goToDetail(product.id)"/>
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">价格：{{ product.price }} 元</p>
          <p class="product-stock">库存：{{ product.stock }}</p>
          <div class="actions">
            <button class="btn buy-btn" @click="dindan(product)">购买</button>
            <button
              class="btn cart-btn"
              @click="handleAddToCart(product)"
              :disabled="product.stock <= 0"
            >
              {{ product.stock > 0 ? '加入购物车' : '已售罄' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchProducts',
  data() {
    return {
      searchText: '',
      loading: false
    };
  },
  computed: {
    ...mapGetters(['productsByName']),
    foundProducts() {
      if (!this.searchText) return [];
      return this.productsByName(this.searchText);
    }
  },
  methods: {
    ...mapActions(['addToCart', 'addToOrder']),
    search() {
      this.loading = true;
      // 模拟请求延迟
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    handleAddToCart(product) {
      this.addToCart(product);
    },
    dindan(product) {
      this.addToOrder(product);
    },
    
    // 新增：跳转到详情页
  goToDetail(productId) {
    console.log('跳转到详情页:', productId);
    this.$router.push(`/product/detail/${productId}`);
  }
  }
};
</script>

<style scoped>
.search-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* 搜索栏样式 */
.search-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.search-bar input {
  width: 60%;
  height: 45px;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 6px;
  outline: none;
  color: #000;
}

.search-bar button {
  padding: 0 25px;
  height: 45px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #0056b3;
}

/* 加载状态 */
.loading {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin: 40px 0;
}

/* 无结果提示 */
.no-results {
  text-align: center;
  font-size: 18px;
  color: #999;
  margin: 40px 0;
}

/* 商品列表 */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 25px;
}

/* 商品卡片 */
.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.product-price {
  color: #e67e22;
  font-weight: bold;
  margin-bottom: 8px;
}

.product-stock {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.btn {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buy-btn {
  background-color: #2ecc71;
  color: white;
}

.buy-btn:hover {
  background-color: #f57c00;
}

.cart-btn {
  background-color: #2ecc71;
  color: white;
}

.cart-btn:hover {
  background-color: #27ae60;
}

.cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
