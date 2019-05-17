
import Mock from 'mockjs' // 引入mockjs

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let data = [] // 用于接受生成数据的数组
let data2 = [1,2,3] // 用于接受生成数据的数组
let data3 = Mock.mock(
    {'array|7':[{
        'array|1-5':[{
            "version|1.1": 1,
            channels:'@word',
            "count|+50": 2009240,
            "new|1-10": 50,
            "upgrade|1-50": 50,
            "active|1-50": 50,
            "start|1-50": 50,
        }
        ],
            'fromNowOn|+1': 1,
            'now|+1':'@now("yyyy-MM-dd")',
            'date|+1'    : function(){
                let now= new Date(this.now);
                now.setTime(now.getTime()-this.fromNowOn*24*60*60*1000);
                let sub=now;
                var year = sub.getFullYear()<10?'0'+sub.getFullYear():sub.getFullYear();
                var month = sub.getMonth() + 1<10?'0'+sub.getMonth():sub.getMonth();
                var day = sub.getDate()<10?'0'+sub.getDate():sub.getDate();
                return year+'-'+month+'-'+day;
            }
        }]}
)
let allTrend = Mock.mock(
    {'array|30':[{
            'date|+1'    : function(){
                let now= new Date(this.now);
                now.setTime(now.getTime()-this.fromNowOn*24*60*60*1000);
                let sub=now;
                var year = sub.getFullYear()<10?'0'+sub.getFullYear():sub.getFullYear();
                var month = sub.getMonth() + 1<10?'0'+sub.getMonth():sub.getMonth();
                var day = sub.getDate()<10?'0'+sub.getDate():sub.getDate();
                return year+'-'+month+'-'+day;
            },
            'fromNowOn|+1': 1,
            'now|+1':'@now("yyyy-MM-dd")',
            "new|0-30": 0,
            "active|0-200": 0,
            "start|1-2500": 0,
            "count|+50": 2009240,

            "newUser|0-15":0,
            "averageOnce":"@time",
            "averageDay":"@time",
            "averageDayStart|1-10.1":0


        }]}
)
let detailTrend = Mock.mock(
    {'array|7':[{
            'array|1-5':[{
                "version|1.1": 1,
                "count|+200": 50,
                "new|1-10": 50,
                "upgrade|1-50": 50,
                "active|1-50": 50,
                "start|1-50": 50,
            }
            ],
            'fromNowOn|+1': 1,
            'now|+1':'@now("yyyy-MM-dd")',
            'date|+1'    : function(){
                let now= new Date(this.now);
                now.setTime(now.getTime()-this.fromNowOn*24*60*60*1000);
                let sub=now;
                var year = sub.getFullYear()<10?'0'+sub.getFullYear():sub.getFullYear();
                var month = sub.getMonth() + 1<10?'0'+sub.getMonth():sub.getMonth();
                var day = sub.getDate()<10?'0'+sub.getDate():sub.getDate();
                return year+'-'+month+'-'+day;
            }
        }]}
)
let size = [
    '300x250', '250x250', '240x400', '336x280',
    '180x150', '720x300', '468x60', '234x60',
    '88x31', '120x90', '120x60', '120x240',
    '125x125', '728x90', '160x600', '120x600',
    '300x600'
] // 定义随机值

for(let i = 0; i < 10; i ++) { // 可自定义生成的个数
    let template = {
        'Boolean': Random.boolean, // 可以生成基本数据类型
        'Natural': Random.natural(1, 10), // 生成1到100之间自然数
        'Integer': Random.integer(1, 100), // 生成1到100之间的整数
        'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
        'Character': Random.character(), // 生成随机字符串,可加参数定义规则
        'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
        'Range': Random.range(0, 10, 2), // 生成一个随机数组
        'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
        'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
        'Color': Random.color(), // 生成一个颜色随机值
        'Paragraph':Random.paragraph(2, 5), //生成2至5个句子的文本
        'Name': Random.name(), // 生成姓名
        'Url': Random.url(), // 生成web地址
        'Address': Random.province() // 生成地址
    }
    data.push(template)
}

Mock.mock('/data/index', 'post', data)
Mock.mock('/data/index2', 'post', data2)
Mock.mock('/data/index3', 'post', data3)
Mock.mock('/data/allTrend', 'post', allTrend)
Mock.mock('/data/detailTrend', 'post', detailTrend)


//模拟用户数据 
Mock.mock('/data/getuserdata', 'get', Mock.mock({
    "data|7": [
        {
            "appStore":"appStore",
            'day|+1':1,
            'date':function(){
                var date = "2019-05-" + (this.day>10?this.day:"0"+this.day);
                    return date;
             },
             'addcount|40-120':1,                     //新增人数
             "addProportion" :"@float(1, 20, 0, 2)%" ,    //新增用户（占比）
            "morrow" : "@float(0, 30, 0, 2)%",       //次日留存率
            'activeNumber|1400-3000':1,              //活跃人数
            "constitute" : "@float(0, 10, 0, 2)%",    //活跃构成(新用户占比)
            "dau7" :"@float(0, 50, 0, 2)%", //DAU/过去7日活跃用户
            "dau30" :"@float(0, 30, 0, 2)%", //DAU/过去30日活跃用户
            "startCount":"@integer(10000, 21000)", //启动次数
            "startProportion":"@float(5, 15, 0, 2)%", //启动占比
            "channel|24":[
                {
                    "time|+1":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00"
                    ,"11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
                    "appStore":"@integer(0, 50)"
                }
            ]
        }
    ]
}))

//模拟版本分布时段数据
Mock.mock('/data/getversiondata','get', Mock.mock({
    "data|7":[
        {
            "version|+1":["2.0.1","1.15.5","2.0.0","1.0","1.14.0","1.10.0","5.0.0"],//版本号
            "accumulated":"@integer(0, 3000)（@float(0, 90, 0, 2)%）",//截至今日版本累计用户(%)
            "addUser":"@integer(0, 1000)", //新增用户
            "activeUser":"@integer(0, 1200)（@float(0, 90, 0, 2)%）",//活跃用户(%)
            "startCount":"@integer(0, 7000)", //启动次数
            "upgradeUser":"@integer(0, 1000)",//升级用户
            "color":"@hex()",
            "list|7":[
                {
                    "addUser":"@integer(0, 150)", //新增用户
                    'activeNumber|1400-3000':1,              //活跃人数
                    "startCount":"@integer(0, 7000)", //启动次数
                    'dayid|+1':1,
                    'date':function(){
                        var date = "2019-05-" + (this.dayid>10?this.dayid:"0"+this.dayid);
                            return date;
                    }
                }
            ]
        }
    ]
}))

