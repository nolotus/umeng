<style scoped>
.user_header{
  padding: 16px 24px;
  background: rgb(249, 249, 249);
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
          <DatePicker type="datetimerange" format="yyyy-MM-dd" style="width: 208px;border-radius: 0;"></DatePicker>
          <Select v-model="form.channel" style="width:200px;margin-left:10px;" v-if="$route.params.type != 'version'">
              <Option value="0">全部渠道</Option>  
              <Option v-for="item in channelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Select v-model="form.vaersion" style="width:200px;margin-left:10px;">
              <Option value="0">全部版本</Option>  
              <Option v-for="item in vaersionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
    </header>
</template>

<script>
export default {
  name: 'UserHeader',
  props: {
    currenPage:String,

  },
  data(){
    return{
      form:{
        data:"2019-05-06 - 2019-05-13",
        channel:"0",
        vaersion:"0"
      },
      channelList:[{value:"1",label:"App store"}],
      vaersionList:[
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
  watch:{
    "$route":"routeChange"
  },
  created(){
      
  },
  mounted(){

  },
  methods:{
    routeChange(cur,next){
      // console.log(cur,next);
    },
    getFormData(){
        return this.form;
    }
  }
}
</script>


