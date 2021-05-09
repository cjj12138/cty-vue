<template>
  <div>
    <div v-if="this.$store.getters.getRoleId==0">
      <User-info v-if="this.$store.getters.getUserIndex===1"></User-info>
      <sell-shoes v-if="this.$store.getters.getUserIndex===2"
                  style="width: 400px;margin-left: 5%;margin-top: 3%"></sell-shoes>
      <buy-shoes v-if="this.$store.getters.getUserIndex===4"></buy-shoes>
    </div>
    <div v-if="this.$store.getters.getRoleId==1">
      <User-info v-if="this.$store.getters.getUserIndex===1"></User-info>
      <buy-shoes v-if="this.$store.getters.getUserIndex===2"></buy-shoes>
      <appraisal-shoes v-if="this.$store.getters.getUserIndex===5"></appraisal-shoes>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/UserAction/UserInfo";
import SellShoes from "@/components/UserAction/sellShoes";
import BuyShoes from "@/components/UserAction/buyShoes";
import AppraisalShoes from "@/components/UserAction/AppraisalShoes";

export default {
  name: "UserIndex",
  mounted() {

  },
  components: {BuyShoes, SellShoes, UserInfo,AppraisalShoes},
  data() {
  }
}
</script>

<style scoped>

</style>
