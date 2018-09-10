import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 登录
const Login = r => require.ensure([], () => r(require('@/pages/login')), 'login')
const Index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const NoMessage = r => require.ensure([], () => r(require('@/pages/noMessage')), 'noMessage')
// import Index from '@/pages/index'
// 会务
const Meetings = () => import(/* webpackChunkName: 'conference' */ '@/pages/conference/meetings')
const Details = () => import(/* webpackChunkName: 'conference' */ '@/pages/conference/details')
const ApplyRegist = () => import(/* webpackChunkName: 'conference' */ '@/pages/conference/applyRegist')
const EditRegist = () => import(/* webpackChunkName: 'conference' */ '@/pages/conference/editRegist')
const ReplaceEroll = () => import(/* webpackChunkName: 'conference' */ '@/pages/conference/replaceEroll')
const ReplaceErollOne = () => import(/* webpackChunkName: 'conference' */ '@/pages/conference/replaceErollOne')
const EnrollSuccess = () => import(/* webpackChunkName: 'conference' */ '@/pages/conference/enrollSuccess')
const EnrollManage = () => import(/* webpackChunkName: 'conference' */ '@/pages/conference/enrollManage')
// 住宿
const HotelManage = () => import(/* webpackChunkName: 'accommodation' */ '@/pages/accommodation/hotelManage')
const AccommodationManage = () => import(/* webpackChunkName: 'accommodation' */ '@/pages/accommodation/accommodationManage')
const AccomAdd = () => import(/* webpackChunkName: 'accommodation' */ '@/pages/accommodation/accomAdd')
const Haslived = () => import(/* webpackChunkName: 'accommodation' */ '@/pages/accommodation/haslived')
const PeopleManage = () => import(/* webpackChunkName: 'accommodation' */ '@/pages/accommodation/peopleManage')
const Map = () => import(/* webpackChunkName: 'accommodation' */ '@/pages/accommodation/map')
const Hotelregist = () => import(/* webpackChunkName: 'accommodation' */ '@/pages/accommodation/hotelregist')
const HotellistOne = () => import(/* webpackChunkName: 'accommodation' */ '@/pages/accommodation/hotellistOne')
const HotellistTwo = () => import(/* webpackChunkName: 'accommodation' */ '@/pages/accommodation/hotellistTwo')
// 行程
const JourneyManage = () => import(/* webpackChunkName: 'journey' */ '@/pages/journey/journeyManage')
const AddPeople = () => import(/* webpackChunkName: 'journey' */ '@/pages/journey/addPeople')
const AddJourney = () => import(/* webpackChunkName: 'journey' */ '@/pages/journey/AddJourney')
const EditJourney = () => import(/* webpackChunkName: 'journey' */ '@/pages/journey/editJourney')
const Checkothers = () => import(/* webpackChunkName: 'journey' */ '@/pages/journey/checkothers')
const Addroute = () => import(/* webpackChunkName: 'journey' */ '@/pages/journey/addroute')
// checkin
const Report = () => import(/* webpackChunkName: 'checkin' */ '@/pages/checkin/report')
const Usereport = () => import(/* webpackChunkName: 'checkin' */ '@/pages/checkin/usereport')
const Reported = () => import(/* webpackChunkName: 'checkin' */ '@/pages/checkin/reported')
const Allreport = () => import(/* webpackChunkName: 'checkin' */ '@/pages/checkin/Allreport')
const Listofsubscribers = () => import(/* webpackChunkName: 'checkin' */ '@/pages/checkin/listofsubscribers')
// 派车
const Drivercenter = () => import(/* webpackChunkName: 'vehicles' */ '@/pages/vehicles/drivercenter')
const Driveredit = () => import(/* webpackChunkName: 'vehicles' */ '@/pages/vehicles/driveredit')
const Driverfinish = () => import(/* webpackChunkName: 'vehicles' */ '@/pages/vehicles/driverfinish')
const Driveroperate = () => import(/* webpackChunkName: 'vehicles' */ '@/pages/vehicles/driveroperate')
const Drivershift = () => import(/* webpackChunkName: 'vehicles' */ '@/pages/vehicles/drivershift')
const Driveradd = () => import(/* webpackChunkName: 'vehicles' */ '@/pages/vehicles/driveradd')
const Cars = () => import(/* webpackChunkName: 'vehicles' */ '@/pages/vehicles/cars')
const Vehicledetails = () => import(/* webpackChunkName: 'vehicles' */ '@/pages/vehicles/vehicledetails')
// 用餐
const Dining = () => import(/* webpackChunkName: 'meal' */ '@/pages/meal/dining')
const DiningOne = () => import(/* webpackChunkName: 'meal' */ '@/pages/meal/diningOne')
const Diningdetail = () => import(/* webpackChunkName: 'meal' */ '@/pages/meal/diningdetail')
const Diningscan = () => import(/* webpackChunkName: 'meal' */ '@/pages/meal/diningscan')
const Dininglist = () => import(/* webpackChunkName: 'meal' */ '@/pages/meal/Dininglist')
// 用户中心
const Certificate = () => import(/* webpackChunkName: 'user' */ '@/pages/user/certificate')
const Personalcenter = () => import(/* webpackChunkName: 'user' */ '@/pages/user/personalcenter')
const PersonalSettings = () => import(/* webpackChunkName: 'user' */ '@/pages/user/personalSettings')
const ConferenceCenter = () => import(/* webpackChunkName: 'user' */ '@/pages/user/conferenceCenter')
const LatestState = () => import(/* webpackChunkName: 'user' */ '@/pages/user/latestState')

