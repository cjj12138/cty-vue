<template>
  <div>
    <User-info v-if="this.$store.getters.getUserIndex===1"></User-info>
    <sell-shoes v-if="this.$store.getters.getUserIndex===2" style="width: 400px;margin-left: 5%;margin-top: 3%"></sell-shoes>
    <buy-shoes v-if="this.$store.getters.getUserIndex===3"></buy-shoes>
  </div>
</template>

<script>
export default {
  name: "AdminIndex"
}
</script>

<style scoped>

</style>
