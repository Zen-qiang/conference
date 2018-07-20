<template>
  <div class="rygl_container">
    <div class="first">
       <span @click="a=!a">全选</span>
       <span @click="$router.push({'name': 'HotelManage'})">{{hotelName}}</span> 
    </div>
    <div class="second">
      <p>标间数：2 &nbsp;&nbsp;大床：8 &nbsp;&nbsp;双人床：4 &nbsp;&nbsp;三人床：2</p>
    </div>
    <ul>
      <li>
        <group>
          <span :class="{active: !a,normal: true}" @click="chooseOrder($event)"></span>
          <span><img src="../../assets/images/headpic5.png" alt=""></span>
          <span>刘铁柱 &nbsp;&nbsp;男 <img src="../../assets/images/nan.png" alt=""></span>
          <selector :options="roomlist" v-model="defaultValue" class="s1"></selector>
          <selector :options="orderlist" v-model="defaultValue5" class="s2"></selector>
          <!-- <p>同房同序</p> -->
      </group> 
        
      </li>
      <li>
        <group>
          <span :class="{active: !a,normal: true}" @click="chooseOrder($event)"></span>
          <span><img src="../../assets/images/headpic6.png" alt=""></span>
          <span>柳清风 &nbsp;男 <img src="../../assets/images/nan.png" alt=""></span>
          <span>代</span>
          <selector :options="roomlist" v-model="defaultValue1" class="s1"></selector>
          <selector :options="orderlist" v-model="defaultValue6" class="s2"></selector>
          <!-- <p>同房同序</p> -->
        </group> 
      </li>
      <li>
         <group>
            <span :class="{active: !a,normal: true}" @click="chooseOrder($event)"></span>
            <span><img src="../../assets/images/headpic7.png" alt=""></span>
            <span>戴佩妮 &nbsp;女 <img src="../../assets/images/nv.png" alt=""></span>
            <span>代</span>
            <selector :options="roomlist" v-model="defaultValue2" class="s1"></selector>
            <selector :options="orderlist" v-model="defaultValue7" class="s2"></selector>
            <!-- <p>同房同序</p> -->
        </group> 
      </li>
      <li>
         <group>
          <span :class="{active: !a,normal: true}" @click="chooseOrder($event)"></span>
          <span><img src="../../assets/images/headpic8.png" alt=""></span>
          <span>周辛雨 &nbsp;女 <img src="../../assets/images/nv.png" alt=""></span>
          <span>代</span>
          <selector :options="roomlist" v-model="defaultValue3" class="s1"></selector>
          <selector :options="orderlist" v-model="defaultValue8" class="s2"></selector>
          <!-- <p>同房同序</p> -->
        </group> 
      </li>
      <li>
         <group>
            <span :class="{active: !a,normal: true}" @click="chooseOrder($event)"></span>
            <span><img src="../../assets/images/headpic9.png" alt=""></span>
            <span>杭鱼风 &nbsp;男 <img src="../../assets/images/nan.png" alt=""></span>
            <span>代</span>
            <selector :options="roomlist" v-model="defaultValue4" class="s1"></selector>
            <selector :options="orderlist" v-model="defaultValue9" class="s2"></selector>
            <!-- <p>同房同序</p> -->
        </group> 
      </li>
    </ul>
  
    <p class="else">未勾选编辑人员无需住宿自行解决</p>
    <p class="save" @click="$router.push({'name': 'HotelManage'})">保存</p>
  </div>
</template>


<script>
import { Selector, Group } from 'vux'

export default {
  components: {
    Group,
    Selector
  },
  data () {
    return {
      a: true,
      defaultValue: 'bj',
      defaultValue1: 'bj',
      defaultValue2: 'bj',
      defaultValue3: 'bj',
      defaultValue4: 'bj',
      defaultValue5: 'one',
      defaultValue6: 'one',
      defaultValue7: 'one',
      defaultValue8: 'one',
      defaultValue9: 'one',
      roomlist: [{key: 'bj', value: '标间1'}, {key: 'dc', value: '大床2'}, {key: 'tf', value: '套房3'}, {key: 'sc', value: '水床4'}],
      orderlist: [{key: 'one', value: '序号1'}, {key: 'two', value: '序号2'}, {key: 'three', value: '序号3'}, {key: 'four', value: '序号4'}, {key: 'five', value: '序号5'}],
      hotelName: this.$route.query.hotelName
    }
  },
  methods: {
    chooseOrder: function (e) {
      if (e.target.className.indexOf('active') === -1) {
        e.target.classList.add('active')
        e.target.classList.remove('normal')
      } else {
        e.target.classList.remove('active')
        e.target.classList.add('normal')
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/css/peopleManage.scss";
</style>

