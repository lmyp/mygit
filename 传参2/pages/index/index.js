//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    testList: [
      {
        name: "测试1",
        element: "测试1的内容",
        isHighLighted: true,
        des:'这是用来显示的内容----测试1',
        id: 1
      },
      {
        name: "测试2",
        element: "测试2的内容",
        des: '这是用来显示的内容----测试2',
        isHighLighted: false,
        id: 2
      }],


  },
  f0: function (event) {
    var id = event.currentTarget.dataset.id
    console.log(id)
    var name = event.currentTarget.dataset.name
    console.log(name)
    var des = event.currentTarget.dataset.des
    console.log(des)
 
    wx.navigateTo({
      url: '../detail/detail?id=' + id + '&des=' + des + '&name=' + name,
    })
 
  },
  onLoad: function () {
  
  },
 
})
