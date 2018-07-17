<template>
  <div class="driveredit_container">
    <div class="first">
      <span>当前班次</span>
      <span class="cancel" @click="$router.push({'name' : 'Drivercenter'})">取消</span>
    </div>
    <ul>
      <li>
        <span>车辆照片</span>
        <span><img src="../../assets/images/car2.png" alt=""></span>
        <span><img src="../../assets/images/camera.png" alt=""></span>
      </li>
      <li>
        <span>车辆名称 ：</span>
        <span><input type="text" placeholder="宝骏117豪华商务车"></span>
      </li>
      <li>
        <span>车牌号码 ：</span>
        <span><input type="text" placeholder="沪B32191"></span>
      </li>
      <li>
        <span>联系人 ：</span>
        <span><input type="text" placeholder="刘韩"></span>
      </li>
      <li>
        <span>手机号 ：</span>
        <span><input type="text" placeholder="1502682214"></span>
      </li>
      <li>
        <span>乘员人数 ：</span>
        <span>6-10人</span>
      </li>
      <li>
        <span>发车时间 ：</span>
        <span>2018-12-24 13:00</span>
      </li>
      <li>
        <span>发车地点 ：</span>
        <span>虹桥机场2号航站楼</span>
      </li>
    </ul>
    <p class="save" @click="$router.push({'name' : 'Driverfinish'})">保存</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/driveredit.scss";
</style>

