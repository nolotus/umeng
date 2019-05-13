<template>
    <div>
        <div style="background:#eee;padding:16px 32px">
            <Card :bordered="false">
                <p slot="title">
                    基本指标
                    <Icon type="ios-film-outline"></Icon>

                </p>
                <a href="#" slot="extra" @click.prevent="changeLimit">
                    <Icon type="ios-loop-strong"></Icon>
                    更多
                </a>
                <Tabs value="name1">
                    <TabPane label="新增用户" name="name1">
                        <Highcharts :options="options" />
                    </TabPane>
                    <TabPane label="启动次数" name="name2">标签二的内容</TabPane>
                    <TabPane label="分时活跃用户" name="name3">标签三的内容</TabPane>
                    <TabPane label="付费用户" name="name4">标签三的内容</TabPane>
                    <TabPane label="付费金额" name="name5">标签三的内容</TabPane>
                    <TabPane label="新增付费用户" name="name6">标签三的内容</TabPane>


                </Tabs>
            </Card>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'RealTimeStatistics',
        props: {
            msg: String
        },
        data(){
      return{
          options:{


              title: {
                  text: 'Solar Employment Growth by Sector, 2010-2016'
              },

              subtitle: {
                  text: 'Source: thesolarfoundation.com'
              },

              yAxis: {
                  title: {
                      text: 'Number of Employees'
                  }
              },
              legend: {
                  layout: 'vertical',
                  align: 'right',
                  verticalAlign: 'middle'
              },

              plotOptions: {
                  series: {
                      label: {
                          connectorAllowed: false
                      },
                      pointStart: 2010
                  }
              },

              series: [{
                  name: 'Installation',
                  data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
              }, {
                  name: 'Manufacturing',
                  data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
              }, {
                  name: 'Sales & Distribution',
                  data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
              }, {
                  name: 'Project Development',
                  data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
              }, {
                  name: 'Other',
                  data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
              }],

              responsive: {
                  rules: [{
                      condition: {
                          maxWidth: 500
                      },
                      chartOptions: {
                          legend: {
                              layout: 'horizontal',
                              align: 'center',
                              verticalAlign: 'bottom'
                          }
                      }
                  }]
              }
          }
      }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
