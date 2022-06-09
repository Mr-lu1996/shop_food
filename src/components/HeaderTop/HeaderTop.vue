<template>
  <header class="top_bar">
    <slot name="left_search"></slot>
    <span>{{title}}</span>
    <slot name="right_login"></slot>
  </header>
</template>

<script>
  export default {
    name: 'HeadTop',
    props:['title']
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
    line-height: 40px;
    background-color: rgb(51, 207, 51);
    color: #fff;
  }
</style>