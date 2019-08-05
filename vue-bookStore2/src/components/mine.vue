<template>
    <div class="Mine">
        <div class="header">
            <div class="session1">
                <img src="../assets/img/tou.jpg" alt="">
                <div class="MyInfo">
                    <div class="name">梦之泪</div>
                    <div class="account">账号: m57188657</div>
                    <div class="grade">等级: 5</div>
                </div>
                <div class="btn">充值</div>
            </div>
            <div class="session2">
                <div class="left">
                    <p class="title">阅币</p>
                    <p class="number">0</p>
                </div>
                <div class="center">
                    <p class="title">礼券</p>
                    <p class="number">120</p>
                </div>
                <div class="right">
                    <p class="title">余额</p>
                    <p class="number">0.00</p>
                </div>
            </div>
            <div class="line"></div>
        </div>
        <div class="body">
            <div class="session3">
                <ul>
                    <li v-for="(item, index) in MineList" :key="index" class="List">
                        <div class="LeftIcon"><img :src="item.icon" alt=""></div>
                        <div class="title">{{item.title}}</div>
                        <div class="fuhao"></div>
                    </li>
                </ul>
            </div>
            <div class="footer">
                <p>客服热线: 123-456-789</p>
                <p>QQ群: 186789434</p>
                <p>版本:v3.2.9</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        MineList:[
            {
                icon: require('../assets/img/huodongzhongxin.png'),
                title: '活动中心'
            },
            {
                icon: require('../assets/img/yueqiahuodong-.png'),
                title: '月卡活动'
            },
            {
                icon: require('../assets/img/tubiaozhizuomoban.png'),
                title: '联系我们'
            },
            {
                icon: require('../assets/img/goumai.png'),
                title: '我的购买'
            },
            {
                icon: require('../assets/img/ICONS_-.png'),
                title: '消息通知'
            },
            {
                icon: require('../assets/img/yuedu.png'),
                title: '阅读方式'
            },
            {
                icon: require('../assets/img/bangdingshouji.png'),
                title: '绑定手机'
            },
            {
                icon: require('../assets/img/bangzhu.png'),
                title: '帮助中心'
            }
        ]
    }
},
}
</script>

<style lang="stylus" scoped>
*
    margin 0
    padding 0
.Mine
    width 100%
    .session1
        width 100%
        overflow hidden
        box-sizing border-box
        padding 20px
        padding-bottom 20px
        border-bottom 1px solid #eeeeee
        img 
            width 80px
            height 80px
            float left
            
        .MyInfo
            padding-left 20px
            float left
            .name
                font-size 18px
            .account
                font-size 15px
                color #a5aaae
                padding 5px 0
            .grade
                font-size 15px
                color #a5aaae
        .btn
            float left
            padding 10px 20px
            border-radius 20px
            background-color #6eaefe
            color #fff
            position relative
            left 40px
            top 20px
    .session2
        display flex
        flex-direction row
        justify-content space-around
        box-sizing border-box
        padding 15px 0
        .title
            font-size 16px
            padding-bottom 5px  
            color #7b8383
        .number
            color #6eaefe
            font-weight bold
            text-align center
            font-size 18px
    .line
        height 7px
        background-color #f0f1f3
    .session3
        width 100%
        ul
            list-style none
            .List
                height 50px
                line-height 50px
                display flex
                flex-direction row
                border-bottom 1px solid #eeeeee
                position relative
                .LeftIcon
                    width 25px
                    height 25px
                    padding-right 10px
                    padding-left 20px
                    img 
                        width 100%
                        height 100% 
                        position relative
                        top 6px
                .title
                    font-size 18px
                .fuhao
                    position absolute
                    right 20px
                    top 25px
                    width 12px  
                    height 12px 
                    border-left 1px solid #7b8383  
                    border-bottom 1px solid #7b8383  
                    -webkit-transform translate(0,-50%) rotate(-135deg)
    .footer
        text-align center
        padding-top 15px
    .footer::after
        content ''
        height 50px
        display block

</style>
