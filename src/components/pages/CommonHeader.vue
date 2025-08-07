<template>
    <a-layout-header>
      <div class="logo">2203010306陈春溢</div>
      <a-menu  theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }" @click="handleMenuClick">
        <a-menu-item key="1">用户管理</a-menu-item>
        <a-menu-item key="2">商品订单记录</a-menu-item>
        <a-menu-item key="3">商品目录</a-menu-item>
        <a-menu-item key="4">我的购物车</a-menu-item>
      </a-menu>
      <a-button class="logout" type="dashed" ghost @click="replace">退出</a-button>
    </a-layout-header>
    
  </template>
  
 <script >
  import { mapState, mapMutations,mapActions  } from 'vuex';// 确保从 'vuex' 导入 mapState
  const f={
    data(){
 
    },
    computed:{
...mapState(['a', 'count'])
    },
    methods:{
      ...mapActions(['updatea']),//注册方法actions
      handleMenuClick({key}) {
      switch (key) {
        case '1':
          if(this.a=='未登录'){
            alert('请先登录')
          }else{
          // 如果是命名路由的话this.$router.push({ name: 'Profile' });$router 是 Vue Router 提供的一个实例
          this.$router.push('/user');} // 路由跳转到个人信息页面
          break;
        case '2':
           if(this.a=='未登录'){
            alert('请先登录')
          }else{
          // 如果是命名路由的话this.$router.push({ name: 'Profile' });$router 是 Vue Router 提供的一个实例
          this.$router.push('/dindan');
          } // 路由跳转到个人信息页面
          break;
        // 其他case...
         case '3':
           if(this.a=='未登录'){
            alert('请先登录')
          }else{
          // 如果是命名路由的话this.$router.push({ name: 'Profile' });$router 是 Vue Router 提供的一个实例
          this.$router.push('/sa'); // 路由跳转到个人信息页面
          }
          break;
           case '4':
             if(this.a=='未登录'){
            alert('请先登录')
          }else{
          // 如果是命名路由的话this.$router.push({ name: 'Profile' });$router 是 Vue Router 提供的一个实例
          this.$router.push('/cart'); // 路由跳转到个人信息页面
          }
          break;
        default:
          break;
      }
    },
    async replace(){
      await this.updatea("未登录");
      this.$router.replace('/'); // 跳转到登录页面
    }
    
    }

  }
  export default f;
  
  </script>
  
  <style>
  .ant-layout-header .logo {
    float: left;
    width: 140px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
    line-height: 31px;
    font-weight: bold;
    color: #fff;
  }
  .ant-layout-header {
    color: #fff !important;
  }
  .logout {
    float: right;
    margin-top: 16px;  /* 优化为正值 */
  }
  </style>
  