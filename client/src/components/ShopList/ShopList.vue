<template>
  <div>
    <div class="stores" v-for="(shop,index) in shops" :key="index">
      <img class="store_img"  src="./imgs/stores/img1.png" alt="">
      <div class="stores_center">
        <div>
          <span class="brand">品牌</span>
          <span class="brand_name">{{shop.name}}</span>
        </div>
        <div class="sale_num">
          <!-- 评价五角星 -->
          <Star :score="shop.rating"/>
          <span class="little_word">{{shop.rating}}分&nbsp;&nbsp;</span>
          <span class="little_word">月售{{shop.recent_order_num}}单</span>          
        </div>
        <div>
          <span class="little_word">￥{{shop.float_minimum_order_amount}}起送 /</span>
          <span class="little_word"> {{shop.piecewise_agent_fee.tips}}</span>
        </div>
      </div>
      <div class="stores_right">
        <ul>
          <li v-for="(support,index) in shop.supports" :key="index">
            {{support.icon_name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import Star from '../Star/Star.vue'
  export default {
    name: 'ShopList',
    components:{
      Star
    },
    methods: {
      ...mapActions(['getShops'])
    },
    computed: {
      ...mapState(['shops'])
    },
    mounted() {
      let latiAndlong = {
        latitude: 40.10038, //纬度
        longitude: 116.36867, // 经度
      }
      this.getShops(latiAndlong)
      console.log(this.shops)
    }
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
  /* 商家中部内容 */
  .stores_center {
    width: 200px;
  }
  .stores_center > div{
    float: left;
  }
  /* 商家右侧内容 */
  .stores_right ul li{
    float: left;
    color: #C2B6B5;
    margin-left: 2px;
    border: 1px solid #C2B6B5;
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