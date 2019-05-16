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
                        <RadioGroup v-model="ChartChoose1" type="button">
                            <Radio label="新增用户"></Radio>
                            <Radio label="活跃用户"></Radio>
                            <Radio label="启动次数"></Radio>
                            <Radio label="累计用户"></Radio>

                        </RadioGroup>

                    </div>
                    <Highcharts :options="chartOption1" />

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
                        <RadioGroup v-model="ChartChoose2" type="button">
                            <Radio label="次日留存率"></Radio>
                            <Radio label="7日留存率"></Radio>
                            <Radio label="30日留存率"></Radio>
                            <Radio label="付费用户"></Radio>
                            <Radio label="付费金额"></Radio>
                            <Radio label="新增付费用户"></Radio>
                            <Radio label="付费率"></Radio>
                        </RadioGroup>

                    </div>
                    <Highcharts :options="chartOption1" />

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
                    <RadioGroup v-model="barChoose1" type="button">
                        <Radio label="新增用户"></Radio>
                        <Radio label="活跃用户"></Radio>
                        <Radio label="累计用户"></Radio>
                    </RadioGroup>
                    <Highcharts :options="barOption1" />


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
                    <RadioGroup v-model="barChoose2" type="button">
                        <Radio label="新增用户"></Radio>
                        <Radio label="活跃用户"></Radio>
                        <Radio label="累计用户"></Radio>
                    </RadioGroup>
                    <Highcharts :options="barOption2" />


                </Card>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../../axios/api'

    export default {
        data () {

            //数据流程走向，获取原始数据，然后根据选项卡，进行过滤，然后灌注在图表上
            return {
                versionData:[],
                barChoose1: '新增用户',
                barData:[],
                barChoose2: '新增用户',
                barData2:[],



                ChartChoose1: '新增用户',
                chartO1:[],
                Chart1Data:[],
                category1:[1,2,333,444],



                ChartChoose2: '新增用户',
                chartO2:[],
                Chart2Data:[],




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
                }


            }
        },

        mounted () {
            api.mockdata('/data/index3')
                .then(res => {
                    console.log('原始数据',res);

                   this.versionData = res.array[0].array
                    this.barData = this.versionData.map(
                        (item) => {1
                            return {
                                name:item.version,
                                y:item.new,
                            }

                        })
                    this.barData2 = this.versionData.map(
                        (item) => {1
                            return {
                                name:item.channels,
                                y:item.new,
                            }

                        })
                    //原始版本数据

                })
            api.mockdata('/data/allTrend')
                .then(res => {
                    console.log('整体趋势数据',res);
                  this.chartO1 =res.array
                    let data = []
                    this.chartO1.map(
       (item) => {
           data.push(item.new)


       })
                    this.Chart1Data = [{
                        name :'新增用户',
                        data:data
                    }]
                    console.log('数据构造',this.Chart1Data)

                    //原始版本数据

                })
        },

        methods: {

        },
        watch: {
            // 如果 `question` 发生改变，这个函数就会运行
            barChoose1: function (newValue,oldValue) {
                // console.log(oldValue,newValue)

                switch(newValue)
                {

                    case '新增用户':
                        this.barData = this.versionData.map(
                            (item) => {1
                                return {
                                    name:item.version,
                                    y:item.active,
                                }

                            })
                        break;
                    case '活跃用户':
                        this.barData = this.versionData.map((item) => {
                            return {
                                name:item.version,
                                y:item.new,
                            }

                        })

                        break;
                    case '累计用户':

                        this.barData = this.versionData.map((item) => {
                            return {
                                name:item.version,
                                y:item.count,
                            }

                        })

                        break;
                    default:

                }
            },
            barChoose2: function (newValue,oldValue) {
                // console.log(oldValue,newValue)

                switch(newValue)
                {

                    case '新增用户':
                        this.barData2 = this.versionData.map(
                            (item) => {1
                                return {
                                    name:item.channels,
                                    y:item.new,
                                }

                            })
                        break;
                    case '活跃用户':
                        this.barData2 = this.versionData.map((item) => {
                            return {
                                name:item.channels,
                                y:item.active,
                            }

                        })

                        break;
                    case '累计用户':

                        this.barData2 = this.versionData.map((item) => {
                            return {
                                name:item.channels,
                                y:item.count,
                            }

                        })

                        break;
                    default:

                }
            },
            ChartChoose1:function (newValue,oldValue) {


                let obj = {
                    '新增用户' : () => {
                        let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.new)


                            })
                        this.Chart1Data = [{
                            name :'新增用户',
                            data:data
                        }]
                    },
                    '活跃用户' : () => {     let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.active)


                            })
                        this.Chart1Data = [{
                            name :'活跃用户',
                            data:data
                        }]},
                    '累计用户' : () => {  let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.active)


                            })
                        this.Chart1Data = [{
                            name :'累计用户',
                            data:data
                        }]},
                    '活跃用户构成' : () => {  let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.count)


                            })
                        this.Chart1Data = [{
                            name :'活跃用户构成',
                            data:data
                        }]},
                    '平均单次使用时长' : () => { let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.averageOnce)


                            })
                        this.Chart1Data = [{
                            name :'平均单次使用时长',
                            data:data
                        }] },
                    '平均日使用时长' : () => {  let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.averageDay)


                            })
                        this.Chart1Data = [{
                            name :'平均日使用时长',
                            data:data
                        }] },
                    '启动次数' : () => {  let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.averageDayStart)


                            })
                        this.Chart1Data = [{
                            name :'平均日启动次数',
                            data:data
                        }] },
                    '平均日启动次数' : () => {  let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.averageDayStart)


                            })
                        this.Chart1Data = [{
                            name :'平均日启动次数',
                            data:data
                        }] },

                }

                obj[newValue]()


            },
            ChartChoose2:function (newValue,oldValue) {


                let obj = {
                    '新增用户' : () => {
                        let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.new)


                            })
                        this.Chart1Data = [{
                            name :'新增用户',
                            data:data
                        }]
                    },
                    '活跃用户' : () => {     let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.active)


                            })
                        this.Chart1Data = [{
                            name :'活跃用户',
                            data:data
                        }]},
                    '累计用户' : () => {  let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.active)


                            })
                        this.Chart1Data = [{
                            name :'累计用户',
                            data:data
                        }]},
                    '活跃用户构成' : () => {  let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.count)


                            })
                        this.Chart1Data = [{
                            name :'活跃用户构成',
                            data:data
                        }]},
                    '平均单次使用时长' : () => { let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.averageOnce)


                            })
                        this.Chart1Data = [{
                            name :'平均单次使用时长',
                            data:data
                        }] },
                    '平均日使用时长' : () => {  let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.averageDay)


                            })
                        this.Chart1Data = [{
                            name :'平均日使用时长',
                            data:data
                        }] },
                    '启动次数' : () => {  let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.averageDayStart)


                            })
                        this.Chart1Data = [{
                            name :'平均日启动次数',
                            data:data
                        }] },
                    '平均日启动次数' : () => {  let data = []
                        this.chartO1.map(
                            (item) => {
                                data.push(item.averageDayStart)


                            })
                        this.Chart1Data = [{
                            name :'平均日启动次数',
                            data:data
                        }] },

                }

                obj[newValue]()


            }

        },
        computed: {
            barOption1: function () {
                return {
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
                        data: this.barData
                    }]
                }
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
                        data: this.barData2
                    }]
                }
            },
            chartOption1:function () {
                return {


                    title: {
                        text: ''
                    },

                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: this.category1
                    },

                    yAxis: {
                        title: {
                            text: ''
                        }
                    },
                    legend: {
                        layout: 'horizontal',
                    },



                    series:this.Chart1Data,

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
