<template> 
    <!-- 首页外卖 -->
    <section class="home">
      <!-- 首页头部 -->
      <HeaderTop :title="address.name">
        <!-- 搜索图标 -->
        <span slot="left_search" class="iconfont icon-sousuo header_search"></span>
        <span slot="right_login">登录|注册</span>
      </HeaderTop>
      <div class="nav_and_shop">
          <!-- 首页导航(轮播) -->
        <nav class="home_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(slide,index) in categoryArr" :key="index">
                <div class="swipslide_container" v-for="(category,index) in slide" :key="index">
                  <a href="javascript:;">
                    <div>
                      <img src="./imgs/nav/img1.png" alt="">
                    </div>
                    <span>{{category.title}}</span>
                  </a>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination slide-pagination"></div>
          </div>
        </nav>
        <!-- 首页(主体)附近商家栏 -->
        <main class="home_main">
          <div class="near_store">附近商家</div>
          <ShopList/>
        </main>
      </div>
    </section>
</template>

<script>
  // 引入swiper
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
  import ShopList from '../../components/ShopList/ShopList.vue';
  import axios from 'axios';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: "Home",
    components: {
      HeaderTop,
      ShopList
    },
    data (){
      return {
        // local: '南岸区南山街道重邮信科(崇文路2号)'
      }
    },
    computed:{
      // local() {
      //   return this.$store.state.address.address
      // }
      // 借助 mapState 生成计算属性，从state中读取数据
      ...mapState(['address','categorys']),

      categoryArr() {
        // 轮播展示，需要对categorys进行处理
        // 将其转化为一个二维数组，第一层轮播图的张数，第二层每张显示食品分类的个数(8个)
        const categorys = this.categorys
        // 先准备空的二维数组
        let arr = []
        // 准备一个小数组(最大长度是8)
        let minArr = []
        // 遍历categorys
        categorys.forEach(c => {
          // 如果当前小数组已经满了，创建一个新的
          if(minArr.length === 8) {
            minArr = []
          } 
          // 如果minArr是空的，将小数组放入大数组中
          if(minArr.length === 0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)        
        })
        return arr
      }
    },
    watch: {
      // 监视categoryArr,当数据请求回来后再渲染轮播界面
      categoryArr(value) {
        // 当界面更新后再创建Swipper对象
        this.$nextTick(() => {  // 一旦完成界面更新，立即调用
          // 创建一个Swiper实例对象，来实现轮播
          new Swiper('.swiper-container', {
            loop: true,  //可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    },
    methods: {
      //借助 mapActions 生成方法，方法会调用dispatch去联系 actions
      
      // 获取当前地址、食品分类列表
      ...mapActions(['getAddress','getCategorys']),
    },
    mounted () {
      let latiAndlong = {
        latitude: 40.10038, //纬度
        longitude: 116.36867, // 经度
      }
      // this.$store.dispatch('getAddress',latiAndlong)
      this.getAddress(latiAndlong)

      this.getCategorys()
    },
}
</script>

<style scoped>
  .clearfix::before,
  .clearfix::after{
      content: '';
      /* display以table的方式 */
      display: table;
      clear: both;
  }
 
  /* 搜索图标 */
  .header_search {
    color: #fff;
    line-height: 40px;
  }
  /* 食品分类导航和商家导航 */
  .nav_and_shop {
    height: 530px;
    overflow: auto;
  }
  /* 轮播图 */
  .home_nav {
    float: left;
    padding-left: 15px;
    width: 100%;
    height: 200px;
  
  }
  .swiper-slide{
    overflow: hidden;
  }
  .swipslide_container {
    float: left;
    margin-left: 20px;
    margin-bottom: 10px;
    width: 56px;
    height: 70px;
  }
  .slide-pagination {
    bottom:-5px
  }
 
  /* 首页主体(附近商家) */
  .home_main {
    width: 100%;
    height: 330px;
    /* overflow: auto; */
    background-color: #fff;
    clear: both;
    border-top: 10px solid rgba(214, 219, 214, 0.5);
    padding-left: 10px;
  }
  .home_main .near_store{
    float: left;
    line-height: 30px;
    margin-top: 5px;
  }
  
</style>