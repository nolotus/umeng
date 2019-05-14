<template>
    <div>
        <div style="background:#eee;padding:16px 32px;display:flex;justify-content: flex-end">
            <div>版本</div>
            <div>渠道</div>
            <div>时间选择器</div>
        </div>

        <div style="background:#eee;padding:16px 32px">
            <Card :bordered="false">
                <p slot="title">
                    留存用户
                    <Icon type="ios-film-outline"></Icon>

                </p>
                <div slot="extra">
                    <RadioGroup v-model="button1" type="button">
                        <Radio label="日"></Radio>
                        <Radio label="周"></Radio>
                        <Radio label="月"></Radio>

                        时间选择
                    </RadioGroup>

                </div>
                <div>
                    <Table :columns="columns1" :data="data8"></Table>
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                options: {
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
                columns1: [
                    {
                        title: '首次使用时间',
                        key: 'name'
                    },
                    {
                        title: '新增用户',
                        key: 'b'
                    },
                    {
                        title: '留存率',
                        key: 'c'
                    },
                    {
                        title: '',
                        key: 'd'
                    },
                    {
                        title: '',
                        key: 'e'
                    },
                    {
                        title: '',
                        key: 'f'
                    },
                    {
                        title: '',
                        key: 'g'
                    },
                    {
                        title: '',
                        key: 'h'
                    },
                    {
                        title: '',
                        key: 'i'
                    },
                    {
                        title: '',
                        key: 'j'
                    },
                    {
                        title: '',
                        key: 'k'
                    },

                ],
                data8: [
                    {
                        a:"",
                        b:"",
                        c:"1天后",
                        d:"2天后",
                        e:"3天后",
                        f:"4天后",
                        g:"5天后",
                        h:"6天后",
                        i:"7天后",
                        j:"14天后",
                        k:"30天后"


                    },

                    {
                        name: '2019-05-08',
                        b:10,
                        c:'30%',
                        d:'30%',
                        e:'20%',
                        f:'10%',
                        g:'0%'
                    },

                    {
                        name: '2019-05-09',
                        b:7,
                        c:'14.3%',
                        d:'0%',
                        e:'0%',
                        f:'14.3%',
                    },
                    {
                        name: '2019-05-10',
                        b:16,
                        c:'43.8%',
                        d:'37.5%',
                        e:'6.3%',
                    },
                    {
                        name: '2019-05-11',
                        b:21,
                        c:'9.5%',
                        d:'9.5%',

                    },
                    {
                        name: '2019-05-12',
                        b:32,
                        c:'15.6%',

                    },

                ]

            }
        },
        methods: {
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            }
        }
    }
</script>





<style>
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
