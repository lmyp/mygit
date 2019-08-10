// pages/detail/detail.js
// const classify_api = 'https://www.easy-mock.com/mock/5cdeb5043c2dc057d8f110f6/class/details';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImgUrls: [
      '../../images/detail/c961b728b03aa3515cdf09455a7bfc87.jpg',
      '../../images/detail/b2887c1ad18b8fcd9628425ee589c505.jpg',
      '../../images/detail/032fde73f3437838df6f52e3f19ef69f.jpg',
      '../../images/detail/a5f503321b6f86ecf37611678a640618.jpg',
      '../../images/detail/46cd71fe02c1589614d7c93198321bfd.jpg',
    ],
    interval: 3000,
    duration: 800,
    currentTab: 0
  },
  switchNav (e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    })
  },
  toIndex () {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
  toShopping  () {
    wx.navigateTo({
      url: '/pages/shopping/shopping'
    })
  },
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex      
    })
  },
  onBindAnimationFinish: function ({detail}) {
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let aid = options.id;
    // console.log("id为:"+aid);
    // let self = this;
    // wx.request({
    //   url: 'https://www.easy-mock.com/mock/5cdeb5043c2dc057d8f110f6/class/class/?aid=' +aid,
    //   success(res) {
    //     console.log(res)
    //     self.setData({
    //       detail: res.data.detail[aid]
    //     })
    //   }
    // })
    // let wid = options.aid;
    // console.log(" id为:"+ wid);
    // let that = this;
    // wx.request({
    //   // url: 'https://30paotui.com/article/one?aid=' +aid,
    //    url: 'https://www.easy-mock.com/mock/5cdeb5043c2dc057d8f110f6/class/paotui?aid=' +wid,
    //   success(res) {
    //     console.log(res.data.data[wid]);
    //     let xiangqing = res.data.data[wid].content;
    //     // console.log("文章详情如下");
    //     // // console.log(xiangqing);
    //     that.setData({
    //       xiangqing: xiangqing,
    //       swiperImgUrls: res.data.data[wid].swiperImgUrls
    //     })
    //   }
    // })
    
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