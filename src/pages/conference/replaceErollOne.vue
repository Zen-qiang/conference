<template>
  <div class="dbm_container">
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
            <group>
              <selector title="性别" :options="sexList" v-model="defaultValue"></selector>
            </group>
        </li>
   </ul>
   <p class="end" @click="addReplace()">完成</p>
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
      defaultValue: '',
      sexList: []
    }
  },
  created () {
    this.getSexlist()
  },
  methods: {
    // 获取下拉列表
    getList (keyword, list) {
      let self = this
      if (list.length) return
      this.axios({
        method: 'get',
        url: '/api/list/properties',
        params: {
          group: keyword
        }
      }).then(res => {
        if (res.data.code === 0) {
          let newlist = res.data.data
          for (var i = 0; i < newlist.length; i++) {
            let singleList = {
              'key': newlist[i].id,
              'value': newlist[i].value
            }
            // this.$set(this.data,”key”,value’) $set()方法，既可以新增属性,又可以触发视图更新
            this.$set(list, i, singleList)
          }
          // if (keyword === 'POSITION') {
          //   self.defaultValue = list[0].key
          // } else if (keyword === 'GENDER') {
          //   self.defaultValue1 = list[0].key
          // }
          self.defaultValue = list[0].key
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 性别列表
    getSexlist () {
      this.getList('GENDER', this.sexList)
    },
    addReplace () {

    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/css/replaceEroll.scss";
</style>
