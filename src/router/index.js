import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Meetings from '@/pages/conference/meetings'
import Details from '@/pages/conference/details'
import ApplyRegist from '@/pages/conference/applyRegist'
import EditRegist from '@/pages/conference/editRegist'
import ReplaceEroll from '@/pages/conference/replaceEroll'
import ReplaceErollOne from '@/pages/conference/replaceErollOne'
import EnrollSuccess from '@/pages/conference/enrollSuccess'
import HotelManage from '@/pages/accommodation/hotelManage'
import AccommodationManage from '@/pages/accommodation/accommodationManage'
import AccomAdd from '@/pages/accommodation/accomAdd'
import Haslived from '@/pages/accommodation/haslived'
import PeopleManage from '@/pages/accommodation/peopleManage'
import Map from '@/pages/accommodation/map'
import EnrollManage from '@/pages/conference/enrollManage'
import JourneyManage from '@/pages/journey/journeyManage'
import AddPeople from '@/pages/journey/addPeople'
import AddJourney from '@/pages/journey/addJourney'
import EditJourney from '@/pages/journey/editJourney'
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
import Driveradd from '@/pages/vehicles/driveradd'
import Dining from '@/pages/meal/dining'
import DiningOne from '@/pages/meal/diningOne'
import Diningdetail from '@/pages/meal/diningdetail'
import Diningscan from '@/pages/meal/diningscan'
import Dininglist from '@/pages/meal/dininglist'
import Certificate from '@/pages/user/certificate'
import Personalcenter from '@/pages/user/personalcenter'
import PersonalSettings from '@/pages/user/personalSettings'
import ConferenceCenter from '@/pages/user/conferenceCenter'
import LatestState from '@/pages/user/latestState'
import Hotelregist from '@/pages/accommodation/hotelregist'
import HotellistOne from '@/pages/accommodation/HotellistOne'
import HotellistTwo from '@/pages/accommodation/hotellistTwo'
import Cars from '@/pages/vehicles/cars'
import Login from '@/pages/login'
import NoMessage from '@/pages/noMessage'

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
      path: '/applyRegist',
      name: 'ApplyRegist',
      component: ApplyRegist
    },
    {
      path: '/EditRegist',
      name: 'EditRegist',
      component: EditRegist
    },
    {
      path: '/replaceEroll',
      name: 'ReplaceEroll',
      component: ReplaceEroll
    },
    {
      path: '/replaceErollOne',
      name: 'ReplaceErollOne',
      component: ReplaceErollOne
    },
    {
      path: '/enrollSuccess',
      name: 'EnrollSuccess',
      component: EnrollSuccess
    },
    {
      path: '/hotelManage',
      name: 'HotelManage',
      component: HotelManage
    },
    {
      path: '/accommodationManage',
      name: 'AccommodationManage',
      component: AccommodationManage
    },
    {
      path: '/accomAdd',
      name: 'AccomAdd',
      component: AccomAdd
    },
    {
      path: '/peopleManage',
      name: 'PeopleManage',
      component: PeopleManage
    },
    {
      path: '/haslived',
      name: 'Haslived',
      component: Haslived
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/enrollManage',
      name: 'EnrollManage',
      component: EnrollManage
    },
    {
      path: '/journeyManage',
      name: 'JourneyManage',
      component: JourneyManage
    },
    {
      path: '/addPeople',
      name: 'AddPeople',
      component: AddPeople
    },
    {
      path: '/addJourney',
      name: 'AddJourney',
      component: AddJourney
    },
    {
      path: '/editJourney',
      name: 'EditJourney',
      component: EditJourney
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
      path: '/driveradd',
      name: 'Driveradd',
      component: Driveradd
    },
    {
      path: '/dining',
      name: 'Dining',
      component: Dining
    },
    {
      path: '/diningOne',
      name: 'DiningOne',
      component: DiningOne
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
      path: '/personalSettings',
      name: 'PersonalSettings',
      component: PersonalSettings
    },
    {
      path: '/conferenceCenter',
      name: 'ConferenceCenter',
      component: ConferenceCenter
    },
    {
      path: '/latestState',
      name: 'LatestState',
      component: LatestState
    },
    {
      path: '/hotelregist',
      name: 'Hotelregist',
      component: Hotelregist
    },
    {
      path: '/hotellistOne',
      name: 'HotellistOne',
      component: HotellistOne
    },
    {
      path: '/hotellistTwo',
      name: 'HotellistTwo',
      component: HotellistTwo
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
    },
    {
      path: '/noMessage',
      name: 'NoMessage',
      component: NoMessage
    }
  ]
})
