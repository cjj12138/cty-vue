<template>
  <el-form ref="form" :model="userInfo" style="
    width: 400px;
    margin-left: 5%;
    margin-top: 3%;">
    <el-form-item label="用户ID">
      <el-input v-model="userInfo.userId" disabled></el-input>
    </el-form-item>
    <el-form-item label="用户名称">
      <el-input v-model="userInfo.userName"></el-input>
    </el-form-item>
    <el-form-item label="收货地址">
      <el-input v-model="userInfo.shippingAddress"></el-input>
    </el-form-item>
    <el-form-item label="联系人">
      <el-input v-model="userInfo.telephone"></el-input>
    </el-form-item>
    <el-form-item label="信誉积分">
      <el-input v-model="userInfo.reputationPoints" disabled></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">更新</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import {getUserInfo, updateUserInfo} from "@/api/user";

export default {
  name: "UserInfo",
  data() {
    return {
      userInfo: {
        userId: '',
        userName: '',
        shippingAddress: '',
        telephone: '',
        reputationPoints: ''
      }
    }
  },
  methods: {
    onSubmit() {
      updateUserInfo(this.userInfo).then(
          res=>{
            this.getUserInfo()
          }
      )
    },
    getUserInfo(){
      this.userInfo.userId=this.$store.getters.getUserId;
      let params={userId:this.userInfo.userId}
      getUserInfo(params).then(res=>{
        this.userInfo=res.data
      });
    }
  },
  mounted() {
    this.getUserInfo()
  }
}
</script>

<style scoped>
  element.style{

  }
</style>
