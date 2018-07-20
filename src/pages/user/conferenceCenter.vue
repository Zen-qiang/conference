<template>
    <div class="conferenceCenter_container">
       <div class="list list1">
          <div class="inner" @click="$router.push({'name' : 'Details'})">
            <div class="first">
              <span>adidas春季魅&黑系列上海订货会</span>
              <span class="now1">当前会务</span>             
            </div>
            <div class="last">
              <img src="../../assets/images/center1.png" alt="">
              <p class="col2"><span class="col1">状态：</span> <span></span> <span>进行中</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col1">人数：</span><span class="col3">8</span>人</p>
              <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
              <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
            </div>
          </div>
        </div> 


        <ul class="list">
          <li class="inner">
            <div class="first">
              <span>adidas春季魅&黑系列上海订货会</span>
              <span class="now2">切换</span>             
            </div>
              <div class="last">
                <img src="../../assets/images/center2.png" alt="">
                <p class="col2"><span class="col1">状态：</span><span class="bg1"></span> <span>未开始</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col1">人数：</span><span class="col3">8</span>人</p>
                <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
              </div>
          </li>
          <li class="inner">
            <div class="first">
              <span>adidas春季魅&黑系列上海订货会</span>
              <span class="now2">切换</span>              
            </div>
              <div class="last">
                <img src="../../assets/images/center2.png" alt="">
                <p class="col2"><span class="col1">状态：</span> <span class="bg2"></span> <span>已结束</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col1">人数：</span><span class="col3">8</span>人</p>
                <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
              </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/conferenceCenter.scss";
</style>

