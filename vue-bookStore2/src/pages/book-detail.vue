<template>
    <div class="bookDetail">
        <div class="book-head" @click="goBack">
            <div class="content">
                <span class="fuhao"></span>
                <span class="share">分享</span>
            </div>
        </div>
        <div class="book-content">
            <div class="bookImg">
                <img :src="bookImg" alt="">
            </div>
            <div class="right-desc">
                <div class="title">{{title}}</div>
                <div class="author">唐家三少</div>
                <div class="words">227万字</div>
            </div>
        </div>
        <div class="btn">
           <span class="btn1" @click="addCar">加入书架</span>
           <span class="btn2">立即阅读</span>
        </div>
        <div class="introduction">
            <div class="book-introduction">
                    大陆传奇,一站成名;凤凰圣女,风火流星神界刀法;双升融合,金阳蓝月,雷霆之怒,这里有魔法,没有斗气
                    ,没有武术。唐门创立万年之后的斗罗大陆之后,唐门式微。一代天骄横空出世,新一代史莱克七怪能否重振唐门,
                    谱写一曲绝世唐门之歌？
            </div>
            <div class="new">
                <img src="../assets/img/最新资讯.png" alt="">
                <span class="zuixin">最新</span>
                <span class="chapter">第1001章 鸿蒙篇3</span>
                <span class="time">20小时前</span>
                <span class="huhao"></span>
            </div>
            <div class="directory">
                <img src="../assets/img/目录.png" alt="">
                <span class="mulu">目录</span>
                <span class="chapte">共1221章</span>
                <span class="huhao"></span>
            </div>
            <div class="classify">
                <span class="calss1">古代言情</span>
                <span class="calss2">穿越</span>
                <span class="calss3">言情</span>
                <span class="calss4">古代</span>
            </div>
        </div>
        <div class="line"></div>
        <div class="book-footer">
            <div class="evalution">
                <span class="eval">书友评价</span>
                <img src="../assets/img/写.png" alt="">
                <span class="write">写书评</span>
            </div>
            <div class="user-evalution">
                <div class="user-info">
                    <img src="../assets/img/tou.jpg" alt="">
                    <span class="userName">书友1568793215</span>
                    <div class="detail">一看就够,跟新很快</div>
                </div>
            </div>
        </div>
        <!-- <div class="citys" v-for="(item,id) in citys" :key="id"> -->
           <!-- <div class="com">我是: {{company}}</div> -->
        <!-- </div> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'bookDetail',
    data() {
        return {
            // company: '',
            bookImg: '',
            title: '',
            authors: '',
            bookInfo: [],
            bookList: [],
            carbook: []
        }
    },
    created() {
    //   this.getData()
    
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        addCar() {
            var book1=this.bookInfo
            // console.log('bookID', book1.id)
            console.log('book1', book1)
            var carbook = JSON.parse(window.localStorage.getItem('book') || '{}')
            console.log('carbook', carbook)
            carbook[this.bookInfo.id] ={
                "title":this.title,
                "id" : this.bookInfo.id,
                "img_url": this.bookImg,
                "authors": this.authors
            }
            // let gifts = localStorage.getItem("book") ? JSON.parse(localStorage.getItem("book")): {};
            // console.log('giftId',gifts.id)
            // console.log('bookid',book1[id])
            // var carbook = JSON.parse(window.localStorage.getItem('book') || '{}')
            // var carbook = {
            //     title: title
            // }
            window.localStorage.setItem('book', JSON.stringify(carbook))
        //    var carbook = window.localStorage.setItem('book',JSON.stringify(book1))
        //    chulaile
        }
        
    },
    mounted() {
        
        var aid = this.$route.query.id;
        console.log('aid:'+aid)
        let that = this;
        var id = that.$route.query.id;
        console.log('id:'+id)
        axios.get('/api/appData',).then(res => {
            let datas = res.data.data.citys[id-1]
            let bookInfo = res.data.data.promotions[id-1]
            let bookList = res.data.data.promotions
            console.log('datas:')
            console.log(datas)
            // that.company = datas.company
            console.log('bookInfo:')
            console.log(bookInfo)
            that.bookList = bookList
            that.bookInfo = bookInfo
            that.title = bookInfo.title
            that.bookImg = res.data.data.promotions[id-1].img_url
            that.authors = bookInfo.authors
            
        })
       
    },
}
</script>

