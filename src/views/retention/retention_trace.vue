<template>
    <div>
        <div style="background:#eee;padding:16px 32px">
            <Card :bordered="false">
                <p slot="title">
                    玩家跟踪
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
                    <div>
                        显示方式
                        <RadioGroup v-model="button1" type="button">
                            <Radio label="新增用户"></Radio>
                            <Radio label="活跃用户"></Radio>

                        </RadioGroup>
                        配色
                        活跃度成分分析
                    </div>
                    <Table :columns="columns11" :data="data10" border height="500"></Table>
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
    export default {
        mounted () {
            const data = [];
            for (let i = 0; i < 20; i++) {
                data.push({
                    key: i,
                    name: 'John Brown',
                    age: i + 1,
                    street: 'Lake Park',
                    building: 'C',
                    door: 2035,
                    caddress: 'Lake Street 42',
                    cname: 'SoftLake Co',
                    gender: 'M',
                });
            }
            this.data10 = data;
        },
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
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns9: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns11: [
                    {
                        title: '跟踪',
                        align: 'center',
                        children: [
                            {
                                title: '时间',
                                key: 'caddress',
                                align: 'center',
                                width: 200
                            },
                            {
                                title: '公司名字',
                                key: 'cname',
                                align: 'center',
                                width: 200
                            }
                        ]
                    },
                    {
                        title: '跟踪行为',
                        align: 'center',
                        children: [
                            {
                                title: '1天',
                                key: 'age',
                                align: 'center',
                                width: 200,
                                // sortable: true
                            },
                            {
                                title: '7天',
                                align: 'center',

                            },
                            {
                                title: '14天',
                                align: 'center',

                            },
                            {
                                title: '30天',
                                align: 'center',

                            },
                            {
                                title: '60天',
                                align: 'center',

                            }
                        ]
                    },

                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                data8: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        cellClassName: {
                            age: 'demo-table-info-cell-age',
                            address: 'demo-table-info-cell-address'
                        }
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        cellClassName: {
                            name: 'demo-table-info-cell-name'
                        }
                    }
                ],
                data10: []

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
