<template>
  <div class="tjry_container">
    <div class="content">
      <p class="first">
        <span>车辆成员</span>
        <span style="color:#333">宝骏1 17豪华商务车</span>
      </p>
      <div class="main">
        <ul>
          <li class="active"  @click="chooseOrder($event)">
            <img src="../../assets/images/pic1.jpg" alt="">
            <p>王霜</p>
          </li>
          <li class="active" @click="chooseOrder($event)">
            <img src="../../assets/images/pic2.jpg" alt="">
            <p>曹爽</p>
          </li>
          <li class="active" @click="chooseOrder($event)">
            <img src="../../assets/images/pic3.jpg" alt="">
            <p>司马昭</p>
          </li>
          <li class="active" @click="chooseOrder($event)">
            <img src="../../assets/images/pic4.jpg" alt="">
            <p>小沅</p>
          </li>
          <li class="active" @click="chooseOrder($event)">
            <img src="../../assets/images/pic5.jpg" alt="">
            <p>王朗</p>
          </li>
          <li class="normal" @click="chooseOrder($event)">
            <img src="../../assets/images/pic6.jpg" alt="">
            <p>曹睿</p>
          </li>
          <li class="normal" @click="chooseOrder($event)">
            <img src="../../assets/images/pic7.jpg" alt="">
            <p>白灵韵</p>
          </li>
          <li class="normal" @click="chooseOrder($event)">
            <img src="../../assets/images/pic8.jpg" alt="">
            <p>兰博</p>
          </li>
          <li class="normal" @click="chooseOrder($event)">
            <img src="../../assets/images/pic9.png" alt="">
            <p>刘韩</p>
          </li>
          <li :class="{normal:true}" @click="chooseOrder($event)">
            <img src="../../assets/images/pic10.jpg" alt="">
            <p>煮雨</p>
          </li>
        </ul>
      </div>
      <p class="add" @click="$router.push({'name' : 'Cars'})">添加至车辆</p>
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
    },
    chooseOrder: function (e) {
      // console.dir(e.target.parentNode)
      if (e.target.tagName === 'LI') {
        if (e.target.className.indexOf('active') === -1) {
          e.target.classList.add('active')
          e.target.classList.remove('normal')
        } else {
          e.target.classList.remove('active')
          e.target.classList.add('normal')
        }
      } else {
        if (e.target.parentNode.className.indexOf('active') === -1) {
          e.target.parentNode.classList.add('active')
          e.target.parentNode.classList.remove('normal')
        } else {
          e.target.parentNode.classList.remove('active')
          e.target.parentNode.classList.add('normal')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/tjry.scss";
</style>

