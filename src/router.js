import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RealTimeStatistics from "./views/generalize/RealTimeStatistics.vue";//实时统计
import OverallTrend from "./views/generalize/OverallTrend.vue"; //整体趋势
import AddUser from "./views/user/AddUser.vue"; //新增用户
import retention from "./views/retention/retention.vue";

import retentionTrace from "./views/retention/retention_trace.vue";//实时统计
import freshness from "./views/retention/freshness.vue";//实时统计
import engagement from "./views/retention/engagement.vue";//实时统计
import IndustryData from "./views/user/IndustryData.vue"; //行业数据
import Channel from "./views/channel/Channel.vue"; //行业数据

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
            path: '/retention',
            name: 'retention',
            component: retention
        },
        {
            path: '/freshness',
            name: 'freshness',
            component: freshness
        },
        {
            path: '/retentionTrace',
            name: 'retentionTrace',
            component: retentionTrace
        },
        {
            path: '/engagement',
            name: 'engagement',
            component: engagement
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
        {
            path:"/channel/:type",
            name:"channel",
            component:Channel
        },
        {
          path: '/industrydata',
          name: 'industrydata',
          component: IndustryData
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
