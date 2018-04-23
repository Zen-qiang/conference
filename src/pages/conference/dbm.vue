<template>
  <div class="dbm_container">
      <div class="add">
       <img src="../../assets/images/jia.png" alt="">
       <p>代报名</p>
   </div>

   <ul>
       <li>
           <span>姓名</span>
           <span><input type="text" placeholder="请输入姓名"></span>
       </li>
        <li>
            <span>照片</span>
            <span class="hui">将用于证件打印</span>
            <span><img src="../../assets/images/camera.png" alt=""></span>
        </li>
        <li>
            <span>手机</span>
            <span class="hui"><input type="text" placeholder="请输入手机号码"></span>
        </li>
        <li>
            <span>身份证</span>
            <span><input type="text" placeholder="请输入身份证号码"></span>
        </li>
        <li>
            <!-- <span>性别</span>
            <span>男 <img src="../../assets/images/nan.png" alt=""></span>
            <span><img src="../../assets/images/jiantou.png" alt=""></span> -->
            <group>
              <selector title="性别" :options="list" v-model="defaultValue"></selector>
            </group>
        </li>
         <!-- <li>
            <span>酒店名</span>
            <span><input type="text" placeholder="请输入酒店名称"></span>
        </li>
        <li>
            <span>房间类型</span>
            <span><input type="text" placeholder="请输入房间类型"></span>
        </li>
        <li>
            <span>房间序号</span>
            <span><input type="text" placeholder="请输入房间序号"></span>
        </li> -->
   </ul>
   <p class="end" @click="$router.push({'name' : 'Sqbm'})">完成</p>
  </div>
   
</template>

<script>
import { Group, Selector } from 'vux'
export default {
  components: {
    Group,
    Selector
  },
  data () {
    return {
      defaultValue: 'nan',
      list: [{key: 'nan', value: '男'}, {key: 'nv', value: '女'}]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/css/dbm.scss";
</style>


