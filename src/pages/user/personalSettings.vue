<template>
    <div class="personalSettings_container">
      <div class="top">
        <div class="head">
          <img src="../../assets/images/headpic21.png" alt="">
          <p>更换</p>
        </div>  
      </div>
      <ul class="main">
        <li>
          <span>手机绑定</span>
          <span>未绑定</span>
        </li>
        <li>
          <span>姓名</span>
          <span>JACK</span>
        </li>
        <li>
          <span>性别</span>
          <span>男</span>
        </li>
        <li>
          <span>身份证</span>
          <span>310115199110247615</span>
        </li>
        <li>
          <span>公司</span>
          <span>天赐服装贸易公司</span>
        </li>
      </ul>
      <div class="bottom" @click="$router.push({name: 'Login'})">
        退出登录
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/personalSettings.scss";
</style>
