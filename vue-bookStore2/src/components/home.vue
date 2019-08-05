<template>
    <div class="home">
        <v-headtab></v-headtab>
        <!-- 没有这个router-view就显示不出每个导航栏界面内容 -->
        <router-view></router-view>
    </div>

</template>

<script>
import headtab from '@/components/headtab'
export default {
    name: 'home',
    components:{
    'v-headtab': headtab
  },
}
</script>

<style>
.home {
    height: 100%
}
</style>
