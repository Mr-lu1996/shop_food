<template>
  <div id="app">
      <router-view/>
      <FooterGuide v-show="$route.path !== '/login'"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';

export default {
  name: 'App',
  components: {
    FooterGuide
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
/* 提交按钮,登录按钮 */
  .submit_btn,
  .login_btn{
    background-color: rgb(51, 207, 51);
    border: none;
    color: #fff;
    width: 80px;
  }


</style>
