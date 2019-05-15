<style scoped>
.table_content {
  background: rgb(255, 255, 255);
  margin: 0px 24px;
  padding: 16px 32px;
}
.table_tool {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
}
</style>
<template>
  <div class="table_content">
    <div class="table_tool">
      <Button type="text" style="color:#1890ff;" @click="isShowTopTable = !isShowTopTable">
        {{isShowTopTable?'收起明细数据':'展开明细数据'}}
        <Icon :type="!isShowTopTable?'ios-arrow-down':'ios-arrow-up'"/>
      </Button>
      <Button type="text" style="color:#1890ff;">
        <Icon type="ios-log-out"/>导出
      </Button>
    </div>
    <div v-show="isShowTopTable">
      <Table :columns="columns" :data="data"></Table>
      <div style="margin-top:10px;text-align: right;" v-if="!banpaging">
        <Page :total="7" show-sizer/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Milestone",
  props: {
    isAddMilestone: Boolean,
    banpaging:Boolean,//不使用分页组件
    columns:Array,
    data:Array,
  },
  watch:{
    columns(val){
        // console.log(val)
    },
    data(val){
      //  console.log(val)
    },
    banpaging(val){
      // console.log(val)
    },
  },
  data() {
    return {
      isShowTopTable: false, //上面表格是否显示
    };
  },
  created() {
    console.log(this.banpaging)
  },
  mounted() {},
  methods: {}
};
</script>


