<template>
  <div class="diningdetail_container">
    <div class="content">
      <div class="top1">
        <img src="../../assets/images/breakfast2.png" alt="">
        <p>上海繁聚德贸易有限公司</p>
        <p class="col1">仅限上海全季酒店陆家嘴店使用 <br/>其他门店无效...</p>
        <p class="col2">周一至周五 08：00-10：00 <br/>2018.1.23 - 2018.1.27</p>
      </div>
      <div class="bottom">
        <p>用餐前请出示二维码</p>
        <img src="../../assets/images/erweima2.png" alt="" @click="$router.push({'name' : 'Diningscan'})">
      </div>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/diningdetail.scss";
</style>
