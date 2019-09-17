var models = require('../db');
var express = require('express');

var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log('add',params);
  conn.query(sql, [params.name, params.age], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
// 删除
router.post('/deleteUser', function (req, res) {
  let inputBody = req.body.name;
  console.log('inputBody',inputBody)
  // let pageSize = req.body.pageSize;
  // console.log(pageSize)
  // let sql = "SELECT * FROM user ORDER BY name DESC LIMIT "+start+","+end;
  let countSql = `DELETE  FROM user where name =${inputBody}` ;
  conn.query(countSql,(err,result) => {
    console.log('delete:',result) 
    // return result
    res.end(JSON.stringify(result))
  })
  
})
// 改数据
router.use('/editUser',function(req,res){
  let editUserName = req.body.name
  let editUserAge = req.body.age
  console.log('editname',editUserName)
  console.log('editage',editUserAge)
  let editSql = `UPDATE user SET age = ${editUserAge} where name = 8`
  conn.query(editSql,(err,result) => {
    console.log('edit',result)
  })
})
// 查询
router.get('/chaxun', function (req, res) {
  var params = req.body;
  console.log('chaxun',params.name);
  console.log('id:',req.query.id)
  console.log('name:',req.query.name)

  // let pageSize = req.body.pageSize;
  // console.log(pageSize)
  // let sql = "SELECT * FROM user ORDER BY name DESC LIMIT "+start+","+end;
  let countSql = "SELECT * FROM user ";
  conn.query(countSql,(err,result) => {
    console.log('res',result) 
    // return result
    res.end(JSON.stringify(result))
  })
  
})
// 查
// function a() {

  // var sql = 'SELECT * FROM user'
  // conn.query(sql,(err,result) => {
  //   console.log('res',result) 
  //   // return result
  // })
// var Sql = 'UPDATE user  set age =60  where name = 8'
// conn.query(Sql,(err,result) => {
//   console.log('edit',result)
// })
module.exports = router;
