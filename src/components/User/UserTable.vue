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
      <Table :columns="columns1" :data="topTableData"></Table>
      <div style="margin-top:10px;text-align: right;">
        <Page :total="7" show-sizer/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Milestone",
  props: {
    isAddMilestone: Boolean
  },
  data() {
    return {
      isShowTopTable: false, //上面表格是否显示
      columns1: [
        { title: "日期", key: "date" },
        {
          title: "新增用户（占比）",
          key: "action",
          align: "right",
          render: (h, params) => {
            return h(
              "div",
              params.row.addcount + "（" + params.row.proportion + "）"
            );
          }
        }
      ],
      topTableData: [
        { date: "2019-05-14", addcount: 48, proportion: "2.94%" },
        { date: "2019-05-15", addcount: 99, proportion: "3.94%" },
        { date: "2019-05-16", addcount: 41, proportion: "4.94%" },
        { date: "2019-05-17", addcount: 87, proportion: "5.94%" },
        { date: "2019-05-18", addcount: 79, proportion: "6.94%" },
        { date: "2019-05-19", addcount: 108, proportion: "7.94%" },
        { date: "2019-05-20", addcount: 113, proportion: "8.94%" }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>


