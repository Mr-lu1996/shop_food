<template>
  <div>
    <div class="stores">
      <img class="store_img"  src="./imgs/stores/img1.png" alt="">
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
      <img class="store_img" src="./imgs/stores/img4.png" alt="">
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
      <img class="store_img" src="./imgs/stores/img8.png" alt="">
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
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* 外卖商家 */
  .stores{
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