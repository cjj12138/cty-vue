<template>
  <div style="width: 50%;padding: 20px">
    <el-form ref="form" :model="systemNotification" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="systemNotification.actionTitle"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="systemNotification.date1"
                          style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="systemNotification.date2"
                          style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="活动用户">
        <el-input v-model="systemNotification.activityUser"></el-input>
      </el-form-item>
      <el-form-item label="活动描述">
        <el-input type="textarea" v-model="systemNotification.actionMsg"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {insertAnnounceMsg} from "@/api/user";

export default {
  name: "Announce",
  data() {
    return {
      systemNotification: {
        actionTitle: '',
        date2: '',
        date1: '',
        actionMsg: '',
        activityUser: ''
      }
    }
  },
  methods: {
    onSubmit() {
      let activityDate=this.systemNotification.date1+'-'+this.systemNotification.date2
      let params={actionTitle:this.systemNotification.actionTitle,actionMsg:this.systemNotification.actionMsg,activityDate:activityDate,activityUser:this.systemNotification.activityUser}
      insertAnnounceMsg(params).then(res=>{
        if (res.code===2000){
          this.systemNotification.activityUser=''
          this.systemNotification.date2=''
          this.systemNotification.date1=''
          this.systemNotification.actionMsg=''
          this.systemNotification.actionTitle=''
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
