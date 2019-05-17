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
        <User-chart style="height:400px;" :options="options"></User-chart>
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
      <User-table :columns="tableParams[currenPageType].column" :data="currenPageType == 'version'?versionData:userData"></User-table>
      <template v-if="currenPageType === 'add'">
        <div class="content">
            <Chart-search-bar :currenPageType="currenPageType"></Chart-search-bar>
            <User-chart style="height:400px;"  :options="options"></User-chart>
        </div>
        <User-table :columns="morrowColumn" :data="userData"></User-table>
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
import axios from "axios";
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
      options:{
          title: {
            text: ""
          },
          subtitle: {
            text: ""
          },
          yAxis: {
            min: 0,
            gridLineDashStyle: "Dot",
            title: {
              text: ""
            },
            labels: {
              formatter: function() {
                return (this.value || 0)
                  .toString()
                  .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
              }
            }
          },
          legend: {
            // enabled: false //不显示图例
            // layout: 'vertical',
            // align: 'right',
            // verticalAlign: 'middle'
          },
          xAxis: {
            categories: [
              "2019-05-08",
              "2019-05-09",
              "2019-05-10",
              "2019-05-11",
              "2019-05-12",
              "2019-05-13",
              "2019-05-14"
            ]
          },
          plotOptions: {
            series: {
              lineWidth: 1.5, //折线宽度
              //  enableMouseTracking: false,
              marker: {
                // enabled: false
                symbol: "circle"
              }
            }
          },
          credits: {
            enabled: false //去掉水印
          },
          tooltip: {
            shared:true,
            crosshairs: {
              width: 1,
              color: "#ccc"
            }
          },
          series: [
            {
              name: "新增用户",
              color: "#2196F3", //颜色
              // lineWidth: 2,//折线宽度
              data: [113, 108, 79, 87, 41, 99, 95] //数据
            }
          ],
          responsive: {
            rules: [
              {
                condition: {
                  maxWidth: 500
                },
                chartOptions: {
                  legend: {
                    layout: "horizontal",
                    align: "center",
                    verticalAlign: "bottom"
                  }
                }
              }
            ]
          }
        },

        currenPageTitle:"用户分析",
        isAddMilestone:false,
        currenPageType:"add",
        showWidget:{ 
            date:false,
            datePicker:false,
            selectChannel:false,
            selectVersion:false,
        },
        userData:[],
        versionData:[],
        morrowColumn:[
            { title: "日期", key: "date" },
            { title: "次日留存率", key: "morrow" ,align: "right",},

        ],
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
                        params.row.addcount + "（" + params.row.addProportion + "）"
                      );
                    }
                  }
          ],
          data:[
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
          ]
        },
        "startcount":{
          column:[
              { title: "日期", key: "date" },
              { title: "启动次数", key: "startCount" }, 
              { title: "启动次数占比", key: "startProportion" }, 
          ],
          data:[
          ]
        },
        "version":{
          column:[
              { title: "版本", key: "version" },
              { title: "截至今日版本累计用户(%)", key: "accumulated" },
              { title: "新增用户", key: "addUser" },
              { title: "活跃用户(%)", key: "activeUser" },
              { title: "启动次数", key: "startCount" },
              { title: "升级用户", key: "upgradeUser" },
          ],
          data:[
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
        this.getUserData();
  },
  mounted(){

  },
  methods:{
    // 设置图表数据
    setOptions(){
      let xList = [], sList = [],ob={};
        if(this.currenPageType == "add"){
           xList = this.userData.map(item =>  item.date)
           sList.push({
              name:"新增用户",
              color: "#2196F3",
              data:this.userData.map(item => item.addcount)
           })
        }else if(this.currenPageType == "active"){
             xList = this.userData.map(item =>  item.date)
             sList.push({
              name:"活跃用户",
              color: "#2196F3",
              data:this.userData.map(item => item.activeNumber)
            })
        }else if(this.currenPageType == "startcount"){
             xList = this.userData.map(item =>  item.date)
             sList.push({
                name:"启动次数",
                color: "#2196F3",
                data:this.userData.map(item => item.startCount)
            })
        }
        else if(this.currenPageType == "version"){
          xList = this.versionData[0].list.map(item => item.date);
          this.versionData.forEach((item,index) => {
               sList.push({
                name:item.version,
                color:item.color,
                data:item.list.map( item2 => item2.addUser)
              })   
          })
        }
        this.options.xAxis.categories = xList;
        this.options.series = sList;
        console.log(this.options.series)

    },
    getUserData(callback){
        axios.all([
            axios.get("/data/getuserdata"),
            axios.get("/data/getversiondata")
        ])
        .then(axios.spread( (user,version) => {
               this.userData = user.data.data;
               this.versionData = version.data.data;
               console.log(user,version)
               this.setOptions();
        }))
        .catch(err => {
          
        })
       
    },
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
         this.setOptions();
    },

  }
}
</script>


