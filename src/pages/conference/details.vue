<template>
  <div class="details_container">
          <ul class="box1">
              <li>
                  <img src="../../assets/images/adidas1.jpg" alt="">
              </li>
              <li><p>adidas春季魅&黑系列上海订货会</p></li>
              <li>
                  <span>状态</span>
                  <span>进行中</span>
                  <span></span>
              </li>
              <li>
                  <span>品牌商</span>
                  <span>adidas 阿迪达斯</span>
                  <span><img src="../../assets/images/dui.png" alt=""></span>
              </li>
              <li>
                  <span>时间</span>
                  <span>2018年 2月28日 16:00-21:00</span>
              </li>
               <li @click="go()">
                  <span>地址</span>
                  <span>浦东曹路体育馆浦东北路123号</span>
                  <span><img src="../../assets/images/address.png" alt=""></span>
              </li>
          </ul>

          <ul>
              <li>
                  <span>报名信息</span>
                  <span>已报名<i>{{a}}</i>人</span>
                   <!-- <span><img src="../../assets/images/headpic.jpg" alt=""></span>
                   <span>more</span>
                   <span><img src="../../assets/images/jiantou.png" alt=""></span> -->
              </li>
              <li v-if="userRole != 'admin'">
                  <span>经销商</span>
                  <span>南通鸿祥贸易有限公司</span>
              </li>
               <li v-if="userRole != 'admin'">
                  <span>报名状态</span>
                  <span class="red">未报名</span>
              </li>
          </ul>

          <div class="intro">
              <p>会议信息</p>
              <p>此次阿迪达斯魅&黑2018秋冬新品延续了品牌产品一贯的优秀品质与颜值，不管是鞋类还是服装类，在设计上都推陈出新，搭配上更注重整体理念，将材质、织法、剪裁、配色等特点融入服饰的款式中，鞋类产品新BOUNCE、BOOST与CLOUDFOAM缓震材质的嵌入，为羽毛球运动的每一步移动提供更好的能量传递与推动，使阿迪达斯羽毛球系列产品的鞋底</p>
          </div>

          <div class="btn2" @click="go()">
              <img src="../../assets/images/shenqing.png" alt="">
              <p>申请报名</p>
          </div>
         
   </div>
</template>

<script>
export default{
  data () {
    return {
      a: 0,
      userRole: ''
    }
  },
  created () {
    this.userRole = this.$store.state.currentUser.role
  },
  methods: {
    go () {
      this.$router.push({'name': 'Sqbm'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/details.scss";
</style>

