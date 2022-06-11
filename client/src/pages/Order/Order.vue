<template>
  <div class="order">
    <HeaderTop title="订单列表"/>
    <div class="my_order">
      <div class="login_wrapper">
        <div class="login_text">
        <span>登陆后查看外卖订单</span>
        </div>
        <button class="login_btn">立即登陆</button>
      </div>     
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
  export default {
    name: "Order",
    components: { HeaderTop }
}
</script>

<style>
  /* 我的订单 */
  .my_order {
    width: 100%;
    height: 550px;
    margin-top: -20px;
    background-image: url('./imgs/star1.png');
  }
  /* 登录容器 */
  .login_wrapper{
    position: relative;
    top: 60%;
  }
  /* 登陆文本 */
  .login_text {
    margin-bottom: 10px;
    color: #998F85;
  }
</style>