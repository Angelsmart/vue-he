<template>
  <div id="admin">
    父级：紫漠大仙
    <Loop :list="list" @send="change"></Loop>
    <div>{{ message }}--{{ userName }}</div>
    <Page1></Page1>
    <Page2></Page2>
    <router-link to="/income">去income</router-link>
    <form>
      <input v-model="userList.id" placeholder="请输入ID" />
      <input v-model="userList.userName" placeholder="请输入用户名" />
      <input v-model="userList.age" placeholder="请输入年龄" />
      <button type='button' @click="addData">提交数据</button>
    </form>
  </div>
</template>

<script>
import Loop from './client/loop';
import Page1 from './client/page1';
import Page2 from './client/page2';
export default {
  name: 'admin',
  components:{
    Loop,
    Page1,
    Page2
  },
  data(){
    return {
      list:[1,2,3,5,4,8],
      message:'',
      userName:'',
      userList:{
        id:'',
        userName:'',
        age:''
      }
    }
  },
  methods:{
    addData(){
      const params = {
        id:this.userList.id,
        userName:this.userList.userName,
        age:this.userList.age
      }
      this.$http.post('/addUser',params)
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    change(msg,userName){
      this.message = msg;
      this.userName = userName;
    }
  },
  mounted(){
    this.$http.get('/hot')
    .then(res =>{
      // console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style>
#admin {
  width:100%;
  height:100%;
  background:#ccc;
}
</style>
