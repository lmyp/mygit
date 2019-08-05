<template>
  <div class="ranking">
        <!-- <i class="fa el-down-icon" v-show="downIcon" @click="sort">1111111111</i>
        <i class="fa el-up-icon" v-show="!downIcon" @click="sort">22222222</i> -->
    <div class="line"></div>
    <div class="hotSell" v-show="downIcon">
      <div class="header">
        <span class="Left">男频热销榜</span>
        <span class="Right" @click="sort" ref="women">女频</span>
      </div>
      <div class="hotSell_BookList" >
        <div class="BookContent" v-for="(item, index) in HotList" :key="index">
            <div class="img_url">
              <img :src="item.img_url" alt="">
            </div>
            <div class="title">{{item.title}}</div>
        </div>
      </div>
      <div class="hotSell_BookList2" >
        <div class="BookContent2" v-for="(item, index) in HotList2" :key="index">
            <div class="img_url2">
              <img :src="item.img_url" alt="">
            </div>
            <div class="right">
              <div class="title2">{{item.title}}</div>
              <div class="Info">{{item.titleInfo}}</div>
              <div class="author">{{item.author}}</div>
            </div>
            
        </div>
      </div>
    </div>

    <div class="hotSell" v-show="!downIcon">
      <div class="header">
        <span class="Left">女频热销榜</span>
        <span class="Right" @click="sort" ref="man">男频</span>
      </div>
      <div class="hotSell_BookList" >
        <div class="BookContent" v-for="(item, index) in HotList" :key="index">
            <div class="img_url">
              <img :src="item.img_url2" alt="">
            </div>
            <div class="title">{{item.title2}}</div>
        </div>
      </div>
      <div class="hotSell_BookList2" >
        <div class="BookContent2" v-for="(item, index) in HotList2" :key="index">
            <div class="img_url2">
              <img :src="item.img_url2" alt="">
            </div>
            <div class="right">
              <div class="title2">{{item.title2}}</div>
              <div class="Info">{{item.titleInfo2}}</div>
              <div class="author">{{item.author2}}</div>
            </div>
            
        </div>
      </div>
    </div>
    <div class="HotMore">
      <div class="title">查看热销榜单</div>
    </div>

    <!-- 人气榜 -->
    <!-- 男频人气榜 -->
    <div class="popularity" v-show="downIcon2">
      <div class="header">
        <span class="Left">男频人气榜</span>
        <span class="Right" @click="sort2" ref="woman">女频</span>
      </div>
      <div class="popularityBook" >
        <div class="BookContent" v-for="(item, index) in PopuList" :key="index">
            <div class="img_url">
              <img :src="item.img_url" alt="">
            </div>
            <div class="right">
              <div class="title">{{item.title}}</div>
              <div class="Info">{{item.titleInfo}}</div>
              <div class="author">{{item.author}}</div>
            </div>       
        </div>
      </div>
    </div>
    <!--  女频人气榜 -->
    <div class="popularity" v-show="!downIcon2">
      <div class="header">
        <span class="Left">女频人气榜</span>
        <span class="Right" @click="sort2" ref="man">男频</span>
      </div>
      <div class="popularityBook" >
        <div class="BookContent" v-for="(item, index) in PopuList" :key="index">
            <div class="img_url">
              <img :src="item.img_url2" alt="">
            </div>
            <div class="right">
              <div class="title">{{item.title2}}</div>
              <div class="Info">{{item.titleInfo2}}</div>
              <div class="author">{{item.author2}}</div>
            </div>       
        </div>
      </div>
    </div>
    <div class="PopuMore">
      <div class="title">查看人气榜单</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data() {
  return {
      downIcon: true,
      downIcon2: true,
      HotList:[],
      HotList2: [],
      PopuList: []
  }
},
mounted() {
  this.getRanking()
},
 methods:{
        sort() {
          //根据你的downIcon判断此时的排序是升序还是降序
          //...排序方式
          this.downIcon = !this.downIcon
          this.$refs.women.style.backgroundColor = "#F88B9B";
          this.$refs.man.style.backgroundColor = "#3657be";
        },
        sort2() {
          //根据你的downIcon判断此时的排序是升序还是降序
          //...排序方式
          this.downIcon2 = !this.downIcon2
          this.$refs.women.style.backgroundColor = "#F88B9B";
          this.$refs.man.style.backgroundColor = "#3657be";
        },
        getRanking() {
           axios.get('/api/appData').then(res => {
                console.log('Ranking', res)
                this.HotList = res.data.data.Ranking
                this.HotList2 = res.data.data.Ranking2
                this.PopuList = res.data.data.Ranking3
            })
        }
  }
}
</script>

<style lang="stylus" scoped>
*
  margin 0
  padding 0
.line
  border 4px solid #EEEEEE
.hotSell
  width 100%
  height 100%
  box-sizing border-box
  padding 0 15px
  .header
    padding-top 15px
    position relative
    .Left
      font-size 18px
      padding-left 5px
    .Right
      font-size 13px
      padding 5px 10px
      height 13px
      line-height 13px
      color #ffffff
      background-color #F88B9B
      border-radius 10px
      position absolute
      right 0
      top 16px
  .hotSell_BookList
    padding-top 20px
    .BookContent
      display table-cell
      padding-right 40px
      padding-left 10px
      .img_url
        width 70px
        height 100px
        img 
          width 100%
          height 100%
      .title
        padding-top 10px
        font-size 15px
        text-align  center
  .hotSell_BookList2
    padding-top 15px
    padding-left 10px
    .BookContent2
      display flex
      flex-direction row
      padding-bottom 20px
      .img_url2
        width 70px
        height 100px
        img 
          width 100%
          height 100%
      .right
        padding-left 10px
        .title2
          font-size 18px
          padding-bottom 8px
        .Info
          width 250px
          font-size 15px
          color #A5A5A5
          // padding-bottom 15px
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden
        .author
          font-size 10px
          color #A5A5A5
          padding-top 8px
.HotMore
  width 100%
  height 100%
  border-bottom 5px solid #EEEEEE
  border-top 3px solid #F8F8F8
  .title
    text-align center
    padding 10px
    color #60ADF2
.popularity
  width 100%
  height 100%
  box-sizing border-box
  padding 0 15px
  .header
    padding-top 15px
    position relative
    .Left
      font-size 18px
      padding-left 5px
    .Right
      font-size 13px
      padding 5px 10px
      height 13px
      line-height 13px
      color #ffffff
      background-color #F88B9B
      border-radius 10px
      position absolute
      right 0
      top 16px
  .popularityBook
    padding-top 15px
    padding-left 10px
    .BookContent
      display flex
      flex-direction row
      padding-bottom 20px
      .img_url
        width 70px
        height 100px
        img 
          width 100%
          height 100%
      .right
        padding-left 10px
        .title
          font-size 18px
          padding-bottom 8px
        .Info
          width 250px
          font-size 15px
          color #A5A5A5
          // padding-bottom 15px
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden
        .author
          font-size 10px
          color #A5A5A5
          padding-top 8px
.PopuMore
  width 100%
  height 100%
  border-bottom 5px solid #EEEEEE
  border-top 3px solid #F8F8F8
  .title
    text-align center
    padding 10px
    color #60ADF2
.ranking::after
  content ''
  height 50px
  display block
</style>
