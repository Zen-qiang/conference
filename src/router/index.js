import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Meetings from '@/pages/conference/meetings'
import Details from '@/pages/conference/details'
import Sqbm from '@/pages/conference/sqbm'
import Dbm from '@/pages/conference/dbm'
import Dbm1 from '@/pages/conference/dbm1'
import Bmcg from '@/pages/conference/bmcg'
import Zsgl from '@/pages/accommodation/zsgl'
import Zsgl1 from '@/pages/accommodation/zsgl1'
import Staylist from '@/pages/accommodation/staylist'
import Rygl from '@/pages/accommodation/rygl'
import Map from '@/pages/accommodation/map'
import Bmgl from '@/pages/conference/bmgl'
import Xcgl from '@/pages/journey/xcgl'
import Tjry from '@/pages/journey/tjry'
import Tjxc from '@/pages/journey/tjxc'
import Checkothers from '@/pages/journey/checkothers'
import Addroute from '@/pages/journey/addroute'
import Report from '@/pages/checkin/report'
import Usereport from '@/pages/checkin/usereport'
import Reported from '@/pages/checkin/reported'
import Allreport from '@/pages/checkin/Allreport'
import Drivercenter from '@/pages/vehicles/drivercenter'
import Driveredit from '@/pages/vehicles/driveredit'
import Driverfinish from '@/pages/vehicles/driverfinish'
import Driveroperate from '@/pages/vehicles/driveroperate'
import Drivershift from '@/pages/vehicles/drivershift'
import Dining from '@/pages/meal/dining'
import Dining1 from '@/pages/meal/dining1'
import Diningdetail from '@/pages/meal/diningdetail'
import Diningscan from '@/pages/meal/diningscan'
import Dininglist from '@/pages/meal/dininglist'
import Certificate from '@/pages/user/certificate'
import Personalcenter from '@/pages/user/personalcenter'
import Hotelregist from '@/pages/accommodation/hotelregist'
import Hotellist1 from '@/pages/accommodation/hotellist1'
import Hotellist2 from '@/pages/accommodation/hotellist2'
import Cars from '@/pages/vehicles/cars'
import Login from '@/pages/login'

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
      path: '/dbm1',
      name: 'Dbm1',
      component: Dbm1
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
      path: '/staylist',
      name: 'Staylist',
      component: Staylist
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
      path: '/usereport',
      name: 'Usereport',
      component: Usereport
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
      path: '/dining1',
      name: 'Dining1',
      component: Dining1
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
