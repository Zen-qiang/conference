<template>
  <div>
    <x-button type="primary" @click.native="show = !show">点我</x-button>
    <actionsheet v-model="show" :menus="menus" @on-click-menu="con"></actionsheet>
  </div>
</template>

<script>
import { Actionsheet, XButton } from 'vux'
// import Head from '../components/Head.vue'
export default {
  components: {
    Actionsheet,
    XButton
  },
  data () {
    return {
      show: false,
      menus: {
        menu1: 'Share to friends',
        menu2: 'Share to timeline'
      }
    }
  },
  methods: {
    con (mes) {
      console.log(mes)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>


