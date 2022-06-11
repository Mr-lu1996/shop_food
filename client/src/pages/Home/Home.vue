<template> 
    <!-- 首页外卖 -->
    <section class="home">
      <!-- 首页头部 -->
      <HeaderTop :title="local">
        <!-- 搜索图标 -->
        <span slot="left_search" class="glyphicon glyphicon-search header_search"></span>
        <span slot="right_login">登录|注册</span>
      </HeaderTop>
      <!-- 首页导航(轮播) -->
      <nav class="home_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swipslide_container">
              <a href="javascript:;">
                <div>
                  <img src="./imgs/nav/img1.png" alt="">
                </div>
                <span>甜品饮品</span>
              </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img2.png" alt="">
                  </div>
                  <span>商超便利</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img3.png" alt="">
                  </div>
                  <span>美食</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img4.png" alt="">
                  </div>
                  <span>简餐</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img5.png" alt="">
                  </div>
                  <span>新店特惠</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img6.png" alt="">
                  </div>
                  <span>准时达</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img7.png" alt="">
                  </div>
                  <span>预订早餐</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img8.png" alt="">
                  </div>
                  <span>土豪推荐</span>
                </a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img5.png" alt="">
                  </div>
                  <span>新店特惠</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img6.png" alt="">
                  </div>
                  <span>准时达</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img7.png" alt="">
                  </div>
                  <span>预订早餐</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img8.png" alt="">
                  </div>
                  <span>土豪推荐</span>
                </a>
              </div>
              <div class="swipslide_container">
              <a href="javascript:;">
                <div>
                  <img src="./imgs/nav/img1.png" alt="">
                </div>
                <span>甜品饮品</span>
              </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img2.png" alt="">
                  </div>
                  <span>商超便利</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img3.png" alt="">
                  </div>
                  <span>美食</span>
                </a>
              </div>
              <div class="swipslide_container">
                <a href="javascript:;">
                  <div>
                    <img src="./imgs/nav/img4.png" alt="">
                  </div>
                  <span>简餐</span>
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
    </section>
</template>

<script>
  // 引入swiper
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
  import ShopList from '../../components/ShopList/ShopList.vue';
import axios from 'axios';

  export default {
    name: "Home",
    components: {
    HeaderTop,
    ShopList
    },
    mounted () {
      // 创建一个Swiper实例对象，来实现轮播
      new Swiper('.swiper-container', {
        loop: true,  //可以循环轮播
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })

      axios.get('http://localhost:8081/position').then(res => {
        console.log(res)
      })
    },
    data (){
      return {
        local: '南岸区南山街道重邮信科(崇文路2号)'
      }
    }
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
    height: 300px;
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