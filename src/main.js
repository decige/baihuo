import { createApp } from 'vue'
import './style.css'
import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './components/Home.vue'
//引入路由
import router from './router/index.js'
//引入vuex
import store from './vuex/vuex.js'
const app = createApp(App)
app.use(AntDesignVue)
app.use(router)
app.use(store)
app.mount('#app')
