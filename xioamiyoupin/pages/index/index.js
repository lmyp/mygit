// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTap:false,
    swiperImgUrls:[
      '/images/index/a01.png',
      '/images/index/a02.png',
      '/images/index/a03.png',
      '/images/index/a04.png',
      '/images/index/a05.png',
     
    ],
    menus:[
      {
        img: '/images/index/新品.jpg',
        theme: '每日新品'
      },
      {
        img: '/images/index/众筹.jpg',
        theme: '小米众筹'
      },
      {
        img: '/images/index/限时.jpg',
        theme: '限时抢购'
      },
      {
        img: '/images/index/热销.jpg',
        theme: '热销榜单'
      },
      {
        img: '/images/index/逛逛.jpg',
        theme: '随便逛逛'
      },
    ],
    goodsLists:[
      { 
        goodsId: 0,
        goodsImg: 'https://img.youpin.mi-img.com/800_pic/faf84dbcbdff2233f4e4248221e2df56.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
        shopTitle: '《变形金刚5》限量版中号大黄蜂',
        shopDescribe: '爱Ta就送Ta大黄蜂',
        shopPrice: 3699
      },
      {
        goodsId: 1,
        goodsImg: 'https://img.youpin.mi-img.com/800_pic/fc3feb49a0cafa9237d69b64f02fba92.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
        shopTitle: '《变形金刚5》限量版中号擎天柱',
        shopDescribe: '正版授权，古法铸造，手工制作',
        shopPrice: 3699
      },
      {
        goodsId: 2,
        goodsImg: 'https://img.youpin.mi-img.com/goods/091ee66411c9502363f5487a893d634b.jpg?_s=ks3',
        shopTitle: 'bcase - 火箭灭蚊灯',
        shopDescribe: '守护童趣 安心入睡',
        shopPrice: 89
      },
      {
        goodsId: 3,
        goodsImg: 'https://img.youpin.mi-img.com/800_pic/20f7e75e7f6ea38491e0492b67175d67.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
        shopTitle: '铜师傅金韵天成系列儿童桌椅家具',
        shopDescribe: '可定制的儿童专属精致家具',
        shopPrice: 529
      },
      {
        goodsId: 4,
        goodsImg: 'https://img.youpin.mi-img.com/800_pic/4f67226e777d3ad86e0cfed40c9b43f8.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
        shopTitle: '凡客沙滩风系列T恤（男女款）',
        shopDescribe: '全棉面料，数码印花，日常百搭',
        shopPrice: 59
      },
      {
        goodsId: 5,
        goodsImg: 'https://img.youpin.mi-img.com/800_pic/41d0a092ed9eb4e7bfdbe5e84405c562.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
        shopTitle: '米家互联网空调C1（一级能效）',
        shopDescribe: '1.5匹，全直流变频，高效制冷/热',
        shopPrice: 2369
      },
      {
        goodsId: 6,
        goodsImg: 'https://img.youpin.mi-img.com/800_pic/436f2073f7e39118cc538172e9788e51.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
        shopTitle: 'Guildford复古手持小风扇',
        shopDescribe: '还原自然风，静音运行',
        shopPrice: 72
      },
      {
        goodsId: 7,
        goodsImg: 'http://img.youpin.mi-img.com/800_pic/101974_3rw9vco7sl2ij.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
        shopTitle: '睿米手持无线吸尘器',
        shopDescribe: '米家APP控制，18500pa风压、115w吸入功率',
        shopPrice: 1519
      },
      {
        goodsId: 8,
        goodsImg: 'https://img.youpin.mi-img.com/800_pic/f4064fb2f2c2f8bcf214947cf27569bd.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
        shopTitle: '云米互联网冰箱 21Face 对开门428L',
        shopDescribe: '21”大屏幕，428L大容量，AI语音控制',
        shopPrice: 2999
      },
      {
        goodsId: 9,
        goodsImg: 'https://img.youpin.mi-img.com/goods/1c62aefe82127b689ea82d40fc9e841c.jpg?_s=ks3',
        shopTitle: 'THE NORTH FACE 2018款户外跑步鞋',
        shopDescribe: '人体工学设计，减震防滑中底，高弹针织鞋面',
        shopPrice: 599
      }
    ],
    interval: 3000,
    duration: 800,
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  TomoreDetail() {
    wx.navigateTo({
      url: '/pages/MoreGoods/moregoods'
    })
  },
  onShow(e){
    this.setData({
      isTap:false
    });
  },
  //事件处理函数
  toSearch(e){
    this.setData({
      isTap:true
    });
    wx.navigateTo({
      url: "../search/search"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {
  //   console.log('加载更多')
  //   setTimeout(() => {
  //     this.setData({
  //       isHideLoadMore: false,
  //       goodsLists: [
  //         {
  //           goodsId: 11,
  //           goodsImg: 'https://img.youpin.mi-img.com/800_pic/436f2073f7e39118cc538172e9788e51.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
  //           shopTitle: 'Guildford复古手持小风扇',
  //           shopDescribe: '还原自然风，静音运行',
  //           shopPrice: 72
  //         },
  //         {
  //           goodsId: 12,
  //           goodsImg: 'http://img.youpin.mi-img.com/800_pic/101974_3rw9vco7sl2ij.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
  //           shopTitle: '睿米手持无线吸尘器',
  //           shopDescribe: '米家APP控制，18500pa风压、115w吸入功率',
  //           shopPrice: 1519
  //         },
  //         {
  //           goodsId: 13,
  //           goodsImg: 'https://img.youpin.mi-img.com/800_pic/f4064fb2f2c2f8bcf214947cf27569bd.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
  //           shopTitle: '云米互联网冰箱 21Face 对开门428L',
  //           shopDescribe: '21”大屏幕，428L大容量，AI语音控制',
  //           shopPrice: 2999
  //         },
  //       ],
  //     })
  //   }, 1000)
  // },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})