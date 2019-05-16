<template>
    <div style="min-width: 800px;overflow: auto;height: 100%">
        <div style="background:#eee;padding:16px 32px">
            <Card :bordered="false">
                <p slot="title">
                    应用概要
                    <Icon type="ios-film-outline"></Icon>

                </p>
                <div>
                    <div class="tabs">
                        <div class="tab-item">
                            <div class="up">累计用户</div>
                            <div class="down">2009570</div>
                        </div>
                        <div class="tab-item">
                            <div class="up">过去7天活跃用户</div>
                            <div class="down">454</div>
                            <div class="extra">-14.2%</div>
                        </div>
                        <div class="tab-item">
                            <div class="up">过去30天活跃用户</div>
                            <div class="down">1360</div>
                            <div class="extra">-10.1%</div>
                        </div>
                        <div class="tab-item">
                            <div class="up">过去7天平均日使用时长</div>
                            <div class="down" >00:42:23</div>
                        </div>
                        <div class="tab-item">
                            <div class="up">总错误率</div>
                            <div class="down">0.0000%</div>
                        </div>
                    </div>
                    <div class="tabs">
                        <div class="tab-item">
                            <div class="up">累计付费用户</div>
                            <div class="down">148929</div>
                        </div>
                        <div class="tab-item">
                            <div class="up">累计付费金额</div>
                            <div class="down">1996227</div>
                        </div>
                        <div class="tab-item">
                            <div class="up">付费率</div>
                            <div class="down">7.41%</div>
                        </div>
                        <div class="tab-item">
                            <div class="up">ARPU</div>
                            <div class="down">0.99</div>
                        </div>
                        <div class="tab-item">
                            <div class="up">ARPPU</div>
                            <div class="down">13.4</div>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
        <div style="background:#eee;padding:16px 32px">
            <Card :bordered="false">
                <p slot="title">
                    整体趋势
                    <Icon type="ios-film-outline"></Icon>

                </p>
                <div slot="extra">
                    <Row>
                        <Col span="12">
                            <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
                        </Col>
                    </Row>
                </div>
                <div value="name1">
                    <div>
                        <RadioGroup v-model="button1" type="button">
                            <Radio label="新增用户"></Radio>
                            <Radio label="活跃用户"></Radio>
                            <Radio label="累计用户"></Radio>
                            <Radio label="活跃用户构成"></Radio>
                            <Radio label="平均单次使用时长"></Radio>
                            <Radio label="平均日使用时长"></Radio>
                            <Radio label="平均下载浏览"></Radio>
                        </RadioGroup>

                    </div>
                    <Highcharts :options="options" />

                </div>

            </Card>
        </div>
        <div style="background:#eee;padding:16px 32px">
            <Card :bordered="false">
                <p slot="title">
                    细分趋势
                    <Icon type="ios-film-outline"></Icon>

                </p>
                <div slot="extra">
                    <Row>
                        <Col span="12">
                            <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
                        </Col>
                    </Row>
                </div>
                <div>
                    <div>
                        <RadioGroup v-model="button1" type="button">
                            <Radio label="新增用户"></Radio>
                            <Radio label="活跃用户"></Radio>
                            <Radio label="累计用户"></Radio>
                            <Radio label="活跃用户构成"></Radio>
                            <Radio label="平均单次使用时长"></Radio>
                            <Radio label="平均日使用时长"></Radio>
                            <Radio label="平均下载浏览"></Radio>
                        </RadioGroup>

                    </div>
                    <Highcharts :options="options" />

                </div>
            </Card>
        </div>

        <div style="display:flex;">
            <div style="background:#eee;padding:16px 32px;width: 50%">
                <Card :bordered="false">
                    <p slot="title">
                        top版本
                        <Icon type="ios-film-outline"></Icon>

                    </p>
                    <a href="#" slot="extra" @click.prevent="changeLimit">
                        <Icon type="ios-loop-strong"></Icon>
                        编辑指标
                    </a>
                    <RadioGroup v-model="button1" type="button">
                        <Radio label="新增用户"></Radio>
                        <Radio label="活跃用户"></Radio>
                        <Radio label="累计用户"></Radio>
                    </RadioGroup>
                    <Highcharts :options="barOption2" />


                </Card>
            </div>
            <div style="background:#eee;padding:16px 32px;width: 50%">
                <Card :bordered="false">
                    <p slot="title">
                        top渠道
                        <Icon type="ios-film-outline"></Icon>

                    </p>
                    <a href="#" slot="extra" @click.prevent="changeLimit">
                        <Icon type="ios-loop-strong"></Icon>
                        编辑指标
                    </a>
                    <RadioGroup v-model="button2" type="button">
                        <Radio label="新增用户"></Radio>
                        <Radio label="活跃用户"></Radio>
                        <Radio label="累计用户"></Radio>
                    </RadioGroup>
                    <Highcharts :options="barOption" />


                </Card>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../../axios/api'

    export default {
        mounted () {
            api.mockdata('/data/index3')
                .then(res => {
                    console.log('原始数据',res);

                    let originData = res.array[0].array
console.log(originData)
                    this.versionData1 =   originData.map(
                        (item) => {
                        return {
                            name:item.version,
                            y:item.active,
                        }

                    })
                    this.barData =this.versionData1
                    console.log('版本数据1',this.versionData1);

                    this.versionData2 =   originData.map((item) => {
                        return {
                            name:item.version,
                            y:item.new,
                        }

                    })
                    console.log('版本数据2',this.versionData2);

                    this.versionData3 =   originData.map((item) => {
                        return {
                            name:item.version,
                            y:item.count,
                        }

                    })
                    console.log('版本数据3',this.versionData3);
                    //原始版本数据

                })
        },
        data () {

            //数据流程走向，获取原始数据，然后根据选项卡，进行过滤，然后灌注在图表上
            return {
                versionData:[],
                versionData1:[],
                versionData2:[],
                versionData3:[],
                button1: '新增用户',
                barTitle:'1',
                button2: '新增用户',

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
                        layout: 'horizontal',
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
                },
                options2: {
                    shortcuts: [
                        {
                            text: '1 week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
                bar:{
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: ''
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: [{
                            name: 'Chrome',
                            y: 61.41,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Internet Explorer',
                            y: 11.84
                        }, {
                            name: 'Firefox',
                            y: 10.85
                        }, {
                            name: 'Edge',
                            y: 4.67
                        }, {
                            name: 'Safari',
                            y: 4.18
                        }, {
                            name: 'Sogou Explorer',
                            y: 1.64
                        }, {
                            name: 'Opera',
                            y: 1.6
                        }, {
                            name: 'QQ',
                            y: 1.2
                        }, {
                            name: 'Other',
                            y: 2.61
                        }]
                    }]
                },
                barData:[]
            }
        },

        methods: {

        },
        watch: {
            // 如果 `question` 发生改变，这个函数就会运行
            button1: function (newValue,oldValue) {
                // console.log(oldValue,newValue)

                switch(newValue)
                {

                    case '新增用户':
                        this.barData = this.versionData1
                        break;
                    case '活跃用户':
                        this.barData = this.versionData2

                        break;
                    case '累计用户':

                        this.barData = this.versionData3

                        break;
                    default:

                }
            },
        },
        computed: {

            barOption: function () {
                return this.bar
            },
            barOption2: function () {
                return {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: this.barTitle
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: this.barData
                    }]
                }
            }
        },
        name: 'OverallTrend',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabs {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
    .tab-item{
        min-width: 150px;
        width: 20%;
    }
    .tab-item .up{
        margin-top: 15px;
        font-size: 14px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .extra{
        text-align: right;
        color: #00B24F;
        font-size: 14px;
    }
    .tab-item .down {
        text-align: center;
        font-size: 32px;
    }

</style>
