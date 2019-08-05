<template>
    <div class="free">
        <div class="line"></div>
        <div class="freeList">
            <div class="head">
                <span class="heading">{{heading}}</span>
                <span class="time">
                    <span class="hr common">{{hr}}</span>:
                    <span class="min common">{{min}}</span>:
                    <span class="sec common">{{sec}}</span>
                </span>
                <span class="number">23本</span>
                
            </div>
            <div class="bodyContent">
                <div class="freeTime" v-for="(item, id) in freeList" :key="id" tag="div">
                    <div class="img_url">
                        <img :src="item.img_url" alt="">
                    </div>
                    <div class="title">{{item.title}}</div>
                </div>
            </div>
        </div>
        <div class="freeList">
            <div class="head">
                <span class="heading">{{heading2}}</span>
                <span class="time">
                    <span class="hr common">{{hr}}</span>:
                    <span class="min common">{{min}}</span>:
                    <span class="sec common">{{sec}}</span>
                </span>
                <span class="number">32本</span>
                
            </div>
            <div class="bodyContent">
                <div class="freeTime" v-for="(item, id) in freeList2" :key="id" tag="div">
                    <div class="img_url">
                        <img :src="item.img_url" alt="">
                    </div>
                    <div class="title">{{item.title}}</div>
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
export default {
data() {
    return {
        img_url:'',
        title: '',
        hr: 0, min: 0, sec: 0
   
    }
},
    mounted: function () {
        this.countdown()
  },
  methods: {
    countdown: function () {
      const end = Date.parse(new Date('2019-12-31'))
      const now = Date.parse(new Date())
      const msec = end - now
    //   let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
    //   this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      setTimeout(function () {
        that.countdown()
      }, 1000)
    }
  },
    props: [ 'freeList', 'freeList2','heading', 'heading2']
}
</script>

<style lang="stylus" scoped>
*
    margin 0
    padding 0
.line
    border 4px solid #EEEEEE
.freeList
    margin 0 14px
    .head
        display table
        width 100%
        border-bottom 1px solid #efefef

        .heading 
            display table-cell
            padding 12px
            font-size 18px
        .time
            position relative
            right 50px
            bottom 2px
            .common
                background-color #4193EF
                color #fff
                font-size 13px
                padding 2px
                border-radius 2px
        .number
            display table-cell
            text-align right
            vertical-align middle
            font-size 10px
            color #B0B0B0
            font-size 15px
            padding-right 14px
            position relative
        .number::after
            content: ''
            position absolute
            bottom 14px
            width 8px  
            height 8px 
            border-left 1px solid #B0B0B0  
            border-bottom 1px solid #B0B0B0  
            -webkit-transform translate(0,-50%) rotate(-135deg)
    .bodyContent
        display table
        width 100%
        padding-top 12px
    
        .freeTime
            font-size 10px
            text-align center
            float left
            width 33%
            margin 12px auto
            .img_url
                margin-left 20px
                width 70px
                height 100px
                img 
                    width 100%
                    height 100%
            .title
                margin 5px auto
                width 100px
                font-size 15px
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
.footer::after
    content ''
    height 50px
    display block
</style>
