<template>
  <div>
  <div class="sidebar">
    <div class="sidebar-title"><b>球鞋交易市场</b></div>
    <div class="sidebar-box">
      <el-col :span="12" style="height: 100%">
        <el-menu v-if="this.$store.getters.getRoleId==0"
                style="height: 100%"
                default-active="3"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1" @click="userInfo()">
              <i class="iconfont icon-wuliu"></i>
              <span slot="title" style="padding: 5px">个人信息</span>
            </el-menu-item>
          <el-menu-item index="2" @click="sellShoes()">
            <i class="iconfont icon-iconset0213"></i>
            <span slot="title" style="padding: 5px">售卖球鞋</span>
          </el-menu-item>
          <el-menu-item index="3" @click="buyShoes()">
            <i class="iconfont icon-chakan"></i>
            <span slot="title" style="padding: 5px">系统公告</span>
          </el-menu-item>
          <el-menu-item index="4" @click="myFavt()">
            <i class="iconfont icon-huiyuantequanduihuanzhekou"></i>
            <span slot="title" style="padding: 5px">购买球鞋</span>
          </el-menu-item>
          <el-menu-item index="5" @click="AppraisalShoe()">
            <i class="iconfont  icon-huiyuantequanduihuanzhekou"></i>
            <span slot="title" style="padding: 5px">我的收藏</span>
          </el-menu-item>
          <el-menu-item index="6" @click="setMyOrder()">
            <i class="iconfont  icon-huiyuantequanduihuanzhekou"></i>
            <span slot="title" style="padding: 5px">我的订单</span>
          </el-menu-item>
        </el-menu>
        <el-menu v-if="this.$store.getters.getRoleId==1"
                 style="height: 100%"
                 default-active="3"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item index="1" @click="userInfo()">
            <i class="iconfont icon-wuliu"></i>
            <span slot="title" style="padding: 5px">用户管理</span>
          </el-menu-item>
          <el-menu-item index="2" @click="sellShoes()">
            <i class="iconfont icon-iconset0213"></i>
            <span slot="title" style="padding: 5px">球鞋管理</span>
          </el-menu-item>
          <el-menu-item index="3" @click="buyShoes()">
            <i class="iconfont icon-chakan"></i>
            <span slot="title" style="padding: 5px">发布公告</span>
          </el-menu-item>
          <el-menu-item index="4" @click="myFavt()">
            <i class="iconfont  icon-huiyuantequanduihuanzhekou"></i>
            <span slot="title" style="padding: 5px">数据统计</span>
          </el-menu-item>
          <el-menu-item index="5" @click="AppraisalShoe()">
            <i class="iconfont  icon-huiyuantequanduihuanzhekou"></i>
            <span slot="title" style="padding: 5px">球鞋鉴定</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {getUserRoleIdWithAdmin} from "@/api/user";

export default {
  data() {
    return {
      userIndex:1
    }
  },
  components: {  },
  computed: {
    ...mapGetters(["permission_routes"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // 默认激活项
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return {
        menuText: "#bfcbd9",
        menuActiveText: "#ffffff",
        menuBg: "#001529"
      };
    }
  },
  mounted() {
    this.getUserRoleIdA()
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    userInfo(){
      this.userIndex=1
      this.$store.dispatch("setUserIndex",this.userIndex)
    },
    sellShoes(){
      this.userIndex=2
      this.$store.dispatch("setUserIndex",this.userIndex)
    },
    buyShoes(){
      this.userIndex=3
      this.$store.dispatch("setUserIndex",this.userIndex)
    },
    myFavt(){
      this.userIndex=4
      this.$store.dispatch("setUserIndex",this.userIndex)
    },
    AppraisalShoe(){
      this.userIndex=5
      this.$store.dispatch("setUserIndex",this.userIndex)
    },
    setMyOrder(){
      this.userIndex=6
      this.$store.dispatch("setUserIndex",this.userIndex)
    },
    getUserRoleIdA() {
      let params={userId:this.$store.getters.getUserId}
      console.log(params)
      getUserRoleIdWithAdmin(params).then(res=>{
        console.log(res)
        this.$store.dispatch("setRoleId",res.data.userRoleId)
      })
    }

  },
};
</script>

<style scoped>
.sidebar {
  width: 100%;
  height: 100%;
}
.sidebar-title {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dcdfe6;
  color: #ffffff;
  box-sizing: border-box;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
}
.sidebar-box {
  width: 100%;
  height: calc(100% - 64px);
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none; /*  火狐   */
}
.sidebar-box::-webkit-scrollbar {
  display: none; /*  Chrome  */
  width: 0 !important ; /*  Chrome  */
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
