<template>
    <div class="tab1">
        <div class="container">
            <div class="header">
                <span class="headTitle">男频</span>
                
                <span class="newAdd">新增: 120</span>
            </div>
            
            <div class="bookContent">
                <div v-for="(item, index) in bookClassify" :key="index" class="bookList">
                    <div class="bookImg">
                        <img :src="item.img_url" alt="">
                    </div>
                    <div class="bookInfo">
                        <div class="title">{{item.title}}</div>
                        <div class="number">{{item.number}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
data() {
    return {
        title: '',
        number: '',
        bookClassify: []
    }
},
mounted() {
    this.getBookClassify()
},
methods: {
    getBookClassify() {
        axios.get('/api/appData').then(res => {
            console.log(res)
            this.bookClassify = res.data.data.bookClassify
        })
    }
},
}
</script>

<style lang="stylus" scoped>
* 
    margin 0
    padding 0 
    .container
        width 100%  

        .header
            padding-left 10px
            padding-bottom 15px
            border-bottom 1px solid #E5E6E8
            .headTitle
                font-size 18px
            .newAdd
                font-size 15px
                color #B0B0B0
                position absolute
                right 20px
        .bookContent
            display flex
            flex-direction row
            flex-wrap wrap
        
            .bookList
                display inline-block
                width 166px
                padding 10px
                // padding 20px
                // margin-right 10px
                font-size 15px
                display flex
                flex-direction  row
                flex-wrap wrap
                border-bottom 1px solid #F8FAFB
                border-right 1px solid #F8FAFB
           
                .bookImg
                    width 50px
                    height 70px
                    img
                        width 100%
                        height 100%
                        display inline-block 
                .bookInfo
                    padding-left 10px
                    .title
                        padding-top 5px
                        font-size 18px
                    .number
                        padding-top 15px
                        font-size 15px
                        color #D9DADE
.container::after
    content ''
    height 50px
    display block

</style>
