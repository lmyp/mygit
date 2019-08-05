<template>
    <div class="free">
        <v-freeList :freeList="freeListData" :freeList2="bookClassify" heading= "限时阅读" heading2="章节限免"></v-freeList>
    </div>
</template>

<script>
import axios from 'axios'
import freeList from '@/components/freeList'
export default {
data() {
    return {
        freeListData: [],
        bookClassify: []
    }
},
mounted() {
    this.setFree()
},
methods: {
    setFree() {
        axios.get('/api/appData').then(res => {
            console.log(res)
            this.freeListData = res.data.data.freeList
            this.bookClassify = res.data.data.bookClassify.slice(0, 6)
        })
    }
},
components:{
    'v-freeList': freeList
}
    
}
</script>

<style>

</style>
