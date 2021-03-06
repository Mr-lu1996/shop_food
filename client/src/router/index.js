// 路由器对象木模块
import VueRouter from 'vue-router'

export default new VueRouter({
  // 所有路由
  mode: 'history',
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:() => import('../pages/Home/Home.vue')
    },
    {
      path:'/order',
      name:'order',
      component:() => import('../pages/Order/Order.vue')
    },
    {
      path:'/profile',
      name:'profile',
      component:() => import('../pages/Profile/Profile.vue')
    },
    {
      path:'/search',
      name:'search',
      component:() => import('../pages/Search/Search.vue')
    },
    {
      path:'/login',
      name:'login',
      component:() => import('../pages/Login/Login.vue')
    }
  ]
})