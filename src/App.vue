<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view class="app-child"></router-view>
  </div>
</template>

<script>
import myNav from './components/Header.vue'
export default {
  components: {
    myNav
  }
}
</script>

<style lang="scss" scoped>
// #app{
//    height: 100vh;
// }
.app-child {
  height: 100%;
}
my-nav{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}
</style>
