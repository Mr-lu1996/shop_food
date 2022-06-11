import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
// import { Swipe, SwipeItem } from 'mint-ui'

// 使用VueRouter
Vue.use(VueRouter)

Vue.config.productionTip = false

// 使用mint-ui滑动组件
// Vue.component(Swiper.name, Swiper);
// Vue.component(SwiperSlide.name, SwiperSlide);

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
