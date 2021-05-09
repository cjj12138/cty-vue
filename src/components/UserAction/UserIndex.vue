<template>
  <div>
    <div v-if="this.$store.getters.getRoleId==0">
      <User-info v-if="this.$store.getters.getUserIndex===1"></User-info>
      <sell-shoes v-if="this.$store.getters.getUserIndex===2"
                  style="width: 400px;margin-left: 5%;margin-top: 3%"></sell-shoes>
      <buy-shoes v-if="this.$store.getters.getUserIndex===3"></buy-shoes>
    </div>
    <div v-if="this.$store.getters.getRoleId==1">

    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/UserAction/UserInfo";
import SellShoes from "@/components/UserAction/sellShoes";
import BuyShoes from "@/components/UserAction/buyShoes";

export default {
  name: "UserIndex",
  mounted() {

  },
  components: {BuyShoes, SellShoes, UserInfo},
  data() {
  }
}
</script>

<style scoped>

</style>
