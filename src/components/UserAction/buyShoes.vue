<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(item, index) in goodList">
        <el-card :body-style="{ padding: '0px',height :'250px'}">
          <img :src="item.goodPic[0]" class="image">
          <div style="padding: 14px;">
            <span>{{item.goodName}}</span>
            <div class="bottom clearfix">
              <span>{{item.goodPrice}}</span>
              <el-button type="text" class="button">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getAllGoodsWithUser} from "@/api/user";

export default {
  name: "buyShoes",
  data() {
    return {
        currentDate: new Date(),
        goodList:[]
    };
  },
  mounted() {
    this.getAllGoods();
  },
  methods:{
    getAllGoods(){
      getAllGoodsWithUser().then(res=>{
        console.log(res)
        if (res.code===2000){
          console.log(res.data)
          this.goodList=res.data
          for (let i = 0; i < this.goodList.length; i++) {
            this.goodList[i].goodPic[0]=require("@/assets/storeMsg/"+this.goodList[i].goodPic[0])
          }
        }
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
  margin-top: 13px;
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
</style>
