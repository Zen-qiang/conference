<template>
  <div>
     <!-- <my-nav></my-nav> -->
     <div class="meetings_container">
         <div class="text">
                <div class="content content1">
            <div class="left">
                <img src="../../assets/images/left1.png" alt="">
            </div>
            <div class="right" @click="det">
                <img src="../../assets/images/adidas1.jpg" alt="">
                <h2>adidas春季魅&黑系列上海订货会</h2>
                <p><span></span> &nbsp;进行中</p>
                <p>此次阿迪达斯魅&黑2018秋冬新品延续了品牌产品一贯的优秀品质与颜值，不管是鞋类还是服装类，在设计上都推陈出新，搭配上更注重整体理念，将材质、织法、剪裁、配色等特点融入服饰的款式中，鞋类产品新BOUNCE、BOOST与CLOUDFOAM缓震材质的嵌入，为羽毛球运动的每一步移动提供更好的能量传递与推动，使阿迪达斯羽毛球系列产品的鞋底风潮...</p>
            </div>
         </div>
         <div class="content content2">
            <div class="left">
                <img src="../../assets/images/left2.jpg" alt="">
            </div>
            <div class="right" @click="det">
                <img src="../../assets/images/lamp1.jpg" alt="">
                <h2>adidas春季魅&黑系列上海订货会</h2>
                <p><span></span> &nbsp;进行中</p>
                <p>此次阿迪达斯魅&黑2018秋冬新品延续了品牌产品一贯的优秀品质与颜值，不管是鞋类还是服装类，在设计上都推陈出新，搭配上更注重整体理念，将材质、织法、剪裁、配色等特点融入服饰的款式中，鞋类产品新BOUNCE、BOOST与CLOUDFOAM缓震材质的嵌入，为羽毛球运动的每一步移动提供更好的能量传递与推动，使阿迪达斯羽毛球系列产品的鞋底风潮...</p>
            </div>
         </div>
         </div>
      
     </div>
  </div>
</template>

<script>
// import myNav from '../components/Header.vue'

export default{
//   components: {
//     myNav
//   },
  created () {
    console.log(this.$store.state.currentUser)
    console.log(this.$store.state.version)
  },
  methods: {
    det () {
      console.log(11111111)
      this.$router.push({'name': 'Details'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/meetings.scss";
</style>


