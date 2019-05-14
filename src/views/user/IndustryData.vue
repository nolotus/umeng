<style scoped>
.content{
  width: 200%;
  min-height: 200px;
  background-color: #fff;
  position: relative;
  transition: transform .5s;
  /* transform:translateX(-50%); */
}
.content_left{
  width: 50%;
 float: left;
}
.content_right{
  width: 50%;
  height: 200px;
  float: left;
  /* background-color: green; */
}
.content_right_header{
  padding:20px;
  display: flex;
  justify-content:space-between;
  font-size: 16px;
}
.back_btn{
  padding-right:20px;
  border-right:1px solid #e5e5e5;
  margin-right:20px;
  color:rgba(33, 150, 243, 0.8);
  font-size: 16px;
  
}
</style>
<template>
  <div style="height:100%;background-color:rgb(243,243,243); padding:16px 24px;">
    <div style="width:100%;overflow:hidden;">
      <div class="content">
          <div class="content_left">
               <Dropdown trigger="click" style="margin:20px;padding-right:20px;border-right:1px solid #e5e5e5;" @on-click="handleDropdown">
                    <a href="javascript:void(0)" style="color:#333;font-size:16px;">
                        {{dropdownTitle}}
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="所有应用类型">{{dropdownTitle == '新闻'?'所有':'所有应用类型'}}</DropdownItem>
                        <DropdownItem name="新闻">新闻</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Table  :columns="columnsLeft" :data="dataLeft"></Table>
          </div>
          <div class="content_right">
                <div  class="content_right_header">
                    <div>
                        <Button type="text" class="back_btn" @click="handleBack">返回</Button>
                        <span>日新增用户</span>
                    </div>
                    <RadioGroup v-model="radioGroupButton" type="button" size="large">
                      <Radio label="过去8周"></Radio>
                      <Radio label="过去8月"></Radio>
                  </RadioGroup>
                </div>
                <Table  :columns="columnsRight" :data="dataLeft"></Table>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndustryData',
  props: {
  },
  data(){
    return {
      dropdownTitle:"所有应用类型",
      radioGroupButton:"",
      current:"left",
      columnsRight:[
          {title: '数据指标', key: 'dataIndex'},
          {title: '我的数据', key: 'myData'},
          {title: '全体均值', key: 'allAvg'},
          {title: '全体排名', key: 'allRank'},
          {title: '同规模均值', key: 'scaleAvg'},
          {title: '同规模排名', key: 'scalePank'},
      ],
      columnsLeft:[
          {title: '数据指标', key: 'dataIndex'},
          {title: '我的数据', key: 'myData'},
          {title: '全体均值', key: 'allAvg'},
          {title: '全体排名', key: 'allRank'},
          {title: '同规模均值', key: 'scaleAvg'},
          {title: '同规模排名', key: 'scalePank'},
          {title: '排名趋势',           
              render: (h, params) => {
                  return h('div', [
                      h('Button', {
                          props: {
                              type: 'text',
                              size: 'small',
                              
                          },
                          style:{
                            color:"rgb(45,140,240)"
                          },
                          on: {
                              click: () => {
                                  let content = document.querySelector(".content");
                                  content.style.transform = "translateX(-50%)";
                              }
                          }
                      },"展开")
                  ]);
              }},
      ],
      dataLeft:[
          {dataIndex:"日新增用户",myData:"89",allAvg:"2405",allRank:"70-80%",scaleAvg:"219",scalePank:"60-70%"},
          {dataIndex:"日活跃用户",myData:"89",allAvg:"2405",allRank:"70-80%",scaleAvg:"219",scalePank:"60-70%"},
          {dataIndex:"日新增用户",myData:"89",allAvg:"2405",allRank:"70-80%",scaleAvg:"219",scalePank:"60-70%"},
          {dataIndex:"日启动次数",myData:"89",allAvg:"2405",allRank:"70-80%",scaleAvg:"219",scalePank:"60-70%"},
          {dataIndex:"平均单次使用时长",myData:"89",allAvg:"2405",allRank:"70-80%",scaleAvg:"219",scalePank:"60-70%"},
          {dataIndex:"上周活跃用户",myData:"89",allAvg:"2405",allRank:"70-80%",scaleAvg:"219",scalePank:"60-70%"},
          {dataIndex:"上周活跃率",myData:"89",allAvg:"2405",allRank:"70-80%",scaleAvg:"219",scalePank:"60-70%"},
          {dataIndex:"上月活跃用户",myData:"89",allAvg:"2405",allRank:"70-80%",scaleAvg:"219",scalePank:"60-70%"},
          {dataIndex:"上月活跃率",myData:"89",allAvg:"2405",allRank:"70-80%",scaleAvg:"219",scalePank:"60-70%"},
      ],
    };
  },
  methods:{
    handleBack(){
      let content = document.querySelector(".content");
        content.style.transform = "translateX(0)";
    },
    handleDropdown(name){
        console.log(name);
        this.dropdownTitle = name;
    },
  },
  mounted() {
      console.log("行业数据")
      
  },
}
</script>

