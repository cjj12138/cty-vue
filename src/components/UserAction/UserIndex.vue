<template>
  <div>
    <div v-if="this.$store.getters.getRoleId==0">
      <User-info v-if="this.$store.getters.getUserIndex===1"></User-info>
      <sell-shoes v-if="this.$store.getters.getUserIndex===2"
                  style="width: 400px;margin-left: 5%;margin-top: 3%"></sell-shoes>
      <system-notice v-if="this.$store.getters.getUserIndex===3"></system-notice>
      <buy-shoes v-if="this.$store.getters.getUserIndex===4"></buy-shoes>
      <my-collection v-if="this.$store.getters.getUserIndex===5"></my-collection>
      <my-order v-if="this.$store.getters.getUserIndex===6"></my-order>
    </div>
    <div v-if="this.$store.getters.getRoleId==1">
      <User-info v-if="this.$store.getters.getUserIndex===1"></User-info>
      <buy-shoes v-if="this.$store.getters.getUserIndex===2"></buy-shoes>
      <Announce v-if="this.$store.getters.getUserIndex===3"></Announce>
      <appraisal-shoes v-if="this.$store.getters.getUserIndex===5"></appraisal-shoes>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/UserAction/UserInfo";
import SellShoes from "@/components/UserAction/sellShoes";
import BuyShoes from "@/components/UserAction/buyShoes";
import AppraisalShoes from "@/components/UserAction/AppraisalShoes";
import MyCollection from "@/components/UserAction/myCollection";
import SystemNotice from "./systemNotice";
import MyOrder from "./myOrder";
import Announce from "./Announce";


export default {
  name: "UserIndex",
  mounted() {

  },
  components: {Announce, MyOrder, SystemNotice, BuyShoes, SellShoes, UserInfo,AppraisalShoes,MyCollection,},

  data() {
  }
}
</script>

<style scoped>

</style>
