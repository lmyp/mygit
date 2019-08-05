<template>
    <div class="book-list">
        <div class="header">
            <div class="heading">{{ heading }}</div>
            <div class="more">更多...</div>
        </div>
        <div class="book-items">
            <div class="book" 
                 v-for="(book,id) in books" :key="id"
                 tag="div"
                 
                 @click="$emit('select', book), goDetail(book.id)"
                 >
                <div class="cover">
                    <img :src="book.img_url"/>
                </div>
                <div class="title">{{ book.title }}</div>
                <div class="authors">{{ book.authors }}</div>
            </div>
        </div>

        <div class="header">
            <div class="heading">{{ heading2 }}</div>
            <div class="more">更多...</div>
        </div>
        <div class="book-items">
            <div class="book" 
                 v-for="(book,id) in books2" :key="id"
                 tag="div"
                 
                 @click="$emit('select', book), goDetail(book.id)"
                 >
                <div class="cover">
                    <img :src="book.img_url"/>
                </div>
                <div class="title">{{ book.title }}</div>
                <div class="authors">{{ book.authors }}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        data() {
            return {
                
            }
        },
        //props是子组件访问父组件数据的唯一接口。
        props: ['heading','heading2', 'books', 'books2'],
        filters: {
            // join(args){
            //     return args.join(',')
            // }
        },
        methods: {
            goDetail(id) {
                this.$router.push({
                    path: '/bookDetail/:id',
                    query: {
                        id:id
                    }
                })
            }
        },
    }
</script>
<style lang="stylus" scoped>
.book-list 
  margin 0 14px
  .header 
    display table
    width 100%
    border-bottom 1px solid #efefef
    padding 20px 12px 12px 5px
    .heading 
      display table-cell
      padding-left 8px
      font-size 18px
      border-left 3px solid #6EB4FC
    .more 
      display table-cell
      text-align right
      vertical-align middle
      font-size 15px
      color #cccccc
      padding-right 14px
  .book-items 
    display table
    width 100%
    padding-top 12px
   .book 
    font-size 10px
    text-align center
    float left
    width 33%
    margin 12px auto
    .cover 
      margin-left 20px
      width 60px
      height 80px
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
    .authors
      margin 5px auto
      width 100px
      text-overflow ellipsis
      overflow hidden
      white-space nowrap
      color #898989
      font-size 13px
      margin-top 10px
      text-align center
.book-list::after
    content ''
    height 50px
    display block

</style>