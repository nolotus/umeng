<style scoped>
  .content{
    margin: auto 24px;
    margin-top: 16px;
    padding: 16px 32px;
    background-color: #FFFFFF;
    border-bottom:1px solid #f5f5f5;
    position: relative;
  }
  .milestone_btn{
    line-height: 0;
    cursor: pointer;
    width: 96px;
    height: 16px;
    color: #2196F3;
    border: 1px solid #e5e5e5;
    text-align: center;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
<template>
  <div style="overflow:auto;height:100%;background-color:#f5f5f5;">
     <User-header ref="UserHeader" :currenPage="currenPageTitle" :showWidget="showWidget"/>
     <div class="content">
        <Chart-search-bar :currenPageType="currenPageType"></Chart-search-bar>
        <User-chart style="height:400px;"></User-chart>
        <Comparison></Comparison>
        <div class="milestone_btn" @click="isAddMilestone = !isAddMilestone" v-show="!isAddMilestone">
          <Icon type="ios-arrow-down"/>
        </div>
     </div>
      <Milestone 
        :isAddMilestone="isAddMilestone" 
        @addupIsAddMilestone="isAddMilestone = !isAddMilestone" 
        v-if="isAddMilestone">
      </Milestone>
      <UserTable></UserTable>
      <template v-if="currenPageType === 'add'">
        <div class="content">
            <Chart-search-bar :currenPageType="currenPageType"></Chart-search-bar>
            <User-chart style="height:400px;"></User-chart>
        </div>
        <UserTable></UserTable>
      </template>
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
  name: 'AddUser',
  props: {},
  data(){
    return{
       currenPageTitle:"用户分析",
       isAddMilestone:false,
       currenPageType:"add",
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
      switch(val){
        case "add":
            this.showWidget.datePicker = true;
            this.showWidget.selectChannel = true;
            this.showWidget.selectVersion = true;
            this.currenPageTitle = "新增用户分析";
            break;
         case "active":
              this.showWidget.datePicker = true;
              this.showWidget.selectChannel = true;
              this.showWidget.selectVersion = true;
             this.currenPageTitle = "活跃用户分析";
          break;
         case "startcount":
            this.showWidget.datePicker = true;
            this.showWidget.selectChannel = true;
            this.showWidget.selectVersion = true;
            this.currenPageTitle = "启动次数";
          break;
         case "version":
            this.showWidget.date = true;
            this.showWidget.selectVersion = true;
             this.currenPageTitle = "版本分布";
          break;
      }
    },
    routeChange(cur){
         this.setCurrenPageTitle(cur.params.type);
    },

  }
}
</script>


