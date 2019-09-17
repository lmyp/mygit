<template>
  <div class="hello">
    <form>
      <input type="text" name="userame" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">增加</a>
      <a href="javascript:;" @click="deleteUser(userName,age)">删除</a>
      <a href="javascript:;" @click="editUser(userName,age)">编辑</a>
      <a href="javascript:;" @click="seleteUser">查询</a>
    </form>
    <div class="mysqlData">
      <div v-for="(item,index) in mysqlData" :key="index">
        {{item.name}}
        {{item.age}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// var {a} = require('../../server/api/userApi.js')
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        userName: '',
        age: '',
        mysqlData: []
      }
    },
    methods: {
      addUser() {
        var name = this.userName;
        var age = this.age;
        // 或 '/api/user/addUser'
        this.$http.post('http://localhost:3000/api/user/addUser', {
          name: name,
          age: age
        },{}).then((response) => {
          console.log(response);
        })
      },
      deleteUser(userName,age) {
        var name = this.userName;
        var age = this.age;
          // 或 '/api/user/addUser'
        this.$http.post('http://localhost:3000/api/user/deleteUser', {
            name: name,
            age: age,
            
        }).then((response) => {
            console.log('detele',response);
        })
      },
      //  deleteData: function (index, row) {
      //   this.$ajax.post('/test/delete', {
      //     id: row.id
      //   }).then(success => {
      //     this.$message(success.data.message);
      //     this.queryData()
      //   })
      // },
      editUser(userName,age) {
        var name = this.userName;
        var age = this.age;
        // 或 '/api/user/addUser'
        this.$http.post('http://localhost:3000/api/user/editUser', {
          name: name,
          age: age
        },{}).then((response) => {
          console.log('edit',response);
        })
      },
      seleteUser() {
        var name = this.userName;
        var age = this.age;
        // 或 '/api/user/addUser'
        this.$http.get('http://localhost:3000/api/user/chaxun', {
          name: name,
          age: age
        },{}).then((response) => {
          console.log(response.body);
          this.mysqlData = response.body;
        })
      }
    },
    created() {
      //  this.$http.get('http://127.0.0.1:3000/api').then((response) => {
      //     console.log('res:',response);
      //   })

// axios.get('http://localhost:3000/api/user/addUser', {})
// .then( (res) =>  {
//     console.log(res)
//      }); 

  },
    // console.log(a()); 
    
    // mounted() {
    //   this.getInfo()
    // },
   
     
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
