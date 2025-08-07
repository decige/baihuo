<template>
  <div class="search-input-container">
    <!-- 搜索图标 -->
    <span class="search-icon">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
    </span>

    <!-- 输入框 -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="请输入关键词..."
      class="search-input"
    />

    <!-- 清空按钮 -->
    <button
      v-if="searchQuery"
      @click="clearSearch"
      class="clear-btn"
      aria-label="清除搜索内容"
    >
      &times;
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  debounceTime: {
    type: Number,
    default: 300 // 默认 300ms 防抖
  }
});

const emit = defineEmits(['update:modelValue', 'search']);

const searchQuery = ref(props.modelValue);

// 防抖定时器
let debounceTimer = null;

watch(searchQuery, (newVal) => {
  emit('update:modelValue', newVal);

  // 触发防抖搜索事件
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    emit('search', newVal);
  }, props.debounceTime);
});
</script>

<style scoped>
.search-input-container {
  position: relative;
  display: inline-block;
  width: 300px;
}

.search-input {
  width: 100%;
  padding: 10px 40px 10px 35px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #1890ff;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
}

.clear-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 18px;
  color: #aaa;
  cursor: pointer;
  padding: 0;
}
/* 强制设置 input 文字颜色 */
input {
  color: #000 !important;
}
.clear-btn:hover {
  color: #333;
}
</style>