// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'

// 引入全局样式
import '@/assets/css/base.scss'
// import { WechatPlugin } from 'vux'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './http'
import wx from 'weixin-js-sdk'
import VueBus from 'vue-bus'
import VueI18n from 'vue-i18n'
// import Vuex from 'vuex'
Vue.prototype.axios = axios
// 移动端点击延迟解决方案
// FastClick.attach(document.body)
Vue.config.productionTip = false
// Vue.use(Vuex)

Vue.use(ElementUI)

Vue.use(VueBus)

Vue.use(VueI18n)

const messages = {
  zh: {
    message: {
      info: '您输入的账号或密码有误',
      check: '请仔细核对输信息'
    }
  },
  en: {
    message: {
      hello: 'good good study, day day up!'
    }
  }
}
const i18n = new VueI18n({
  locale: 'zh',  // 设置默认使用语言
  messages
})
// Vue.i18n.add('en', translationsEn)
// Vue.i18n.set('en')
Vue.config.devtools = true
axios({
  method: 'get',
  url: 'http://101.132.119.127:5566/zmf/getConfig',
  params: {
    url: location.href.split('#')[0]
  }
}).then(res => {
  wx.config({
    debug: false,
    appId: res.data.data.appId,
    timestamp: res.data.data.timestamp,
    nonceStr: res.data.data.nonceStr,
    signature: res.data.data.signature,
    jsApiList: [
      'hideAllNonBaseMenuItem',
      'chooseImage',
      'downloadImage',
      'uploadImage',
      'showMenuItems',
      'scanQRCode',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'previewImage',
      'getLocation',
      'openLocation'
    ]
  })
  wx.ready(function () {
    // 隐藏所有非基础按钮接口
    // wx.hideAllNonBaseMenuItem()
    wx.showMenuItems({
      menuList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ] // 要显示的菜单项，所有menu项见附录3
    })
  })
}).catch(error => {
  console.log(error)
})
// const wx = require('weixin-js-sdk')

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
