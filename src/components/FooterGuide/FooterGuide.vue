<template>
  <div class="footer">
    <button @click="pushToHome">外卖</button>
    <button @click="pushToSearch">搜索</button>
    <button @click="pushToOrder">订单</button>
    <button @click="pushToProfile">我的</button>
  </div>
</template>

<script>
  export default {
    name: 'FooterGuide',
    methods:{
      pushToHome() {
        this.$router.push({
          name:'home'
        })
      },
      pushToSearch() {
        this.$router.push({
          name:'search'
        })
      },
      pushToOrder() {
        this.$router.push({
          name:'order'
        })
      },
      pushToProfile() {
        this.$router.push({
          name:'profile'
        })
      }
    }
  }
</script>

<style>
  .footer{
    position: relative;
    top: 500px;
  }
</style>