<template>
    <div class="latestState_container">
        <div class="list list1">
              <div class="inner">
                <div class="first">
                  <span>adidas春季魅&黑系列上海订货会</span>
                  <span class="now1">当前会务</span>
                  
                </div>
                 <div class="last">
                   <img src="../../assets/images/center1.png" alt="">
                   <p class="col2"><span class="col1">状态：</span><span>已报名</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col1">人数：</span><span class="col3">8</span>人</p>
                   <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                   <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
                 </div>
              </div>
            </div>

            <timeline>
			        <timeline-item>
				        <p class="recent col4">[上海市] 行程车辆接送已更新</p>
				        <p class="recent1 col4">2018-12-16 10:00:00</p>
			        </timeline-item>
			        <timeline-item>
				         <p class="recent col1">吊牌打印成功</p>
				        <p class="recent1 col1">2018-12-15 06:30:00</p>
			        </timeline-item>
			        <timeline-item>
				         <p class="recent col1">全季酒店入住登记成功</p>
				        <p class="recent1 col1">2018-12-14 12:20:00</p>
			        </timeline-item>
		        </timeline> 
    </div>
</template>

<script>
import { Timeline, TimelineItem } from 'vux'
export default {
  components: {
    Timeline,
    TimelineItem
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/latestState.scss";
</style>

