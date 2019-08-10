// pages/classify/classify.js
const classify_api = 'https://www.easy-mock.com/mock/5cdeb5043c2dc057d8f110f6/class/class';
// var list = require('./mock.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify: [
      { name: '有品推荐', id: 'youpin' },
      { name: '家用电器', id: 'dianqi' },
      { name: '智能家庭', id: 'zhineng' },
      { name: '家具餐厨', id: 'jiaju' },
      { name: '电视影音', id: 'dianshi' },
      { name: '运动户外', id: 'yundong' },
      { name: '日用文创', id: 'riyong' },
      { name: '服装配饰', id: 'fuzhuang' },
      { name: '鞋靴箱包', id: 'xiexue' },
      { name: '美妆个护', id: 'meizhuang' },
      { name: '手机电脑', id: 'shouji' },
      { name: '数码配件', id: 'shuma' },
      { name: '出行车品', id: 'chuxing' },
      { name: '美食酒饮', id: 'meishi' },
      { name: '医疗健康', id: 'yiliao' },
      { name: '母婴亲子', id: 'muyin' },
      { name: '宠物生活', id: 'chongwu' }
    ],
    curIndex: 0,
    toView: 'youpin',
    // headimg: "../../images/index/IMG_20190608_212458.jpg"
  },
  switchTab(e) {
    console.log(e);
    this.setData({
      toView: e.target.dataset.id,
      curIndex: e.target.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    wx.request({
      url: classify_api,
      success(res) {
        console.log(res)
        self.setData({
          detail: res.data.detail
        })
      }
    })
  },

  /**https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1380358783,1009712433&fm=26&gp=0.jpg
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