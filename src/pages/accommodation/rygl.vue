<template>
  <div class="rygl_container">
    <div class="first">
       <span @click="a=!a">全选</span>
       <span @click="$router.push({'name': 'Zsgl'})">上海全季酒店（陆家嘴店）</span> 
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
          <selector :options="list" v-model="defaultValue"></selector>
          <p>同房同序</p>
      </group> 
        
      </li>
      <li>
        <group>
          <span :class="{active: !a,normal: true}" @click="chooseOrder($event)"></span>
          <span><img src="../../assets/images/headpic6.png" alt=""></span>
          <span>柳清风 &nbsp;男 <img src="../../assets/images/nan.png" alt=""></span>
          <span>代</span>
          <selector :options="list" v-model="defaultValue1"></selector>
          <p>同房同序</p>
        </group> 
      </li>
      <li>
         <group>
            <span :class="{active: !a,normal: true}" @click="chooseOrder($event)"></span>
            <span><img src="../../assets/images/headpic7.png" alt=""></span>
            <span>柳清风 &nbsp;男 <img src="../../assets/images/nv.png" alt=""></span>
            <span>代</span>
            <selector :options="list" v-model="defaultValue2"></selector>
            <p>同房同序</p>
        </group> 
      </li>
      <li>
         <group>
          <span :class="{active: !a,normal: true}" @click="chooseOrder($event)"></span>
          <span><img src="../../assets/images/headpic8.png" alt=""></span>
          <span>柳清风 &nbsp;男 <img src="../../assets/images/nv.png" alt=""></span>
          <span>代</span>
          <selector :options="list" v-model="defaultValue3"></selector>
          <p>同房同序</p>
        </group> 
      </li>
      <li>
         <group>
            <span :class="{active: !a,normal: true}" @click="chooseOrder($event)"></span>
            <span><img src="../../assets/images/headpic9.png" alt=""></span>
            <span>柳清风 &nbsp;男 <img src="../../assets/images/nan.png" alt=""></span>
            <span>代</span>
            <selector :options="list" v-model="defaultValue4"></selector>
            <p>同房同序</p>
        </group> 
      </li>
    </ul>
  
    <p class="else">未勾选编辑人员无需住宿自行解决</p>
    <p class="save" @click="$router.push({'name': 'Zsgl'})">保存</p>
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
      list: [{key: 'bj', value: '标间1'}, {key: 'dc', value: '大床2'}, {key: 'tf', value: '套房3'}, {key: 'sc', value: '水床4'}]
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
@import "../../assets/css/rygl.scss";
</style>

