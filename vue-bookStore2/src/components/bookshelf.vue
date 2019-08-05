<template>
  <div class="bookList">
    <ul v-if="books.length > 0">
      <li v-for="(item, i) in books" :key="i" class="bookContent">
        <div class="bookImg">
          <img :src="item.img_url" alt="">
        </div>
        <div class="book-right">
          <div class="title">{{item.title}}</div>
          <div class="authors">作者:{{item.authors}}</div>
        </div>
        <span class="detail" @click="goDelete(item.id, i)"><img src="../assets/img/删 除.png" alt=""></span>
      </li>
     
    </ul>
    <ul v-else>
      <div class="hiddenContent">
        <div class="Img_url">
          <img src="../assets/img/图书.png" alt="">
        </div>
        <p class="title">你的书架是空的哟!</p>
      </div>
    </ul>
  </div>
</template>


<script>
// import { books } from '../../../../5/vue测试/vue-guapi-master/src/components/api/api';
export default {
    data() {
        return {
          img_url: '',
          title: '',
          authors: '',
          books: [],
          listShow:true
        }
    },
    created() {
        this.getbook();
    },
    methods: {
        getbook() {
      // let bookidArray=[]
            // var carbook = JSON.parse(window.localStorage.getItem("book") || "{}");
            // this.title.push(carbook)
            // for (let i in carbook) {
            //     this.books.push(carbook[i]);
            // }
        //      var id = this.$route.query.id;
        // console.log('id:'+id)
            var bookInfo = JSON.parse(window.localStorage.getItem('book')|| '{}')
            console.log('bookInfo:',bookInfo)
             for (let i in bookInfo) {
        this.books.push(bookInfo[i]);
      }
            // this.books = bookInfo[id]
            // this.title = bookInfo[0].title
            // this.img_url= bookInfo.img_url
            // this.authors = bookInfo.authors
        },
        goDelete(item, i) {
          var del = JSON.parse(window.localStorage.getItem("book") || "{}");
                // MessageBox.confirm('确定要从书架中删除').then(action => {
                delete del[item]
                delete this.books[i]
            localStorage.setItem('book', JSON.stringify(del))
                    window.location.reload() 
             
          // })
        }
    },
}
</script>

<style lang="stylus" scoped>
.bookList 
  width 100%
  ul
    // margin-left 20px
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
        padding-top 20px
        font-size 16px
    .detail
      width 25px
      height 25px
      position absolute
      right 40px
      top 20px
      img 
        width 100%
        height 100%
  ul
    .hiddenContent
      width 100%
      text-align center
      position absolute
      top 50%
      margin-top -100px
      .Img_url
        width 120px
        height 100px
        display inline-block
        img 
          width 100%
          height 100%
      .title
        font-size 18px
</style>
