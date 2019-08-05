<template>
    <div class="serach">
        <div class="inpuBox">
            <input type="text" placeholder="请输入书名、作者" id="search_index"  @keyup.enter="queryAdminRole" v-model="keywords" class="input-with-select">
        </div>
        <!-- {{keywords}} -->
         <div class="bookInfo" v-show="keywords">
            <ul >
                <li v-for="(item, index) in arrList" :key="index" class="bookContent">
                    <div class="bookImg"><img :src="item.img_url" alt=""></div>
                    <div class="book-right">
                        <div class="title">{{item.title}}</div>
                        <div class="authors">{{item.authors}}</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="HotSearch" v-show="!keywords">
            <div class="head">
                <span class="heading">热门搜索</span>
                <span class="img_url"><img src="../assets/img/换一换.png" alt=""></span>
            </div>
            <div class="HotContent">
               <div class="line1 line">
                   <span class="hot1 hot">老婆大人有点冷</span>
                   <span class="hot2 hot">超级兵王在都市</span>
               </div>
               <div class="line2 line">
                   <span class="hot3 hot">绝代武神</span>
                   <span class="hot4 hot">最强升级系统</span>
                   <span class="hot5 hot">神医毒妃</span>
               </div>
               <div class="line3 line">
                   <span class="hot6 hot">都市奇门医圣</span>
                   <span class="hot7 hot">农女珍珠的悠闲生活</span>
               </div>
            </div>
        </div>
        <div class="history" v-show="!keywords">
            <div class="head">
                <span class="heading">搜索历史</span>
                <span class="img_url" @click.prevent="del()"><img src="../assets/img/删 除.png" alt=""></span>
            </div>
            <div class="hisContent">
                <ul class="hisList" >
                    <li class="title" v-for="(item, id) in HistoryList" :key="id">{{item.list}}</li>
                </ul>
            </div>
        </div>
       
    </div>      
</template>

<script>
import axios from 'axios'
export default {
data() {
    return {
        keywords: '',
        // list: '',
        HistoryList: [
            {
                list: "斗罗大陆"
            }
        ],
        arrList: [],
        goodsList: [],
    }
},
methods: {
    del(id) {
        
         let index = this.HistoryList.findIndex(item=>{
				return id = item.id
			})
		this.HistoryList.splice(index,1)
    },
   queryAdminRole:function(e){
           
            var _this = this;
             var keyCode = window.event? e.keyCode:e.which;
             console.log('回车搜索',keyCode,e);
            console.log(this.keywords)
             if(keyCode == 13 && this.keywords){
                 let obj = { list: this.keywords}//获取input输入的数据
                _this.HistoryList.unshift(obj)
            var arrList = [];
            console.log('this', this.goodsList)
            for (var i=0;i<this.goodsList.length;i++){
              if(this.goodsList[i].title.search(this.keywords) != -1){
                //判断输入框中的值是否可以匹配到数据，如果匹配成功
                this.arrList.push(this.goodsList[i]);
               
              
              }
            }
            return arrList;
// this.$router.push({path:'/searchResult?keywords='+this.keywords});
        } 
  
    },
           
},

mounted() {
    let that = this
        axios.get('/api/appData',).then(res => {
            let bookList = res.data.data.promotions    
            console.log('bookList:')
            console.log(bookList)
            that.goodsList = bookList
            
        });
       console.log('arrbt', this.arrByZM)
    },
}
</script>

<style lang="stylus" scoped>
*
    margin 0
    padding 0
    .inpuBox
        width 90%
        border-radius 5px
        margin 0 auto
        input 
            margin-top 10px
            border-radius 30px
            width 100%
            // height 40px
            padding 10px 0
            text-align center
            // background-color #F7F8F5
    .HotSearch
        margin-top 20px
        .head
            color #000
            font-size 18px
            padding-left 15px
            position relative
        .img_url
            width 20px
            height 20px
            display inline-block
            position absolute
            right 15px
            img 
                width 100%
                height 100%
        .HotContent
            width 100%
            .line
                .hot
                    display inline-block
                    padding 8px 15px
                    border-radius 20px
                    margin-right 10px
                    color #fff
            .line1
                margin-top 20px
                padding-left 35px
                .hot1
                    background-color #99DF84
                .hot2
                    background-color #C065E6
            .line2
                margin-top 15px
                padding-left 20px
                .hot3
                    background-color #99DF84
                .hot4
                    background-color #F4724B
                .hot5
                    background-color #56A1FF 
            .line3
                margin-top 15px
                padding-left 35px
                .hot6
                    background-color #C065E6
                .hot7
                    background-color #F5A623
    .history
        width 100%
        margin-top 20px
        .head
            color #000
            font-size 18px
            padding-left 15px
            position relative
        .img_url
            width 25px
            height 25px
            display inline-block
            position absolute
            right 15px
            img 
                width 100%
                height 100%
        .hisContent
            // width 100%
            margin-top 20px
            .hisList
                // background-color yellow
                padding-left 20px
                width 150px
                .title
                    list-style none
                    background-color #fff
                    border 1px solid #ADB0B6
                    padding 8px 15px
                    border-radius 20px
                    color #ADB0B6
    .bookInfo
        width 100%
        ul
            margin 0
            padding 0
            .bookContent
                list-style none 
                width 100%
                display flex
                flex-direction row
                padding-left 20px
                border-bottom 1px solid #DCDBDE
                position relative
                .bookImg
                    width 70px
                    height 100px
                    padding 10px 0
                    img 
                        width 100%
                        height 100%
                .book-right
                    padding-top 18px
                    padding-left 10px
                    .title
                        font-size 18px
                    .authors
                        padding-top 15px
                        font-size 16px
    .bookInfo::after
        content ''
        height 50px
        display block
</style>
