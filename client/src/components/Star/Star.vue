<template>
<!-- 评价星组件 -->
  <div class="stars">
    <span class="iconfont icon-shiwujiaoxing" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
    <!-- <span class="iconfont icon-shiwujiaoxing"></span> -->
    
  </div>
</template>

<script>
// 定义常量
  const  CLASS_ON = 'on'  // 全星亮
  const  CLASS_HALF = 'icon-ai65 on'  //半星亮
  const  CLASS_OFF = 'off'  // 全星灰
  export default {
    name: 'Star',
    props:['score','size'],
    computed: {
      // 根据评分计算星星的个数与表现形式
      // 评分3.2：3(全星)+0(半星)+2(灰星)
      // 评分3.5：3(全星)+1(半星)+1(灰星)
      starClasses() {
        const {score} = this
        const scs = []
        // 向scs中添加 n个'on'(全星)
        const scoreInteger = Math.floor(score)
        for(let i = 0; i < scoreInteger; i++){
          scs.push(CLASS_ON)
        }
        // 向scs中添加 0/1 个 'half'
        const scorePoint = score - scoreInteger
        if(scorePoint*10 >= 5){
          scs.push(CLASS_HALF)
        }
        // 向scs中添加 n个'off'
        while(scs.length < 5){
          scs.push(CLASS_OFF)
        }
        return scs
      }
    }
  }
</script>

<style>
  .stars{
    display: inline-block;
  }
  /* 设置星星的大小 */
  .stars > span{
    font-size: 12px;
  }
  
  /* 设置星星是否高亮 */
  .on {
    color: orange;
    
  }
</style>