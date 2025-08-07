<template>
  <div class="login-container">
    <div class="login-card">
      <h2>用户登录</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-item">
          <label>用户名</label>
          <input type="text" v-model="form.username" placeholder="请输入用户名" />
        </div>
        <div class="form-item">
          <label>密码</label>
          <input type="password" v-model="form.password" placeholder="请输入密码" />
        </div>
        <button type="submit" class="btn-login">登录</button>
      </form>
     
    </div>
  </div>
  
</template>

<script>
import { mapState, mapMutations,mapActions  } from 'vuex'; // 确保从 'vuex' 导入 mapState
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed:{
...mapState(['a', 'count'])
    },
  methods: {
    ...mapActions(['updatea']),
    async handleSubmit() {
      const { username, password } = this.form;

      if (!username || !password) {
        this.$message.error('请输入用户名和密码');
        return;
      }
        
      try {
        // 这里可以添加真实的登录API调用
        console.log('模拟登录请求发送中...');
        
        // 模拟API请求延迟
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('登录成功，跳转到首页');
        // 模拟登录成功
      await this.updatea("已登录"); // 使用 action 更新状态
      
        await this.$router.push('/sa');
        this.$message.success('登录成功');
      } catch (error) {
        console.error('跳转失败:', error);
        this.$message.error('登录失败，请重试');
      }
    }
  }
}
</script>

<style scoped>
/* 样式保持不变 */
/* 强制设置 input 文字颜色 */
input {
  color: #000 !important;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  width: 400px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-item {
  margin-bottom: 16px;
}

.form-item label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn-login {
  width: 100%;
  padding: 10px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-login:hover {
  background-color: #40a9ff;
}

.register-link {
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
}

.register-link a {
  color: #1890ff;
  text-decoration: none;
}
</style>  