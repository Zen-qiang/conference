<template>
  <div class="rygl_container">
    <div class="first">
       <span>全选</span>
       <span @click="$router.push({'name': 'Zsgl'})">上海全季酒店（陆家嘴店）</span> 
    </div>
    <div class="second">
      <p>标间数：2 &nbsp;&nbsp;大床：8 &nbsp;&nbsp;双人床：4 &nbsp;&nbsp;三人床：2</p>
    </div>
    <ul>
      <li>
        <!-- <checklist :title="$t('Basic Usage')" :label-position="left" required :options="commonList" v-model="checklist001" @on-change="change"></checklist> -->
        <span><img src="../assets/images/xuanzhong.png" alt=""></span>
        <span><img src="../assets/images/headpic5.png" alt=""></span>
        <span>刘铁柱 &nbsp;&nbsp;男 <img src="../assets/images/nan.png" alt=""></span>
        <!-- <div style="width:'100px',height:'20px'">
            <group >
              <selector ref="defaultValueRef" title="title" :options="list" v-model="defaultValue"></selector>
            </group>
        </div> -->
        <p>同房同序</p>
      </li>
      <li>
        <span><img src="../assets/images/xuanzhong.png" alt=""></span>
        <span><img src="../assets/images/headpic6.png" alt=""></span>
        <span>柳清风 &nbsp;男 <img src="../assets/images/nan.png" alt=""></span>
        <span>代</span>

        <p>同房同序</p>
      </li>
      <li>
        <span><img src="../assets/images/xuanzhong.png" alt=""></span>
        <span><img src="../assets/images/headpic7.png" alt=""></span>
        <span>韩梅梅 &nbsp;女 <img src="../assets/images/nv.png" alt=""></span>
        <span>代</span>

        <p>同房同序</p>
      </li>
      <li>
        <span></span>
        <span><img src="../assets/images/headpic8.png" alt=""></span>
        <span>张丹青 &nbsp;女 <img src="../assets/images/nv.png" alt=""></span>
        <span>代</span>

        <p>同房同序</p>
      </li>
      <li>
        <span><img src="../assets/images/xuanzhong.png" alt=""></span>
        <span><img src="../assets/images/headpic9.png" alt=""></span>
        <span>许昌风 &nbsp;男 <img src="../assets/images/nan.png" alt=""></span>
        <span>代</span>

        <p>同房同序</p>
      </li>
    </ul>
    <p class="else">未勾选编辑人员无需住宿自行解决</p>
    <p class="save" @click="$router.push({'name': 'Zsgl'})">保存</p>
  </div>
</template>

<script>
import { Selector, Group, Checklist } from 'vux'
export default {
  components: {
    Checklist,
    Selector,
    Group
  },
  deta () {
    return {
      defaultValue: 'bj',
      list: [{key: 'bj', value: '标间'}, {key: 'gx', value: '广西'}]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/css/rygl.scss";
</style>

