import { createRouter, createWebHashHistory } from 'vue-router';

// 定义路由规则数组
const routes = [
    {
    path: '/sa',
    name: 'order',
    component: () => import('../components/pages/login.vue') // 个人信息页面组件路径
  },
 {
    path: '/',
    name: 'index',
    component: () => import('../components/loginmain.vue') // 个人信息页面组件路径
  },
  {
    path: '/dindan',
    name: 'dindan',
    component: () => import('../components/pages/dindan.vue') // 个人信息页面组件路径
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../components/pages/user.vue') // 个人信息页面组件路径
  },
   {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/pages/cart.vue') // 个人信息页面组件路径
  },
  {
  path: '/product/detail/:id',
  name: 'ProductDetail',
  component: () => import('../components/pages/ProductDetail.vue') // 假设你放在 views 文件夹下
}
  
];

// 创建路由器实例
const router = createRouter({
  history: createWebHashHistory(), // 使用 hash 模式
  routes // 路由规则数组
});

export default router; // 导出路由器实例