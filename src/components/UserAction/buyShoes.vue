<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <el-row>
        <el-col :span="8" v-for="(item, index) in goodList" v-if="isShowList">
          <el-card :body-style="{ padding: '0px',height :'250px'}">
            <img :src="item.goodPic[0]" class="image">
            <div style="padding: 14px;">
              <span>{{ item.goodName }}</span>
              <div class="bottom clearfix">
                <span>{{ item.goodPrice }}</span>
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
        <div class="block" >
          <div style="float: left">
            <el-carousel trigger="click" height="500px" style="width: 400px">
              <el-carousel-item v-for="item in good.goodPic" :key="item">
                <img :src="item" class="image" style="text-align: center;height: 500px;width: 400px;">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
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
      good: {},
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}
</style>
