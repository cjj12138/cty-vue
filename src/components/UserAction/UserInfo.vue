<template>
  <div>
    <el-form ref="form" :model="userInfo" style="
    width: 400px;
    margin-left: 5%;
    margin-top: 3%;" v-if="this.$store.getters.getRoleId==0">
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
    <el-table style="padding: 20px" :data="userTable" v-if="this.$store.getters.getRoleId==1">
      <el-table-column
              prop="userName"
              label="名称"
              width="180">
      </el-table-column>
      <el-table-column
              prop="userId"
              label="账号"
              width="180">
      </el-table-column>
      <el-table-column
              prop="shippingAddress"
              label="地址">
      </el-table-column>
      <el-table-column
              prop="telephone"
              label="号码" width="160">
      </el-table-column>
      <el-table-column
              prop="reputationPoints"
              label="信誉" width="160">
      </el-table-column>
      <el-table-column label="操作" width="80">
        <div >
          <el-button
                  type="text"
                  size="mini"
          >封禁</el-button
          >
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import {getUserInfo, updateUserInfo,getAllUser} from "@/api/user";

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
      },
      userTable:[],

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
      if (this.$store.getters.getRoleId==0){
        this.userInfo.userId=this.$store.getters.getUserId;
        let params={userId:this.userInfo.userId}
        getUserInfo(params).then(res=>{
          this.userInfo=res.data
        });
      }else{
        getAllUser().then(res=>{
          this.userTable=res.data;
        });
      }
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
