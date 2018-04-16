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
import Zsgl1 from '@/pages/zsgl1'
import Rygl from '@/pages/rygl'
import Map from '@/pages/map'
import Bmgl from '@/pages/bmgl'
import Xcgl from '@/pages/xcgl'
import Tjry from '@/pages/tjry'
import Tjxc from '@/pages/tjxc'
import Checkothers from '@/pages/checkothers'
import Addroute from '@/pages/addroute'
import Report from '@/pages/report'
import Reported from '@/pages/reported'
import Allreport from '@/pages/Allreport'
import Drivercenter from '@/pages/drivercenter'
import Driveredit from '@/pages/driveredit'
import Driverfinish from '@/pages/driverfinish'
import Driveroperate from '@/pages/driveroperate'
import Drivershift from '@/pages/drivershift'
import Dining from '@/pages/dining'
import Diningdetail from '@/pages/diningdetail'
import Diningscan from '@/pages/diningscan'
import Dininglist from '@/pages/dininglist'
import Certificate from '@/pages/certificate'
import Personalcenter from '@/pages/personalcenter'
import Hotelregist from '@/pages/hotelregist'
import Hotellist1 from '@/pages/hotellist1'
import Hotellist2 from '@/pages/hotellist2'
import Cars from '@/pages/cars'

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
      path: '/zsgl1',
      name: 'Zsgl1',
      component: Zsgl1
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
    },
    {
      path: '/checkothers',
      name: 'Checkothers',
      component: Checkothers
    },
    {
      path: '/addroute',
      name: 'Addroute',
      component: Addroute
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/reported',
      name: 'Reported',
      component: Reported
    },
    {
      path: '/allreport',
      name: 'Allreport',
      component: Allreport
    },
    {
      path: '/drivercenter',
      name: 'Drivercenter',
      component: Drivercenter
    },
    {
      path: '/driveredit',
      name: 'Driveredit',
      component: Driveredit
    },
    {
      path: '/driverfinish',
      name: 'Driverfinish',
      component: Driverfinish
    },
    {
      path: '/driveroperate',
      name: 'Driveroperate',
      component: Driveroperate
    },
    {
      path: '/drivershift',
      name: 'Drivershift',
      component: Drivershift
    },
    {
      path: '/dining',
      name: 'Dining',
      component: Dining
    },
    {
      path: '/diningdetail',
      name: 'Diningdetail',
      component: Diningdetail
    },
    {
      path: '/diningscan',
      name: 'Diningscan',
      component: Diningscan
    },
    {
      path: '/dininglist',
      name: 'Dininglist',
      component: Dininglist
    },
    {
      path: '/certificate',
      name: 'Certificate',
      component: Certificate
    },
    {
      path: '/personalcenter',
      name: 'Personalcenter',
      component: Personalcenter
    },
    {
      path: '/hotelregist',
      name: 'Hotelregist',
      component: Hotelregist
    },
    {
      path: '/hotellist1',
      name: 'Hotellist1',
      component: Hotellist1
    },
    {
      path: '/hotellist2',
      name: 'Hotellist2',
      component: Hotellist2
    },
    {
      path: '/cars',
      name: 'Cars',
      component: Cars
    }
  ]
})
