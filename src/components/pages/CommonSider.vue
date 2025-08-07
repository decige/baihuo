<template>
    <a-layout-sider width="200" style="overflow: auto;">
      <a-menu  mode="inline" @click="handleMenuClick" style="height: 100%">
        <a-sub-menu key="sub1">
          <!-- 标题 -->
          <template #title>
            <span><user-outlined /></span>用户管理
          </template>
          <a-menu-item key="h" >个人信息</a-menu-item>
          <a-menu-item key="a" >修改头像</a-menu-item>
          <a-menu-item key="b" >修改密码</a-menu-item>
          <a-menu-item key="c" >修改邮箱</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span><laptop-outlined /></span>系统商品管理
          </template>
            <!-- key：字符串类型，每个菜单项的唯一标识符，用于在一组菜单项中区分不同的项。
  disabled：布尔类型，是否禁用该菜单项，禁用后不可点击，默认为 false。
  icon：自定义图标，可以通过此属性设置菜单项左侧显示的图标。
  title：鼠标悬停时显示的提示文本。
  className：额外的 CSS 类名，可以用来添加自定义样式。
  style：内联样式对象，允许你直接在组件上应用样式。
  请注意，<a-menu-item> 的某些功能和属性依赖于其父级 Menu 组件的配置，例如：

  selectedKeys 和 openKeys：这些是 Menu 组件上的属性，用于控制哪些菜单项被选中或展开。
  mode：Menu 组件的属性，指定菜单的展现形式（如垂直、水平、内嵌等），这会影响 <a-menu-item> 的布局方式 -->
          <a-menu-item key="d"  >用户管理</a-menu-item>
          <a-menu-item key="e">权限管理</a-menu-item>
          <a-menu-item key="f">站点管理</a-menu-item>
          <a-menu-item key="g">检测参数管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span><notification-outlined /></span>商品管理
          </template>
          <a-menu-item key="t">分类管理</a-menu-item>
          <a-menu-item key="0">订单管理</a-menu-item>
          <a-menu-item key="1">回收站</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    
  
    
  </template>
  
  <script >
  
  const f={
    data(){
 
    },
    methods:{
      handleMenuClick({key}) {
      switch (key) {
        case 'h':
          
          // 如果是命名路由的话this.$router.push({ name: 'Profile' });$router 是 Vue Router 提供的一个实例
          this.$router.push('/user'); // 路由跳转到个人信息页面
          break;
        case 'a':
          
          // 如果是命名路由的话this.$router.push({ name: 'Profile' });$router 是 Vue Router 提供的一个实例
          this.$router.push('/ccy'); // 路由跳转到个人信息页面
          break;
        // 其他case...
        default:
          break;
      }
    },
    
    }

  }
  export default f;
  
  </script>
  