Vue.use(Router)
let router = new Router({
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
      component: Meetings,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/applyRegist',
      name: 'ApplyRegist',
      component: ApplyRegist,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/EditRegist',
      name: 'EditRegist',
      component: EditRegist,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/replaceEroll',
      name: 'ReplaceEroll',
      component: ReplaceEroll,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/replaceErollOne',
      name: 'ReplaceErollOne',
      component: ReplaceErollOne,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/enrollSuccess',
      name: 'EnrollSuccess',
      component: EnrollSuccess,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/hotelManage',
      name: 'HotelManage',
      component: HotelManage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/accommodationManage',
      name: 'AccommodationManage',
      component: AccommodationManage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/accomAdd',
      name: 'AccomAdd',
      component: AccomAdd,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/peopleManage',
      name: 'PeopleManage',
      component: PeopleManage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/haslived',
      name: 'Haslived',
      component: Haslived,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/map',
      name: 'Map',
      component: Map,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/enrollManage',
      name: 'EnrollManage',
      component: EnrollManage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/journeyManage',
      name: 'JourneyManage',
      component: JourneyManage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/addPeople',
      name: 'AddPeople',
      component: AddPeople,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/addJourney',
      name: 'AddJourney',
      component: AddJourney,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/editJourney',
      name: 'EditJourney',
      component: EditJourney,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/checkothers',
      name: 'Checkothers',
      component: Checkothers,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/addroute',
      name: 'Addroute',
      component: Addroute,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/report',
      name: 'Report',
      component: Report,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/usereport',
      name: 'Usereport',
      component: Usereport,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/reported',
      name: 'Reported',
      component: Reported,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/allreport',
      name: 'Allreport',
      component: Allreport,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/listofsubscribers',
      name: 'Listofsubscribers',
      component: Listofsubscribers,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/drivercenter',
      name: 'Drivercenter',
      component: Drivercenter,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/driveredit',
      name: 'Driveredit',
      component: Driveredit,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/driverfinish',
      name: 'Driverfinish',
      component: Driverfinish,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/driveroperate',
      name: 'Driveroperate',
      component: Driveroperate,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/vehicledetails',
      name: 'Vehicledetails',
      component: Vehicledetails,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/drivershift',
      name: 'Drivershift',
      component: Drivershift,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/driveradd',
      name: 'Driveradd',
      component: Driveradd,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/dining',
      name: 'Dining',
      component: Dining,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/diningOne',
      name: 'DiningOne',
      component: DiningOne,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/diningdetail',
      name: 'Diningdetail',
      component: Diningdetail,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/diningscan',
      name: 'Diningscan',
      component: Diningscan,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/dininglist',
      name: 'Dininglist',
      component: Dininglist,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/certificate',
      name: 'Certificate',
      component: Certificate,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/personalcenter',
      name: 'Personalcenter',
      component: Personalcenter,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/personalSettings',
      name: 'PersonalSettings',
      component: PersonalSettings,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/conferenceCenter',
      name: 'ConferenceCenter',
      component: ConferenceCenter,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/latestState',
      name: 'LatestState',
      component: LatestState,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/hotelregist',
      name: 'Hotelregist',
      component: Hotelregist,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/hotellistOne',
      name: 'HotellistOne',
      component: HotellistOne,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/hotellistTwo',
      name: 'HotellistTwo',
      component: HotellistTwo,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/cars',
      name: 'Cars',
      component: Cars,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/noMessage',
      name: 'NoMessage',
      component: NoMessage,
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('name')) { // 判断当前的name是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
