<style scoped>
</style>
<template>
  <highcharts :id="id" :options="options"></highcharts>
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
    id: String,
    options:Object
  },
  data() {
    return {
      // options: options
    };
  },
  created() {},
  mounted() {
    // HighCharts.chart(this.id, this.option)
  },
  methods: {}
};
</script>


