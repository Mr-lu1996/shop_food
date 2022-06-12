<!-- 底部导航栏 -->
<template>
  <div class="footer_guide">
    <!-- 外卖 -->
    <span :class="{on: $route.path === '/home'}" @click="goTo('home')">
      <div>
        <span class="iconfont icon-shouye"></span>
      </div>
      <span>首页</span>
    </span>
    <!-- 搜索 -->
    <span :class="{on: $route.path === '/search'}" @click="goTo('search')">
      <div>
        <span class="iconfont icon-sousuo"></span>
      </div>
      <span>搜索</span>
    </span>
    <!-- 订单 -->
    <span :class="{on: $route.path === '/order'}" @click="goTo('order')">
      <div>
        <span class="iconfont icon-quanbudingdan"></span>
      </div>
      <span>订单</span>
    </span>
    <!-- 我的(个人信息) -->
    <span :class="{on: $route.path === '/profile'}" @click="goTo('profile')">
      <div>
        <span class="iconfont icon-gerenxinxi"></span>
      </div>
      <span>我的</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'FooterGuide',
    methods:{
      goTo(pathName) {
        this.$router.replace({
          name:pathName
        })
      },
    }
  }
</script>

<style scoped>
  .footer_guide{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: solid 1px rgb(196, 192, 192);
  }

  .on {
    color:rgb(51, 207, 51)
  }
</style>