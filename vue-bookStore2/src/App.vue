<template>
  <div id="app">
    <router-view></router-view>
    <m-tabbar v-model="select">
      <m-tabbar-item id='bookshelf' isRouter>
        <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 
        书架
      </m-tabbar-item>
      <m-tabbar-item id='home' isRouter>
        <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="icon-active"> 
        书城
      </m-tabbar-item>
      <m-tabbar-item id='search' isRouter>
        <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_status_active.png" alt="" slot="icon-active"> 
        搜索
      </m-tabbar-item>
       <m-tabbar-item id='mine' isRouter>
        <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_profile_active.png" alt="" slot="icon-active"> 
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mTabbar from '@/components/tabbar'
import mTabbarItem from '@/components/tabbar-item'

export default {
  name: 'app',
  components:{
  	mTabbar,
    mTabbarItem,
  },
  data() {
      return {
        select:"Index"
      }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0
}

 


</style>
