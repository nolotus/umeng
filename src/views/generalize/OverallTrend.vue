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
                    <Highcharts :options="bar" />


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
                    <RadioGroup v-model="button1" type="button">
                        <Radio label="新增用户"></Radio>
                        <Radio label="活跃用户"></Radio>
                        <Radio label="累计用户"></Radio>
                    </RadioGroup>
                    <Highcharts :options="bar" />


                </Card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                button1: '北京',
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
                        type: 'pie'
                    },
                    title: {
                        text: 'Browser market shares. January, 2018'
                    },
                    subtitle: {
                        text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
                    },
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}: {point.y:.1f}%'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                    },

                    series: [
                        {
                            name: "Browsers",
                            colorByPoint: true,
                            data: [
                                {
                                    name: "Chrome",
                                    y: 62.74,
                                    drilldown: "Chrome"
                                },
                                {
                                    name: "Firefox",
                                    y: 10.57,
                                    drilldown: "Firefox"
                                },
                                {
                                    name: "Internet Explorer",
                                    y: 7.23,
                                    drilldown: "Internet Explorer"
                                },
                                {
                                    name: "Safari",
                                    y: 5.58,
                                    drilldown: "Safari"
                                },
                                {
                                    name: "Edge",
                                    y: 4.02,
                                    drilldown: "Edge"
                                },
                                {
                                    name: "Opera",
                                    y: 1.92,
                                    drilldown: "Opera"
                                },
                                {
                                    name: "Other",
                                    y: 7.62,
                                    drilldown: null
                                }
                            ]
                        }
                    ],
                    drilldown: {
                        series: [
                            {
                                name: "Chrome",
                                id: "Chrome",
                                data: [
                                    [
                                        "v65.0",
                                        0.1
                                    ],
                                    [
                                        "v64.0",
                                        1.3
                                    ],
                                    [
                                        "v63.0",
                                        53.02
                                    ],
                                    [
                                        "v62.0",
                                        1.4
                                    ],
                                    [
                                        "v61.0",
                                        0.88
                                    ],
                                    [
                                        "v60.0",
                                        0.56
                                    ],
                                    [
                                        "v59.0",
                                        0.45
                                    ],
                                    [
                                        "v58.0",
                                        0.49
                                    ],
                                    [
                                        "v57.0",
                                        0.32
                                    ],
                                    [
                                        "v56.0",
                                        0.29
                                    ],
                                    [
                                        "v55.0",
                                        0.79
                                    ],
                                    [
                                        "v54.0",
                                        0.18
                                    ],
                                    [
                                        "v51.0",
                                        0.13
                                    ],
                                    [
                                        "v49.0",
                                        2.16
                                    ],
                                    [
                                        "v48.0",
                                        0.13
                                    ],
                                    [
                                        "v47.0",
                                        0.11
                                    ],
                                    [
                                        "v43.0",
                                        0.17
                                    ],
                                    [
                                        "v29.0",
                                        0.26
                                    ]
                                ]
                            },
                            {
                                name: "Firefox",
                                id: "Firefox",
                                data: [
                                    [
                                        "v58.0",
                                        1.02
                                    ],
                                    [
                                        "v57.0",
                                        7.36
                                    ],
                                    [
                                        "v56.0",
                                        0.35
                                    ],
                                    [
                                        "v55.0",
                                        0.11
                                    ],
                                    [
                                        "v54.0",
                                        0.1
                                    ],
                                    [
                                        "v52.0",
                                        0.95
                                    ],
                                    [
                                        "v51.0",
                                        0.15
                                    ],
                                    [
                                        "v50.0",
                                        0.1
                                    ],
                                    [
                                        "v48.0",
                                        0.31
                                    ],
                                    [
                                        "v47.0",
                                        0.12
                                    ]
                                ]
                            },
                            {
                                name: "Internet Explorer",
                                id: "Internet Explorer",
                                data: [
                                    [
                                        "v11.0",
                                        6.2
                                    ],
                                    [
                                        "v10.0",
                                        0.29
                                    ],
                                    [
                                        "v9.0",
                                        0.27
                                    ],
                                    [
                                        "v8.0",
                                        0.47
                                    ]
                                ]
                            },
                            {
                                name: "Safari",
                                id: "Safari",
                                data: [
                                    [
                                        "v11.0",
                                        3.39
                                    ],
                                    [
                                        "v10.1",
                                        0.96
                                    ],
                                    [
                                        "v10.0",
                                        0.36
                                    ],
                                    [
                                        "v9.1",
                                        0.54
                                    ],
                                    [
                                        "v9.0",
                                        0.13
                                    ],
                                    [
                                        "v5.1",
                                        0.2
                                    ]
                                ]
                            },
                            {
                                name: "Edge",
                                id: "Edge",
                                data: [
                                    [
                                        "v16",
                                        2.6
                                    ],
                                    [
                                        "v15",
                                        0.92
                                    ],
                                    [
                                        "v14",
                                        0.4
                                    ],
                                    [
                                        "v13",
                                        0.1
                                    ]
                                ]
                            },
                            {
                                name: "Opera",
                                id: "Opera",
                                data: [
                                    [
                                        "v50.0",
                                        0.96
                                    ],
                                    [
                                        "v49.0",
                                        0.82
                                    ],
                                    [
                                        "v12.1",
                                        0.14
                                    ]
                                ]
                            }
                        ]
                    }
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
