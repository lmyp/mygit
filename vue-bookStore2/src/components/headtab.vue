<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home/homePage">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/home/ranking">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/home/classification">
      <span class="tab-link">分类</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/home/free">
      <span class="tab-link">免费</span>
    </router-link>
    <!-- <div class="routeview">
        <router-view></router-view> -->
    <!-- </div>  -->
   
  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style lang="stylus" scoped>
.tab
  display flex
  width 100%
  height 40px
  line-height 40px
  font-size 18px
  position sticky
  top 0px
  z-index 999
  background-color #fff
  // position absolute
  // z-index 999
  // left 0
  // top 0
  // background #efefef
  // position relative
  // top 30px
  &-item
    flex 1
    text-align center
  .router-link-active
    // border-bottom 2px solid #fff
    border-bottom 2px solid #3798FB
    color #3798FB
    .tab-link
      padding-bottom 5px
      // color #ADEBF7
      font-weight bold
    // &.active
    //   .tab-link
    //     color #ea2448 
    //     border-bottom 2px solid #fff
</style>
