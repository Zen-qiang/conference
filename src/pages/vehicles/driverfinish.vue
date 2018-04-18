<template>
  <div class="driverfinish_container">
    <div class="btn1" @click="$router.push({'name' : 'Driveredit'})">
      添加我的班次
    </div>
    <ul>
      <li>
        <img src="../../assets/images/car1.png" alt="">
      </li>
      <li>
        <span>宝骏1 17豪华商务车</span>
        <span>未发车</span>
      </li>
      <li>
        <span>车牌号码： 沪B32191</span>
      </li>
      <li>
        <span><i>发车时间：</i> 2018-12-24 13:00</span>
        <span><i>6</i>/6-10人</span>
        <span><i>发车地点：</i>闵行华融路234号中RO路23号45B座</span>
        <span>5.6km</span>
      </li>
      <li @click="$router.push({'name' : 'Drivershift'})">
        <span>乘客信息</span>
        <img src="../../assets/images/headpic18.png" alt="">
        <span>6/6 </span>
        <img src="../../assets/images/jiantou.png" alt="">
      </li>
      <li>
        <span class="btn2" @click="$router.push({'name' : 'Drivershift'})">乘客扫描笔记</span>
        <span class="btn3" @click="$router.push({'name' : 'Driveroperate'})">立即发车</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/driverfinish.scss";
</style>

                                                  