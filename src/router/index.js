import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Meetings from '@/pages/meetings'
import Details from '@/pages/details'
import Sqbm from '@/pages/sqbm'
import Dbm from '@/pages/dbm'
import Bmcg from '@/pages/bmcg'
import Zsgl from '@/pages/zsgl'
import Rygl from '@/pages/rygl'
import Map from '@/pages/map'
import Bmgl from '@/pages/bmgl'
import Xcgl from '@/pages/xcgl'
import Tjry from '@/pages/tjry'
import Tjxc from '@/pages/tjxc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/meetings',
      name: 'Meetings',
      component: Meetings
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/sqbm',
      name: 'Sqbm',
      component: Sqbm
    },
    {
      path: '/dbm',
      name: 'Dbm',
      component: Dbm
    },
    {
      path: '/bmcg',
      name: 'Bmcg',
      component: Bmcg
    },
    {
      path: '/zsgl',
      name: 'Zsgl',
      component: Zsgl
    },
    {
      path: '/rygl',
      name: 'Rygl',
      component: Rygl
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/bmgl',
      name: 'Bmgl',
      component: Bmgl
    },
    {
      path: '/xcgl',
      name: 'Xcgl',
      component: Xcgl
    },
    {
      path: '/tjry',
      name: 'Tjry',
      component: Tjry
    },
    {
      path: '/tjxc',
      name: 'Tjxc',
      component: Tjxc
    }
  ]
})
