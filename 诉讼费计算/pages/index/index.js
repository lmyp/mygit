//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    fei3: 300,
    fei4: 150,
    condition: false,
  },
  switch1Change: function(e) {
    this.setData({
      condition: e.detail.value,
      fei3: '',
      fei4: '',
    })
  },
  formSubmit1: function(e) {
    var f = Number(e.detail.value.input1)
    var g = 0
    var h = 0
    if(f<=20000){
      g = 300;
    }else if(f>20000) {
      g = 0.005*f;
    }
    h= 0.5*g
    
    this.setData({
      fei3: g.toFixed(2),
      fei4: h.toFixed(2),
    })
  },
  formReset1: function(e) {
    this.setData({
      condition: false,
      fei: 300,
      fei: 150,
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
