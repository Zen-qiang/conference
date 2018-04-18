<template>
  <div class="tjry_container">
    <div class="content">
      <p class="first">
        <span>成员信息</span>
        <span @click="$router.push({'name' : 'Dbm1'})">增加</span>
      </p>
      <div class="main">
        <ul>
          <li :class="{active: true,normal: no !== 0}" @click="change(0)">
            <img src="../../assets/images/pic1.jpg" alt="">
            <p>王霜</p>
          </li>
          <li :class="{active: true,normal: no !== 1}" @click="change(1)">
            <img src="../../assets/images/pic2.jpg" alt="">
            <p>曹爽</p>
          </li>
          <li :class="{active: true,normal: no !== 2}" @click="change(2)">
            <img src="../../assets/images/pic3.jpg" alt="">
            <p>司马昭</p>
          </li>
          <li :class="{active: true,normal: no !== 3}" @click="change(3)">
            <img src="../../assets/images/pic4.jpg" alt="">
            <p>小沅</p>
          </li>
          <li :class="{active: true,normal: no !== 4}" @click="change(4)">
            <img src="../../assets/images/pic5.jpg" alt="">
            <p>王朗</p>
          </li>
          <li :class="{active: true,normal: no !== 5}" @click="change(5)">
            <img src="../../assets/images/pic6.jpg" alt="">
            <p>曹睿</p>
          </li>
          <li :class="{active: true,normal: no !== 6}" @click="change(6)">
            <img src="../../assets/images/pic7.jpg" alt="">
            <p>白灵韵</p>
          </li>
          <li :class="{active: true,normal: no !== 7}" @click="change(7)">
            <img src="../../assets/images/pic8.jpg" alt="">
            <p>兰博</p>
          </li>
          <li :class="{active: true,normal: no !== 8}" @click="change(8)">
            <img src="../../assets/images/pic9.png" alt="">
            <p>刘韩</p>
          </li>
          <li :class="{active: true,normal: no !== 9}" @click="change(9)">
            <img src="../../assets/images/pic10.jpg" alt="">
            <p>煮雨</p>
          </li>
        </ul>
      </div>
      <p class="add" @click="$router.push({'name' : 'Tjxc'})">添加至行程</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: true,
      b: false,
      no: null
    }
  },
  methods: {
    change: function (index) {
      // this.a = !this.a
      // this.b = !this.b
      this.no = index
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/tjry.scss";
</style>

