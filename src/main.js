import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui'


// 使用VueRouter
Vue.use(VueRouter)

Vue.config.productionTip = false

// 使用mint-ui滑动组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
