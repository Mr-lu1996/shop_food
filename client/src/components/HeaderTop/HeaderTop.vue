<template>
  <header class="top_bar">
    <slot name="left_search"></slot>
    <p class="overflow-ellipsis">{{title}}</p>
    <slot name="right_login"></slot>
  </header>
</template>

<script>
  
  export default {
    name: 'HeadTop',
    props:['title'],
  }
</script>

<style>
/* 顶部框 */
.top_bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(51, 207, 51);
    color: #fff;
    display: flex;
    justify-content: space-around;
  }
  .overflow-ellipsis {
    width: 150px;
    height: 40px;
    /* 溢出的内容用省略号代替 */
    text-overflow: ellipsis;
    /* 溢出隐藏 */
    overflow: hidden;
    /* 强制不能换行 */
    white-space:nowrap
  }
</style>