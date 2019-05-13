import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RealTimeStatistics from "./views/generalize/RealTimeStatistics.vue";//实时统计
import OverallTrend from "./views/generalize/OverallTrend.vue"; //整体趋势

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
