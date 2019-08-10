// pages/MoreGoods/moregoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    MoreGoods: [
      {
        aid:0,
        goods_title:'男简约束脚针织长裤',
        goods_img:'https://img.youpin.mi-img.com/800_pic/55baffc489e21fdf8d44ba92c27afd15.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
        goods_title2:'混纺面料，稳定抽绳',
        goods_price:'￥99'
      },{
        aid:1,
        goods_title:'云米便携真空保温杯',
        goods_img:'https://img.alicdn.com/imgextra/i4/125508168/TB2razswxuTBuNkHFNRXXc9qpXa_!!0-saturn_solar.jpg_240x240xz.jpg_.webp',
        goods_title2:'24小时长效保温',
        goods_price:'￥59'
      }, {
        aid:2,
        goods_title:'美的活水32DQ热水器',
        goods_img:'https://img.youpin.mi-img.com/800_pic/27158dfe88dd03a04f62701717057ece.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
        goods_title2:'一款可以洗澡热水器',
        goods_price:'￥899'
      }, {
        aid:4,
        goods_title:'小米无线充电宝',
        goods_img:'https://img.youpin.mi-img.com/800_pic/bfa2f4dc5bfcd813f8bf004d192fa181.png?t=webp',
        goods_title2:'支持10W无线快充',
        goods_price:'￥149'
      },{
        aid:4,
        goods_title:'魔鬼辣条5袋',
        goods_img:'https://img.youpin.mi-img.com/800_pic/dc3a731317d2f8cfc683ff3c2939ab0c.png?t=webp',
        goods_title2:'鲜香火辣，爽口易嚼',
        goods_price:'￥8.9'
      },{
        aid:5,
        goods_title:'柚家竹纤维纸面巾',
        goods_img:'https://img.youpin.mi-img.com/800_pic/1595729a32bf1819f98f3339fda9a415.png?t=webp',
        goods_title2:'清新本色，有效抑菌',
        goods_price:'￥34.9'
      },{
        aid:6,
        goods_title:'空谷自动伞WD1',
        goods_img:'https://img.youpin.mi-img.com/800_pic/b3029c8cdace8810312971a4ea75c466.png?t=webp',
        goods_title2:'强力防风，无膜防晒',
        goods_price:'￥47'
      },{
        aid:7,
        goods_title:'90分超大便捷全能伞',
        goods_img:'https://img.youpin.mi-img.com/800_pic/d3ca9efc86b93002c4772fd4517bc39a.png?t=webp',
        goods_title2:'超大遮蔽面积，轻量便携',
        goods_price:'￥49'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goDetail(event) {
    let hid = event.currentTarget.dataset.aid;
    console.log('当前点击的标题对应的id'+ hid);
    wx.navigateTo({
      url: '../detail/detail?aid='+hid
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})