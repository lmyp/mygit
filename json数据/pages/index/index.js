var jsonData = require('../../utils/json.js');
Page({
 data: {
 },
 //我们在这里加载本地json数据
 onLoad: function () {
  this.setData({
   //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
   dataList: jsonData.Lista
  });  
 },
})
