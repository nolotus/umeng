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
</style>
<template>
    <header class="user_header">
          <p>{{currenPage}}</p>
          <DatePicker :value="form.daterange" format="yyyy-MM-dd" type="daterange" style="margin-right:10px;"  v-if="showWidget.datePicker"></DatePicker>
          <DatePicker :value="form.date" format="yyyy-MM-dd" type="date"  style="margin-right:10px;" v-if="showWidget.date"></DatePicker>
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
        daterange:['2019-05-06', '2019-05-13'],
        date: '2019-05-14',
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
    getFormData(){
        return this.form;
    }
  }
}
</script>


