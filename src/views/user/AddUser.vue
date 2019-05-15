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
      <User-table :columns="tableParams[currenPageType].column" :data="tableParams[currenPageType].data"></User-table>
      <template v-if="currenPageType === 'add'">
        <div class="content">
            <Chart-search-bar :currenPageType="currenPageType"></Chart-search-bar>
            <User-chart style="height:400px;"></User-chart>
        </div>
        <User-table :columns="tableParams[currenPageType].column" :data="tableParams[currenPageType].data"></User-table>
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
       tableParams:{
        "add":{
          column:[
                  { title: "日期", key: "date" },
                  {
                    title: "新增用户（占比）",
                    align: "right",
                    render: (h, params) => {
                      return h(
                        "div",
                        params.row.addcount + "（" + params.row.proportion + "）"
                      );
                    }
                  }
          ],
          data:[
              { date: "2019-05-14", addcount: 48, proportion: "2.94%" },
              { date: "2019-05-15", addcount: 99, proportion: "3.94%" },
              { date: "2019-05-16", addcount: 41, proportion: "4.94%" },
              { date: "2019-05-17", addcount: 87, proportion: "5.94%" },
              { date: "2019-05-18", addcount: 79, proportion: "6.94%" },
              { date: "2019-05-19", addcount: 108, proportion: "7.94%" },
              { date: "2019-05-20", addcount: 113, proportion: "8.94%" }
          ]
        },
        "active":{
          column:[
              { title: "日期", key: "date" },
              { title: "活跃用户数", key: "activeNumber" },
              { title: "活跃构成(新用户占比)", key: "constitute" },
              { title: "DAU/过去7日活跃用户", key: "dau7" },
              { title: "DAU/过去30日活跃用户", key: "dau30" },
          ],
          data:[
              { date: "2019-05-14", activeNumber: 1148, constitute: "13.94%" ,constitute:"44.56%",dau7:"55.56%",dau30:"28.88%"},
              { date: "2019-05-15", activeNumber: 919,  constitute: "12.94%" ,constitute:"44.56%",dau7:"55.56%",dau30:"28.88%"},
              { date: "2019-05-16", activeNumber: 411,  constitute: "14.94%" ,constitute:"44.56%",dau7:"55.56%",dau30:"28.88%"},
              { date: "2019-05-17", activeNumber: 817,  constitute: "15.94%" ,constitute:"44.56%",dau7:"55.56%",dau30:"28.88%"},
              { date: "2019-05-18", activeNumber: 719,  constitute: "16.94%" ,constitute:"44.56%",dau7:"55.56%",dau30:"28.88%"},
              { date: "2019-05-19", activeNumber: 608,  constitute: "17.94%" ,constitute:"44.56%",dau7:"55.56%",dau30:"28.88%"},
              { date: "2019-05-20", activeNumber: 513,  constitute: "18.94%" ,constitute:"44.56%",dau7:"55.56%",dau30:"28.88%"}
          ]
        },
        "startcount":{
          column:[
              { title: "日期", key: "date" },
              { title: "启动次数", key: "startCount" }, 
              { title: "启动次数占比", key: "proportion" }, 
          ],
          data:[
              { date: "2019-05-14", startCount: 118,proportion:"13.33%"},
              { date: "2019-05-15", startCount: 91, proportion:"13.33%"},
              { date: "2019-05-16", startCount: 41, proportion:"13.33%"},
              { date: "2019-05-17", startCount: 81, proportion:"13.33%"},
              { date: "2019-05-18", startCount: 71, proportion:"13.33%"},
              { date: "2019-05-19", startCount: 60, proportion:"13.33%"},
              { date: "2019-05-20", startCount: 51, proportion:"13.33%"},
          ]
        },
        "version":{
          column:[
              { title: "版本", key: "versin" },
              { title: "截至今日版本累计用户(%)", key: "accumulated" },
              { title: "新增用户", key: "addUser" },
              { title: "活跃用户(%)", key: "activeUser" },
              { title: "启动次数", key: "startCount" },
              { title: "升级用户", key: "upgradeUser" },
          ],
          data:[
             {versin:"2.0.1",accumulated:1569,addUser:125,activeUser:"1173（70.03%）",startCount:6489,upgradeUser:3},
             {versin:"1.15.5",accumulated:1569,addUser:0,activeUser:"1173（70.03%）",startCount:6489,upgradeUser:3},
             {versin:"2.0.0",accumulated:1569,addUser:10,activeUser:"1173（70.03%）",startCount:6489,upgradeUser:3},
             {versin:"1.0",accumulated:1569,addUser:20,activeUser:"1173（70.03%）",startCount:6489,upgradeUser:3},
             {versin:"1.14.0",accumulated:1569,addUser:30,activeUser:"1173（70.03%）",startCount:6489,upgradeUser:3},
             {versin:"1.10.0",accumulated:1569,addUser:0,activeUser:"1173（70.03%）",startCount:6489,upgradeUser:3},
             {versin:"5.0.0",accumulated:1569,addUser:0,activeUser:"1173（70.03%）",startCount:6489,upgradeUser:3},
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


