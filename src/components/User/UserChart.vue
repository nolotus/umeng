<style scoped>
</style>
<template>
  <highcharts :options="options"></highcharts>
</template>

<script>
import HighCharts from "highcharts";
var options = {
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
    // {
    //   name: "工人",
    //   data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    // },
    // {
    //   name: "销售",
    //   data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    // },
    // {
    //   name: "项目开发",
    //   data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    // },
    // {
    //   name: "其他",
    //   data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    // }
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
};
export default {
  name: "UserChart",
  props: {
    // id: String,
    // option:Object
  },
  data() {
    return {
      options: options
    };
  },
  created() {},
  mounted() {
    // HighCharts.chart(this.id, this.option)
  },
  methods: {}
};
</script>


