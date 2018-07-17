<template>
  <div class="hotelregist_container">
    <ul>
      <li @click="$router.push({'name' : 'HotellistOne'})">
        <span>已报道用户清单</span>
        <img src="../../assets/images/jiantou.png" alt="">
        <span>60</span>
      </li>
      <li @click="$router.push({'name' : 'HotellistTwo'})">
        <span>房间安排</span>
        <img src="../../assets/images/jiantou.png" alt="">
      </li>
  </ul>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/hotelregist.scss";
</style>

