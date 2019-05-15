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
     <UserTable></UserTable>
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


