<template>
<!-- 搜索页面 -->
  <div class="search">
    <!-- 顶部搜索按钮 -->
    <HeaderTop title="搜索"/>
    <!-- 输入框 -->
    <div class="input_wrapper">
      <input type="text" placeholder="请输入商家名称">
      <button class="submit_btn">提交</button>
    </div> 
    <!-- 查询结果框(main)  -->
    <div class="main">
      <div class="search_result"></div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
  export default {
    name: "Search",
    components: { HeaderTop }
}
</script>

<style scoped>
  /* 搜索容器 */
  .input_wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  /* 搜索输入框 */
  .input_wrapper input{
    width: 240px;
    line-height: 30px;
    border: none;
    background-color: #F2F2F2;
    text-align: center;
    color: rgb(47, 45, 45);
    font-weight: bold;
  }
  
  /* 中间主页面 */
  .main {
    width: 100%;
    height: 483px;
    margin-top: 15px;
    background-color: #f2f2f2;
  }
  
</style>