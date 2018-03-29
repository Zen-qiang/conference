<template>
  <div>
     <my-nav></my-nav>
     <div class="container">
         <div class="content">
            <div class="left">
                <img src="../assets/images/left1.png" alt="">
            </div>
            <div class="right">

            </div>
         </div>
     </div>
  </div>
</template>

<script>
import myNav from '../components/Header.vue'
export default{
  components: {
    myNav
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/meetings.scss";
</style>


