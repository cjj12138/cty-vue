<template>
  <div>
    <el-row>
      <el-col :span="7" v-for="(item, index) in goodList">
        <el-card :body-style="{ padding: '0px',height :'200px'}">
          <div style="position: fixed;padding: 10px;">
            <img :src="item.goodPic[0]" class="image">
          </div>
            <div style="
                                padding-top: 10px;
                                padding-right: 30px;
                                float: right;">
            <span><b>{{ item.goodName }}</b></span>
            <br>
            <span>￥{{ item.goodPrice }}</span>
            <br>
            <br>
            <span><i>{{ item.goodDes }}</i></span>
                <div class="bottom clearfix">
                    <!--              <el-button type="text" class="button" @click="getDetail(item)">查看详情</el-button>-->
                    <el-button type="text" class="button" @click="deleteMyLove(item)">删除我的最爱</el-button>
                </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {deleteMyLoveShoes, getMyfvt} from "@/api/user";

export default {
  name: "myCollection",
  data() {
    return {
      currentDate: new Date(),
      goodList: [],
      isShow: false,
      isShowList: true,
      good: {},
      shoes:{}
    };
  },
  mounted() {
    this.getMyCollection()
  },
  methods:{
    getMyCollection(){
      let params={userId:this.$store.getters.getUserId}
      getMyfvt(params).then(res=>{
        if (res.code === 2000) {
          console.log(res.data)
          this.goodList = res.data
          for (let i = 0; i < this.goodList.length; i++) {
            this.goodList[i].goodPic[0] = require("@/assets/storeMsg/" + this.goodList[i].goodPic[0])
          }
        }
      })
    },
    deleteMyLove(item){
      let param={goodId:item.goodId,userId:this.$store.getters.getUserId}
      deleteMyLoveShoes(param).then(res=>{
        if (res.code===2000){
          this.$message.success("删除成功")
        }
        this.getMyCollection()
      })
    }
  }
}
</script>
<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 120px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 240px;
    height: 180px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
</style>
