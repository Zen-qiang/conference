<template>
  <div>
    <transition name="fade">
    <div class="mask1" @click.stop="dis()" v-show="b">
      <div class="content">
        <img src="../assets/images/dayin.png" alt="">
        <p>正在打印...</p>
        <p><span></span><span></span></p>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      b: false

    }
  },
  methods: {
    print: function () {
      this.b = !this.b
    },
    dis: function () {
      this.b = !this.b
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/masker.scss";
</style>

