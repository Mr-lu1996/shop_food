<template> 
    <!-- 首页外卖 -->
    <section class="home">
      <!-- 首页头部 -->
      <HeaderTop>
        <span slot="left_search" class="glyphicon glyphicon-search header_search"></span>
        <span slot="right_login">
          登录|注册
        </span>
      </HeaderTop>
      <!-- <header class="home_header">
        <span class="glyphicon glyphicon-search header_search"></span>
        <span>
          <span>南岸区南山街道重邮信科(崇文路2号)</span>           
        </span>
        <span>
          登录|注册
        </span>
      </header> -->
      <!-- 首页导航 -->
      <nav class="home_nav">
        <div class="swipslide">
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
  
        <div class="point_container">
          <span class="nav_point"></span>
          <span class="nav_point"></span>
          <span class="nav_point"></span>
        </div>
      </nav>
      <!-- 首页(主体)附近商家栏 -->
      <main class="home_main">
        <div class="near_store">附近商家</div>
        <div class="stores">
          <img class="store_img"  src="./imgs/nav/img3.png" alt="">
          <div>
            <div>
              <span class="brand">品牌</span>
              <span class="brand_name">鹿先森佳肴(尖椒肉丝)</span>
            </div>
            <div class="sale_num">
              <!-- 评价五角星 -->
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="little_word">月售9999单</span>
            </div>
            <div>
              <span class="little_word">￥20起送 / 配送费约￥5</span>
            </div>
          </div>
        </div>
        <div class="stores">
          <img class="store_img" src="./imgs/nav/img4.png" alt="">
          <div>
            <div>
              <span class="brand">品牌</span>
              <span class="brand_name">乡村下饭菜(小炒肉)</span>
            </div>           
            <div class="sale_num">
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star color_white"></span>
              <span class="little_word">月售999单</span>
            </div>
            <div>
              <span class="little_word">￥20起送 / 配送费约￥5</span>
            </div>
          </div>
        </div>
        <div class="stores">
          <img class="store_img" src="./imgs/nav/img8.png" alt="">
          <div>
            <div>
              <span class="brand">品牌</span>
              <span class="brand_name">红油热干面(美滋滋)</span>
            </div>           
            <div class="sale_num">
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star color_white"></span>
              <span class="glyphicon glyphicon-star color_white"></span>
              <span class="little_word">月售999单</span>
            </div>
            <div>
              <span class="little_word">￥20起送 / 配送费约￥5</span>
            </div>
          </div>
        </div>
      </main>
    </section>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';

  export default {
    name: "Home",
    components: { HeaderTop }
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
  /* 头部 */
  .home_header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    line-height: 50px;
    background-color: rgb(51, 207, 51);
    display: flex;
    justify-content: space-around;
    color: #fff;
  }
  /* 搜索图标 */
  .header_search {
    color: #fff;
    line-height: 50px;
  }
  /* 轮播图 */
  .home_nav {
    float: left;
    padding-left: 15px;
    width: 100%;
    height: 200px;
  
  }
  .swipslide{
    overflow: hidden;
  }
  .swipslide_container {
    float: left;
    margin-left: 20px;
    margin-bottom: 10px;
    width: 56px;
    height: 70px;
  }
  /* 导航容器 */
  .point_container {
    width: 50px;
    margin: 0 auto;
  }
  /* 导航点 */
  .nav_point{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    margin-left: 5px;
  }
  .nav_point:first-of-type{
    background-color: rgb(51, 207, 51);
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
  /* 外卖商家 */
  .home_main .stores{
    clear: both;
    display: flex;
    width: 100%;
    height: 90px;
    margin-bottom: 10px;
  }
  .store_img{
    width: 80px;
    height: 90px;
  }
  /* 品牌 */
  .brand{
    display: inline-block;
    width: 25px;
    background-color: yellow;
    font-size: 10px;
    font-weight: bold;
    margin-right: 5px;
  }
  /* 店名 */
  .brand_name{
    font-size: 16px;
    font-weight: bold;
  }
  /* 销量 */
  .sale_num{
    margin-top: 15px;
  }
  /* 小字体 */
  .little_word {
    font-size: smaller;
    color: gray;
  }
  /* 五角星 */
  .glyphicon-star {
    color: orange;
    font-size: 12px;
  }
  .color_white {
    color: gray;
  }
  
</style>