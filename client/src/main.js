import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
// import { Swipe, SwipeItem } from 'mint-ui'

// 引入配置好的store
import store from './store'

// 使用VueRouter
Vue.use(VueRouter)

Vue.config.productionTip = false

// 使用mint-ui滑动组件
// Vue.component(Swiper.name, Swiper);
// Vue.component(SwiperSlide.name, SwiperSlide);

new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')
