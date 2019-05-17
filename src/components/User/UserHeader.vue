<style scoped>
.user_header{
  padding: 16px 24px;
  background: rgb(249,249,249);
}
.user_header >  p{
  color: rgb(51, 51, 51);
  font-size: 20px;
  margin-bottom: 16px;
}
.poptip{
  font-size: 12px;
  margin-bottom: 10px;
}
.poptip > span{
  color: #2196F3;
}
</style>
<template>
    <header class="user_header">
          <p>
            {{currenPage}} 
            <Poptip placement="right-start" trigger="hover">
                <Icon type="ios-help-circle-outline" style="margin-top:-5px;font-size:16px;"/>
                <div class="api" slot="content">
                  <p  class="poptip"><span>活跃用户：</span>启动过应用的用户（去重），启动过一次的用户即视为活跃用户，包括新用户与老用户</p>
                  <p  class="poptip"><span>活跃构成：</span>活跃用户中新增用户的占比比例</p>
                  <p  class="poptip"><span>活跃粘度：</span>DAU/过去7日活跃用户，DAU/过去30日活跃用户</p> 
                  <p  class="poptip"><span>过去7日活跃用户：</span>过去7日（不含今日）的活跃用户数（去重）</p>
                  <p  class="poptip"><span>过去30日活跃用户：</span>过去30日（不含今日）的活跃用户数（去重）</p>
                  <p  class="poptip"><span>分时活跃用户：</span>活跃用户在24小时中的分布情况（每小时间去重）​</p>
                  <p  class="poptip"><span>周活跃率：</span>周活跃用户占截止本周累计用户的比例​</p>
                  <p  class="poptip"><span>月活跃率：</span>月活跃用户占截止本月累计用户的比例​</p>
                  <p  class="poptip"><span>月活跃率：</span>月活跃用户占截止本月累计用户的比例​按天、周或月查看数据可进行版本、渠道的交叉筛选。</p>
                  <p  class="poptip">周区间定义为周日至次周周六。按周（按月）显示时，界面上用每周的周日（每个月的第一日）来代表该周（该月）</p>
                </div>
            </Poptip>
          </p>
          
          <DatePicker :value="form.daterange" format="yyyy-MM-dd" type="daterange" style="margin-right:10px;"  v-if="showWidget.datePicker"></DatePicker>
          <DatePicker :value="form.date" format="yyyy-MM-dd" type="date"  style="margin-right:10px;" v-if="showWidget.date" @on-change="dateChange"></DatePicker>
          <Select v-model="form.channel" style="width:200px;margin-right:10px;" v-if="showWidget.selectChannel">
              <Option value="0">全部渠道</Option>  
              <Option v-for="item in channelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Select v-model="form.version" style="width:200px;margin-right:10px;" v-if="showWidget.selectVersion">
              <Option value="0">全部版本</Option>  
              <Option v-for="item in versionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
    </header>
</template>

<script>
export default {
  name: 'UserHeader',
  props: {
    currenPage:String, //title
    showWidget:Object, //控制显示的form组件
    // showWidget:{
    //     date:true,
    //     datePicker:true,
    //     selectChannel:true,
    //     selectVersion:true,
    //   },
  },
  data(){
    return{
      
      form:{
        daterange:['2019-05-01', '2019-05-07'],
        date: '2019-05-01',
        channel:"0",
        version:"0",
      },
      channelList:[{value:"1",label:"App store"}],
      versionList:[
        {value:"1",label:"2.0.1"},
        {value:"2",label:"1.15.5"},
        {value:"3",label:"2.0.0"},
        {value:"4",label:"1.0"},
        {value:"5",label:"1.14.0"},
        {value:"6",label:"1.10.1"},
        {value:"7",label:"5.0.0"}
      ],
    }
  },
  created(){  
  },
  mounted(){
  },
  methods:{
    dateChange(val){
        this.$emit("dateChange",val)
    },
    getFormData(){
        return this.form;
    }
  }
}
</script>


