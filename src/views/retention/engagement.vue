<template>
 <div>
     <div style="background:#eee;padding:16px 32px">
         <Card :bordered="false">
             <p slot="title">
                 用户活跃度
                 <Icon type="ios-film-outline"></Icon>

             </p>
             <div slot="extra">
                 <RadioGroup v-model="button1" type="button">
                     <Radio label="当日活跃成分"></Radio>
                     <Radio label="15天活跃成分"></Radio>

                 </RadioGroup>

             </div>
             <div>
                 <div>
                     显示方式
                     <RadioGroup v-model="button1" type="button">
                         <Radio label="绝对值"></Radio>
                         <Radio label="百分比"></Radio>

                     </RadioGroup>
配色
                     活跃度成分分析
                 </div>
                 <Highcharts :options="options" />

             </div>
         </Card>
     </div>
 </div>
</template>
<script>
export default {
    data(){
        return {
            options:{
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'Historic and Estimated Worldwide Population Growth by Region'
                },
                subtitle: {
                    text: 'Source: Wikipedia.org'
                },
                xAxis: {
                    categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                    tickmarkPlacement: 'on',
                    title: {
                        enabled: false
                    }
                },
                yAxis: {
                    title: {
                        text: 'Billions'
                    },
                    labels: {
                        formatter: function () {
                            return this.value / 1000;
                        }
                    }
                },
                tooltip: {
                    split: true,
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: '#666666',
                        lineWidth: 1,
                        marker: {
                            lineWidth: 1,
                            lineColor: '#666666'
                        }
                    }
                },
                series: [{
                    name: 'Asia',
                    data: [502, 635, 809, 947, 1402, 3634, 5268]
                }, {
                    name: 'Africa',
                    data: [106, 107, 111, 133, 221, 767, 1766]
                }, {
                    name: 'Europe',
                    data: [163, 203, 276, 408, 547, 729, 628]
                }, {
                    name: 'America',
                    data: [18, 31, 54, 156, 339, 818, 1201]
                }, {
                    name: 'Oceania',
                    data: [2, 2, 2, 6, 13, 30, 46]
                }]
            },

        }
    }
}
</script>