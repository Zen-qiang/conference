<template>
<div class="diningscan_container">
  <div class="btn1" @click="$router.push({'name' : 'Dininglist'})">
    <img src="../assets/images/saomiao.png" alt="">
    <span>扫描用户</span>
  </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../assets/css/diningscan.scss";
</style>
