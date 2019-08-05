<template>
    <div id="classifiy">
      <div class="line"></div>
        <div class="tabs">
          <div v-for="(tab,index) in tabs" 
            :key="index" 
            @click="toggle(index,tab.view)" 
            :class="{active:active==index}"
            class="tabsClass">
            {{tab.type}}
          </div>
        </div>
    <!--:is实现多个组件实现同一个挂载点-->
    <component :is="currentView"></component>
  </div>
</template>

<script>
import tab1 from '../components/tab1.vue'
import tab2 from '../components/tab2.vue'
export default {
  name: 'classifiy',
  data(){
    return {
      active:0,
      currentView:'tab1',
      tabs:[
        {
          type:'男频',
          view:'tab1'
        },
        {
          type:'女频',
          view:'tab2'
        }
      ]
    }
  },
  methods:{
    toggle(i,v){
      this.active=i;
      this.currentView=v;
    }
  },
  components:{
    tab1,
    tab2
  }
}
</script>

<style lang="stylus" scoped>
*
  margin 0
  padding 0
.line
    border 4px solid #EEEEEE
.tabs
  // width 200px
  display flex
  justify-content center
  margin 0 
  padding 0
  
  .tabsClass
    width 60px
    height 40px
    list-style none
    // background #ccc
    display inline-flex
    // border-right 1px solid #ddd
    justify-content center
    align-items center
    cursor pointer
  .active
      // background #409EFF
      border-bottom 2px solid #409EFF
      color #409EFF

</style>
