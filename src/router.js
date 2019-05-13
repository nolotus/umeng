import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RealTimeStatistics from "./views/generalize/RealTimeStatistics.vue";//实时统计
import OverallTrend from "./views/generalize/OverallTrend.vue"; //整体趋势
import AddUser from "./views/user/AddUser.vue"; //新增用户
// import ActiveUser from "./views/user/ActiveUser.vue"; //活跃用户
// import StartCount from "./views/user/StartCount.vue"; //启动次数
// import Version from "./views/user/Version.vue"; //版本分布
// import IndustryData from "./views/user/IndustryData.vue"; //版本分布

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/realtimestatistics',
      name: 'realtimestatistics',
      component: RealTimeStatistics
    },
    {
      path: '/overalltrend',
      name: 'overalltrend',
      component: OverallTrend
    },
    {
      path: '/adduser/:type',
      name: 'user',
      component: AddUser
    },
    // {
    //   path: '/activeuser/:type',
    //   name: 'activeuser',
    //   component: ActiveUser
    // },
    // {
    //   path: '/startcount/:type',
    //   name: 'startcount',
    //   component: StartCount
    // },
    // {
    //   path: '/version/:type',
    //   name: 'version',
    //   component: Version
    // },
    // {
    //   path: '/industrydata',
    //   name: 'industrydata',
    //   component: IndustryData
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
