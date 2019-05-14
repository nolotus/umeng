<style scoped>
  .content{
    margin: auto 24px;
    margin-top: 16px;
    padding: 16px 32px;
    background-color: #FFFFFF;
    max-height: 800px;
    border-bottom:1px solid #f5f5f5;
    position: relative;
  }
  .content > .serchs_title{
        color: rgb(51, 51, 51);
        font-size: 16px;
        margin-bottom: 10px;
  }
  .content > .serchs_item{
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
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
  .milestone_box{
     margin: auto 24px;
     /* border:1px solid #f5f5f5; */
     padding: 24px 32px 16px;
    background: #F9F9F9;
    border-top: 1px solid #EEE;
  }
  .table_content{
    background: rgb(255, 255, 255);
    margin: 0px 24px;
    padding: 16px 32px;
  }
  .table_tool{
    display: flex;
    justify-content:space-between;
    padding: 16px 0;
  }
</style>
<template>
  <div style="overflow:auto;height:100%;background-color:#f5f5f5;">
     <User-header :currenPage="currenPageTitle" ref="UserHeader"/>
     <div class="content">
         <p class="serchs_title" v-if="currenPageType === 'add' || currenPageType === 'version'">新增趋势</p>
        <div class="serchs_item">
            <div class="left">
                   <RadioGroup v-model="button" type="button" size="large">
                         <Radio v-for="(item,index) in typeList[currenPageType]" :label="item.label" :key="index" :disabled="item.disabled"></Radio>
                  </RadioGroup>
            </div>
            <div class="right">
                <RadioGroup v-model="button2" type="button" size="large" v-if="currenPageType != 'version'">
                    <Radio label="小时" disabled v-if="currenPageType != 'active'"></Radio>
                    <Radio label="天" ></Radio>
                    <Radio label="周"></Radio>
                    <Radio label="月" disabled></Radio>
                </RadioGroup>
            </div>
        </div>
        <User-chart style="height:400px;"></User-chart>
         <Dropdown placement="top" @on-click="handleDropdown" style="margin-right:16px;">
            <Button :type="dropdownValue?'default':'primary'">
              <Icon type="md-add" />
                添加对比度
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem name="版本对比">版本对比</DropdownItem>
                <DropdownItem name="渠道对比">渠道对比</DropdownItem>
                <DropdownItem name="时段对比">时段对比</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Button type="primary" v-show="dropdownValue"><Icon type="md-add" />{{dropdownValue}}</Button>


        <div class="milestone_btn" @click="handlemilestonebtn">
          <Icon :type="!isAddMilestone?'ios-arrow-down':'ios-arrow-up'"/>
        </div>
     </div>
     <div class="milestone_box" v-show="isAddMilestone">
        <div style="border-top:1px solid #EEE;">
           <Button type="text"  style="margin-top:16px;color: rgb(33, 150, 243);font-size: 14px;"><Icon type="md-add"/>添加里程碑</Button>
        </div>
    </div>
     <div class="table_content">
          <div class="table_tool">
              <Button type="text" style="color:#1890ff;" @click="isShowTopTable = !isShowTopTable">{{isShowTopTable?'收起明细数据':'展开明细数据'}}  <Icon :type="!isShowTopTable?'ios-arrow-down':'ios-arrow-up'" /></Button>
              <Button type="text" style="color:#1890ff;"><Icon type="ios-log-out" /> 导出</Button>
          </div>
          <div v-show="isShowTopTable">
             <Table :columns="columns1" :data="topTableData"></Table>
              <div style="margin-top:10px;text-align: right;" >
                <Page :total="7" show-sizer />
              </div>
          </div>
     </div>
  </div>
</template>

<script>
import UserHeader from "../../components/UserHeader.vue";
import UserChart from "../../components/UserChart.vue";
export default {
  components:{
    UserHeader,
    UserChart
  },
  name: 'AddUser',
  props: {},
  data(){
    return{
       columns1: [ 
         {title: '日期',key: 'date'},
         {title: '新增用户（占比）',key: 'action',align: 'right',            
              render: (h, params) => {
                  return h('div', params.row.addcount + "（" + params.row.proportion + '）');
              }},
       ],
        topTableData: [
           {date:"2019-05-14",addcount:48,proportion:"2.94%"}, 
           {date:"2019-05-15",addcount:99,proportion:"3.94%"}, 
           {date:"2019-05-16",addcount:41,proportion:"4.94%"}, 
           {date:"2019-05-17",addcount:87,proportion:"5.94%"}, 
           {date:"2019-05-18",addcount:79,proportion:"6.94%"}, 
           {date:"2019-05-19",addcount:108,proportion:"7.94%"}, 
           {date:"2019-05-20",addcount:113,proportion:"8.94%"}, 
        ],
      button:"",
      button2:"",
      isShowTopTable:false,//上面表格是否显示
      isAddMilestone:false,
      dropdownValue:"",
      currenPageType:"add",
      currenPageTitle:"用户分析",
      typeList:{
          "add":[
            {label:"新增用户"}
          ],
          "active":[
            {label:"新增用户",},
            {label:"活跃趋势",},
            {label:"活跃构成",},
            {label:"活跃粘度",},
            {label:"分时活跃用户",disabled:true},
            {label:"周活跃率",},
            {label:"月活跃率",disabled:true}
          ],
          "startcount":[],
           "version":[
             {label:"新增用户"},
             {label:"活跃用户"},
             {label:"启动次数"}
           ]
      }
    }
  },
  watch:{
    "$route":"routeChange"
  },
  created(){
        this.currenPageTitle = this.setCurrenPageTitle(this.$route.params.type);
  },
  mounted(){

  },
  methods:{
    handlemilestonebtn(){
      this.isAddMilestone = !this.isAddMilestone;
      let milestone_btn = document.querySelector(".milestone_btn");
  console.log(milestone_btn)
      if(this.isAddMilestone){
          milestone_btn.style.bottom = "-94px";
      }else{
         milestone_btn.style.bottom = "-1px";
      }
    },
    handleDropdown(name){
      console.log(name)
      this.dropdownValue = name;
    },
    setCurrenPageTitle(val){
      this.currenPageType = val;
      switch(val){
        case "add":
          return "新增用户分析";
         case "active":
          return "活跃用户分析";
         case "startcount":
          return "启动次数";
         case "version":
          return "版本分布";
      }
      return "用户分析";
    },
    routeChange(cur){
      this.currenPageTitle = this.setCurrenPageTitle(cur.params.type);
    },

  }
}
</script>