<style lang="stylus" scoped>
    .bookDetail
        width 100%
        height 100%
        .book-head
            width 100%
            height 170px
            background-color #292e3d
            margin-bottom -110px
            .content
                padding 30px 0                                                                                                         
            .fuhao
                position absolute
                left 20px
                font-size 15px
                width 15px  
                height 15px 
                line-height 15px
                border-left 1px solid #fdffff  
                border-bottom 1px solid #fdffff  
                -webkit-transform translate(0,-50%) rotate(45deg)
            .share
                position absolute
                top 20px
                right 20px
                color #fdffff
    // .book-bd
    //     width 100%
    //     background-color #bde0f9
        
        .book-content
            box-sizing border-box
            padding 0 20px
            display flex
            flex-direction row
           
            .bookImg
                width 100px
                height 140px   
                img 
                    width 100%
                    height 100%
            .right-desc
                padding-left 20px
                padding-top 10px
                .title
                    color #fcffff
                    font-weight bold 
                    font-size 20px
                .author
                    font-size 17px
                    color #23826d
                    padding 14px 0
                .words
                    font-size 17px
                    color #fcffff
        
        .btn 
            width 100%
            margin-top 20px
            display flex
            justify-content space-around
            .btn1
                color #3BD5A6
                padding 10px 25px
                font-size 16px
                line-height 16px
                border 1px solid #3BD5A6

            .btn2
                color #fff
                font-size 16px
                line-height 16px
                padding 10px 25px
                background-color #00C98C
                
        .introduction
            box-sizing border-box
            padding 0 20px
            .book-introduction
                padding-top 25px
                font-size 16px
                color #2d2d2d
                overflow hidden
                text-overflow ellipsis
                display -webkit-box   
                -webkit-box-orient vertical
                -webkit-line-clamp 4
            .new
                padding-top 35px
                position relative
                padding-bottom 18px
                border-bottom 1px solid #e5e5e5
                img 
                    width 15px
                    height 15px
                    padding-right 8px
                .zuixin
                    color #2d2d2d
                    padding-right 18px
                .chapter
                    color #959595
                    font-size 15px
                .time
                    color #95c2f4
                    font-size 15px
                    padding-left 45px
                .huhao
                    position absolute
                    right 0
                    top 45px
                    width 8px  
                    height 8px 
                    border-left 1px solid #959595  
                    border-bottom 1px solid #959595  
                    -webkit-transform translate(0,-50%) rotate(-135deg)
            .directory
                padding 12px 0
                border-bottom 1px solid #e5e5e5
                position relative
                img 
                    width 14px
                    height 14px
                    padding-right 8px
                .mulu
                    color #2d2d2d
                    padding-right 18px
                .chapte
                    color #959595
                    font-size 15px
                .huhao
                    position absolute
                    right 0
                    top 23px
                    width 8px  
                    height 8px 
                    border-left 1px solid #959595  
                    border-bottom 1px solid #959595  
                    -webkit-transform translate(0,-50%) rotate(-135deg)
            .classify
                padding 15px 0
                span 
                    padding 5px 10px 
                    margin-right 5px
                .calss1
                    border 1px solid #f9cfce
                    border-radius 2px
                    color #f9cfce
                .calss2
                    border 1px solid #5dcea9
                    border-radius 2px
                    color #5dcea9
                .calss3
                    border 1px solid #7facd2
                    border-radius 2px
                    color #7facd2
                .calss4
                    border 1px solid #f0c684
                    border-radius 2px
                    color #f0c684
        .line
            border 6px solid #f0f0f1
        .book-footer
            width 100%
            .evalution
                width 100%
                position relative
                padding-top 15px
                padding-bottom 15px
                border-bottom 1px solid #e9e9e9
                .eval
                    color #383838
                    font-size 16px
                    padding-left 16px
                    border-left 4px solid #22b382
                    
                img
                    width 20px
                    height 20px
                    position absolute 
                    right 75px
                .write
                    position absolute
                    right 20px
                    color #22b382
            .user-evalution
                width 100%
                height 200px
                .user-info
                    padding-top 20px
                    img 
                        width 35px
                        height 35px
                        border-radius 50%
                        margin-left 20px
                        margin-right 10px
                    .userName
                        color #969696
                        position relative
                        top -12px
                    .detail
                        padding-left 68px

</style>
