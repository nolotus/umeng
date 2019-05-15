<style scoped>
  .content{
    margin: auto 24px;
    margin-top: 16px;
    padding: 16px 32px;
    background-color: #FFFFFF;
    border-bottom:1px solid #f5f5f5;
    position: relative;
  }
</style>
<template>
  <div style="overflow:auto;height:100%;background-color:#f5f5f5;">
     <User-header ref="UserHeader" :currenPage="currenPageTitle" :showWidget="showWidget"/>
     <div class="content">
         <Chart-search-bar :currenPageType="currenPageType" v-if="currenPageType === 'channellist'"></Chart-search-bar>
         <User-chart style="height:400px;"></User-chart>
         <Comparison></Comparison>
     </div>
     <User-table 
      :columns="tableParams[currenPageType].column" 
      :data="tableParams[currenPageType].data" 
      :banpaging="currenPageType == 'timeframe'?true:false">
     </User-table>
  </div>
</template>

<script>
import UserHeader from "../../components/User/UserHeader.vue";
import ChartSearchBar from "../../components/User/ChartSearchBar.vue";
import UserChart from "../../components/User/UserChart.vue";
import Comparison from "../../components/User/Comparison.vue";//对比
import Milestone from "../../components/User/Milestone.vue";//里程碑
import UserTable from "../../components/User/UserTable.vue";//表格
export default {
  components:{
      UserHeader,
      ChartSearchBar,
      UserChart,
      Comparison,
      Milestone,
      UserTable
  },
  name: 'channel',
  props: {},
  data(){
    return{
        currenPageTitle:"时段详情（新增用户）",
        currenPageType:"timeframe",
        showWidget:{
            date:false,
            datePicker:false,
            selectChannel:false,
            selectVersion:false,
        },
        tableParams:{
        "timeframe":{
          column:[
              { title: "时间", key: "time" },          
              { title: "App Store", key: "appStore" },          
          ],
          data:[
            {time:"23:00",appStore:0},
            {time:"22:00",appStore:0},
            {time:"21:00",appStore:0},
            {time:"20:00",appStore:0},
            {time:"19:00",appStore:0},
            {time:"18:00",appStore:10},
            {time:"17:00",appStore:16},
            {time:"16:00",appStore:16},
            {time:"15:00",appStore:15},
            {time:"14:00",appStore:10},
            {time:"13:00",appStore:0},
            {time:"12:00",appStore:12},
            {time:"11:00",appStore:13},
            {time:"10:00",appStore:14},
            {time:"09:00",appStore:15},
            {time:"08:00",appStore:0},
            {time:"07:00",appStore:0},
            {time:"06:00",appStore:0},
            {time:"05:00",appStore:0},
            {time:"04:00",appStore:0},
            {time:"03:00",appStore:0},
            {time:"02:00",appStore:0},
            {time:"01:00",appStore:0},
            {time:"00:00",appStore:0},
          ]
        },
        "channellist":{
          column:[
              { title: "渠道名称", key: "appStore"},
              { title: "新增用户", key: "addUser"},
              { title: "活跃用户", key: "activeUser"},
              { title: "累计用户(%)", key: "accumulated"},
  
          ],
          data:[
             {appStore:"App Store",addUser:63,activeUser:1678,accumulated:"13,675(100%)"},
          ]
        },
       },
    }
  },
  watch:{
    "$route":"routeChange"
  },
  created(){
      this.setCurrenPageTitle(this.$route.params.type);
  },
  mounted(){
      
  },
  methods:{
    setCurrenPageTitle(val){
        this.currenPageType = val;
        for(let key in this.showWidget){
            this.showWidget[key] = false;
        }
        if(val === 'timeframe'){
            this.currenPageTitle = "时段详情（新增用户）";
            this.showWidget.date = true;
        }else if(val === 'channellist'){
            this.currenPageTitle = "渠道列表";
            this.showWidget.datePicker = true;
            this.showWidget.selectChannel = true;
        }
    },
    routeChange(cur){
         this.setCurrenPageTitle(cur.params.type);
    },

  }
}
</script>


