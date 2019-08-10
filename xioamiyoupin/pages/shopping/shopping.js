
  // data: {
  //   hasList: false,
  //   goods:[
  //     {
  //       image:'../../images/shoppingImg/5b0cdebeN3312b70b.jpg',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //     {
  //       image:'../../images/shoppingImg/67859ce154a3b4df.jpg',
  //       name: "小米AI音箱",
  //       price: 299
  //     },
  //     {
  //       image:'../../images/shoppingImg/5cd52adcN424b521c.png',
  //       name: "三姿多功能健身椅",
  //       price: 999
  //     },
  //     {
  //       image:'../../images/shoppingImg/fb14b3b695d7d905.jpg',
  //       name: "防震运动鞋",
  //       price: 249
  //     },
  //     {
  //       image:'',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //     {
  //       image:'',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //     {
  //       image:'',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //     {
  //       image:'',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //     {
  //       image:'',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //     {
  //       image:'',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //     {
  //       image:'',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //     {
  //       image:'',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //     {
  //       image:'',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //     {
  //       image:'',
  //       name: "蓝牙小音箱",
  //       price: 129
  //     },
  //   ]
  // },

 // pages/cart1/cart1.js
 Page({
  data: {
    hidden:null,
    hiddenEmpty:true,
    isAllSelect: false,
    totalMoney: 0,
    // 商品详情介绍
    carts: [
      {
        id: 1,
        pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
        name: "日本资生堂洗颜",
        price: 200,
        isSelect: false,
        // 数据设定
        count: 2
      },
      {
        id: 2,
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
        name: "倩碧焕妍活力精华露",
        price: 340,
        isSelect: false,
        // 数据设定
        count: 1
      },
     
    ],
  },

  //勾选事件处理函数  
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值  
    var Allprice = 0, i = 0;
    let id = e.target.dataset.id,

      index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + (this.data.carts[index].price * this.data.carts[index].count);
    }
    else {
      this.data.totalMoney = this.data.totalMoney - (this.data.carts[index].price * this.data.carts[index].count);
    }
    //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + (this.data.carts[index].price * this.data.carts[index].count);
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
  },
  //全选
  allSelect: function (e) {
    //处理全选逻辑
    let i = 0;
    if (!this.data.isAllSelect) {
      this.data.totalMoney = 0;
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].price * this.data.carts[i].count);

      }
    }
    else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  // 去结算
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  //数量变化处理
  handleQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.data.carts[componentId].count.quantity = quantity;
    this.setData({
      carts: this.data.carts,
    });
  },
  /* 减数 */
  delCount: function (e) {
    var index = e.target.dataset.index;
    console.log("刚刚您点击了加一");
    var count = this.data.carts[index].count;
    // 商品总数量-1
    if (count > 1) {
      this.data.carts[index].count--;
    }
    // 将数值与状态写回  
    this.setData({
      carts: this.data.carts
    });
    console.log("carts:" + this.data.carts);
    this.priceCount();
  },
  /* 加数 */
  addCount: function (e) {
    var index = e.target.dataset.index;
    console.log("刚刚您点击了加+");
    var count = this.data.carts[index].count;
    // 商品总数量+1  
    if (count < 10) {
      this.data.carts[index].count++;
    }
    // 将数值与状态写回  
    this.setData({
      carts: this.data.carts
    });
    console.log("carts:" + this.data.carts);
    this.priceCount();
  },
  priceCount: function (e) {
    this.data.totalMoney = 0;
    for (var i = 0; i < this.data.carts.length; i++) {
      if (this.data.carts[i].isSelect == true) {
        this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].price * this.data.carts[i].count);
      }

    }
    this.setData({
      totalMoney: this.data.totalMoney,
    })
  },
  delGoods: function (e) {
    this.data.goods.splice(e.target.id.substring(3),1);
    // 更新data数据对象  
    if (this.data.goods.length > 0) {
      this.setData({
        goods: this.data.goods
      })
      wx.setStorageSync('cart', this.data.goods);
      this.priceCount();
    } else {
      this.setData({
        cart: this.data.goods,
        iscart: false,
        hidden: true,
      })
      wx.setStorageSync('cart', []);
    }
  }
});
