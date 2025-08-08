import {createStore } from 'vuex';
//vuex的核心作用就是帮我们管理组件之间的状态（数据）
// 修正导入路径（注意添加正确的文件扩展名）
import image01 from '../assets/images/001.jpg';
import image02 from '../assets/images/002.jpg';
import image03 from '../assets/images/003.jpg';
import image04 from '../assets/images/004.jpg';
import image05 from '../assets/images/005.jpg';
import image06 from '../assets/images/006.jpg';
import image07 from '../assets/images/007.jpg';
import image08 from '../assets/images/008.jpg';
import image09 from '../assets/images/009.jpg';
import image10 from '../assets/images/010.jpg';


const store=createStore({
//所有的状态（数据）都放在state里面
state:{
    count:100,
    a:"未登录",//判断登录
    products: [
      {
        id: 1,
        name: "iPhone 15 Pro",
        description: "苹果最新款高端手机，A16 芯片，钛合金机身",
        price: 8999,
        //在 Vue 组件模板中使用 @/assets/xxx.jpg 没问题，
        //但是在 Vuex store 或 JS 文件中直接使用 @/assets/xxx.jpg 是不会被 Webpack/Vite 自动解析的！
        imageUrl: image01,
        stock: 50,
        category: "手机"
      },
      {
        id: 2,
        name: "华为 Mate 60",
        description: "国产旗舰手机，麒麟芯片，鸿蒙系统",
        price: 6499,
        imageUrl: image02,
        stock: 30,
        category: "手机"
      },
      {
        id: 3,
        name: "小米电视 6",
        description: "4K超高清智能电视，全面屏设计",
        price: 4999,
        imageUrl: image03,
        stock: 20,
        category: "家电"
      },
      {
        id: 4,
        name: "戴森吸尘器 V15",
        description: "强劲吸力，无线设计，适合家庭清洁",
        price: 3499,
        imageUrl: image04,
        stock: 10,
        category: "家电"
      },
      {
        id: 5,
        name: "耐克 Air Max 运动鞋",
        description: "经典缓震系列，舒适透气，适合日常穿着",
        price: 899,
        imageUrl: image05,
        stock: 100,
        category: "鞋服"
      },
      {
      id: 6,
      name: "索尼 WH-1000XM5 耳机",
      description: "行业领先的降噪技术，长达30小时的电池续航",
      price: 2999,
       imageUrl: image06,
      stock: 45,
      category: "耳机"
    },
    {
      id: 7,
      name: "佳能 EOS R5 相机",
      description: "专业级全画幅无反光镜相机，支持8K视频录制",
      price: 26999,
       imageUrl: image07,
      stock: 15,
      category: "相机"
    },
    {
      id: 8,
      name: "联想拯救者 Y9000X 笔记本电脑",
      description: "高性能游戏笔记本，搭载Intel i7处理器和RTX 3060显卡",
      price: 9999,
      imageUrl: image08,
      stock: 25,
      category: "电脑"
    },
    {
      id: 9,
      name: "飞利浦空气净化器 AC2889",
      description: "高效过滤PM2.5，去除甲醛，净化空气",
      price: 2399,
      imageUrl: image09,
      stock: 50,
      category: "家电"
    },
    {
      id: 10,
      name: "乐高星球大战千年隼号",
      description: "高度细节还原的千年隼号模型，包含7500多个零件",
      price: 5999,
       imageUrl: image10,
      stock: 10,
      category: "玩具"
    }
    ],
    cart: [
  ], // 购物车状态
    dindan:[

    ],//订单状态
 
},
getters: {
    // 根据 id 获取商品
    productById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    },
    // 新增：根据名称搜索商品
    productsByName: (state) => (name) => {
      return state.products.filter(product => 
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }
  },
mutations: {
      // mutations用于直接修改Vuex store中的状态。每个mutation都有一个字符串类型的事件类型（type）和一个回调函数（handler）。
      // 这个回调函数接收当前的state作为第一个参数，并可以接收载荷（payload），即你希望存储或用来修改state的数据
    ADD_TO_CART(state, product) {
      //将product添加到购物车中
      state.cart.push(product);
      // 找到 products 中对应的那条数据，并将其 stock -1
    const prod = state.products.find(p => p.id === product.id);
    if (prod && prod.stock > 0) {
      prod.stock--;
    }
    },
     ADD_TO_ORDER(state, product) {
      //加入订单
      state.dindan.push(product);
      //库存-1
      const prod = state.products.find(p => p.id === product.id);
    if (prod && prod.stock > 0) {
      prod.stock--;
    }
    
   
},
   DELETE(state, product) {
      //删除
      state.cart.splice(state.cart.indexOf(product), 1);
      //库存+1
      const prod = state.products.find(p => p.id === product.id);
    if (prod && prod.stock < 500) {
      prod.stock++;
    }
    },
    UPDATEA(state, value) {
      state.a = value;
    }
  },
 actions: {
    addToCart({ commit }, product) {
      alert("添加成功")
      commit('ADD_TO_CART', product);
    },
    addToOrder({ commit }, product) {
      alert("下单成功")
    commit('ADD_TO_ORDER', product)
  },
 delete({ commit }, product) {
      
    commit('DELETE', product)
  },
updatea({ commit }, product) {
    commit('UPDATEA', product)
  },
}

})
//在 main.js里面引入
export default store
