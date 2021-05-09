<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <el-row>
        <el-col :span="6" v-for="(item, index) in goodList" v-if="isShowList">
          <el-card :body-style="{ padding: '0px',height :'200px'}">
            <div style="position: fixed;padding: 10px;">
              <img :src="item.goodPic[0]" class="image">
            </div>
            <div style="padding-left: 60%;padding-top: 10px;">
              <span><b>{{ item.goodName }}</b></span>
              <br>
              <span>￥{{ item.goodPrice }}</span>
              <br>
              <br>
              <span><i>{{ item.goodDes }}</i></span>
            </div>
            <div style="padding: 14px;float: right">
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="getDetail(item)">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-container v-if="isShow">
      <el-aside>

      </el-aside>
      <el-main>

        <div style="position: fixed;margin-left: 35%;">
          <el-carousel trigger="click" height="500px" style="width: 500px">
            <el-carousel-item v-for="item in good.goodPic" :key="item">
              <img :src="item" class="image" style="text-align: center;height: 500px;width: 500px;">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div style="position: fixed;margin-top: 20px">
          <el-form ref="form" :model="shoes" label-width="80px">
            <el-form-item label="商品标题">
              <el-input v-model="shoes.goodName" disabled></el-input>
            </el-form-item>
            <el-form-item label="商品描述">
              <el-input v-model="shoes.goodDes" disabled></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="shoes.goodPrice" disabled></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {getAllGoodsMorePic, getAllGoodsWithUser} from "@/api/user";

export default {
  name: "buyShoes",
  data() {
    return {
      currentDate: new Date(),
      goodList: [],
      isShow: false,
      isShowList: true,
      good: {}
    };
  },
  mounted() {
    this.getAllGoods();
  },
  methods: {
    getAllGoods() {
      getAllGoodsWithUser().then(res => {
        console.log(res)
        if (res.code === 2000) {
          console.log(res.data)
          this.goodList = res.data
          for (let i = 0; i < this.goodList.length; i++) {
            this.goodList[i].goodPic[0] = require("@/assets/storeMsg/" + this.goodList[i].goodPic[0])
          }
        }
      })
    },
    getDetail(item) {
      this.isShow = true;
      this.isShowList = false;
      let goodId = item.goodId;
      let param = {goodId: goodId}
      getAllGoodsMorePic(param).then(res => {
        console.log(res)
        for (let i = 0; i < res.data[0].goodPic.length; i++) {
          res.data[0].goodPic[i] = require("@/assets/storeMsg/" + res.data[0].goodPic[i])
        }
        this.good = res.data[0]
        this.shoes =this.good
      })
      console.log(item)
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
