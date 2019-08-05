<template>
    <div class="homePage">
      <div class="swiper">

      
      <swiper :options="swiperOption">
    　　<swiper-slide><img src="../assets/img/mmexport1562074876395.jpg" alt=""></swiper-slide>
    　　<swiper-slide><img src="../assets/img/mmexport1562074880083.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/mmexport1562074883421.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/mmexport1562074886357.jpg" alt=""></swiper-slide>
    　　<div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </div>
      <div class="session2"> 
         <div class="session2-content" v-for="(item, index) in imgs" :key="index">
          <img :src="item.icon" alt="">
          <span class="text">{{item.text}}</span>
        </div> 
      </div>
      <div class="session3">
        <v-book-list :books="PageData" :books2="PageData2" heading="最新更新" heading2="热销爽文" @select="preview($event)">
        </v-book-list>
      </div>
      <!-- <div class="session4">
        <ul>
          <li v-for="(item,id) in datas"  :key="id">
            <div class="name" @click="toDetail(item.id)">{{item.name}}</div>
          </li>
        </ul>
      </div> -->
    </div>
    
</template>

<script>
import axios from 'axios'
import list from '@/components/booklist'
export default {
  data() {
    return {
      datas: [],
     
      PageData: [],
      PageData2: [],
      swiperOption: {
　　     pagination: {
　　　　    el: '.swiper-pagination',
　　　　    clickable: true // 允许点击小圆点跳转
　　      },
　　     autoplay: {
          delay: 3000,
　　　　   disableOnInteraction: false // 手动切换之后继续自动轮播
        },
　　     loop: true,
      　 navigation: {
      　　　　nextEl: '.swiper-button-next',
      　　　　prevEl: '.swiper-button-prev'
      　　}
      },
      imgs: [
        {
          icon:require('../assets/img/shouye.jpg'),
          text: '首页'
        }, 
        {
          icon:require('../assets/img/bangdan.jpg'),
          text: '榜单'
        },
        {
          icon:require('../assets/img/huyuan.jpg'),
          text: '会员'
        },
        {
          icon:require('../assets/img/wanjie.jpg'),
          text: '完结'
        },
        {
          icon:require('../assets/img/chuban.jpg'),
          text: '出版'
        } 
      ]
    }
    },
    mounted() {
        this.setDetail()
    },
    methods:{

            // this.page_data = faker.getHomeData()
    setDetail() {
            axios.get('/api/appData').then(res => {
                console.log(res)
                this.PageData = res.data.data.promotions.slice(0,6)
                this.PageData2 = res.data.data.promotions.slice(6,12)
                // this.datas = res.data.data.citys
            })
        },
         preview (book) {
                this.selected = book
                // this.$refs.dialog.open()
            },
      // toDetail(id) {
      //   console.log(id)
      //   this.$router.push({
      //     // name: 'bookDetail',
      //     path: '/bookDetail/:id',
      //     query: {
      //       id: id
      //     }
          
      //   })
      // }
       
    },
    components: {
      'v-book-list': list
    },
}
</script>

<style>
@import '../assets/css/swiper.min';
.homePage {
  height: 650px;
  position: relative;
  top: -40px;
}
.swiper {
    height: 220px;
    overflow: hidden;
    position: relative;
    /* bottom: 40px; */
}
.swiper-container {
    /* width: 100%; */
    margin: 0;
    padding: 0;
    width: 140%;
    position: absolute;
    left: -20%;
    top:0;
    border-radius: 0 0 50% 50%;
  }
  .swiper-wrapper {
    height: 220px;
    
  }
  .swiper-slide img {
    max-width: 100%;  
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    background: #fff;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: center;
  }
.session2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.session2-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
}
.session2-content img {
  width: 35px;
  height: 35px;
  padding: 10px 0;
}
.session2-content .text {
  font-size: 15px;
  color: #acabb1;
  /* color: red; */
  /* position: relative; */
  /* top: 10px; */
}
.session3 {
  height: 400px;
}
</style>
