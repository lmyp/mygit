// pages/detail/detail.js
// const classify_api = 'https://www.easy-mock.com/mock/5cdeb5043c2dc057d8f110f6/class/details';
var goods = null;
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
      '../../images/detail/46cd71fe02c1589614d7c93198321bfd.jpg'
    ],
    interval: 3000,
    duration: 800,
    currentTab: 0,
    showDialog: false,
    price: '',
    goods: null
  },
  switchNav (e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    })
  },
  toIndex () {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  toggleDialog: function () {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  closeDialog: function () {
    console.info("关闭");
    this.setData({
      showDialog: false
    });
    this.closeDialog();
  },
  toShopping  () {
    wx.switchTab({
      url: '/pages/cart/cart'
    })

  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let aid = options.aid;
    console.log(" id为:"+ aid);
    let that = this;
    wx.request({
      // url: 'https://30paotui.com/article/one?aid=' +aid,
       url: 'https://www.easy-mock.com/mock/5cdeb5043c2dc057d8f110f6/class/paotui?aid=' +aid,
      success(res) {
        console.log(res.data.goods[aid]);
        let xiangqing = res.data.goods[aid].content;
        goods = {
          xiangqing: xiangqing,
          swiperImgUrls: res.data.goods[aid].swiperImgUrls,
          price: res.data.goods[aid].price,
          title: res.data.goods[aid].title,
          title2: res.data.goods[aid].title2,
          aid: res.data.goods[aid].aid
        },
        that.setData({
          // xiangqing: xiangqing,
          // swiperImgUrls: res.data.goods[wid].swiperImgUrls,
          // price: res.data.goods[wid].price,
          // title: res.data.goods[wid].title,
          // title2: res.data.goods[wid].title2,
          // aid: res.data.goods[wid].aid
          goods: goods
        })
      }
    })
  },
  goodsInfoShow() {
    
  },
  addCar: function (e) { 
    // var goods = this.data.goods;
    // console.log('goods'+goods)
    // goods.isSelect=false;
    // var count = this.data.goods.count;

    // var title = this.data.goods.title;
    // if (title.length > 13) {
    //   goods.title = title.substring(0, 13) + '...';
    // }

    // // 获取购物车的缓存数组（没有数据，则赋予一个空数组）  
    // var arr = wx.getStorageSync('carts') || [];
    // console.log("杨鹏arr is", arr);
    // console.log('sv'+ goods.title)
    // const temp = {
    //   'title': wx.getStorageSync('title',goods.title),
    //   'title2': wx.getStorageSync('title2',goods.title2),
    //   'price': wx.getStorageSync('price',goods.price),
    // }
    // wx.setStorageSync('carts', [temp, ...arr]);
    // // wx.setStorageSync('carts', goods.title);
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 3000,
      success() {
        setTimeout(() => {
         
        }, 1000)
      },
      
    });
    this.closeDialog(); 
    
  
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

})