<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu{
        width: 100%;
        height: 100%;
    }
    .router_link{
        width: 100%;
        height: 100%;
    }
</style>
<template>
    <div class="menu">
        <Menu theme="light" style="width:100%;">
            <template v-for="(item,index) in menuData" >
                <Submenu  :name="index + ''" :key="index" v-if="item.list.length">
                    <template slot="title">
                        <Icon :type="item.icon" />
                        {{item.title}}    
                    </template>
                    <MenuItem  v-for="(ob,i) in item.list" :key="i" :name="index + '-' + i" >
                        <router-link  :to="ob.path" tag="div" class="router_link">
                        {{ob.title}}
                        </router-link>  
                    </MenuItem> 
                </Submenu>
                <MenuItem :name="index+ ''" :key="index"  v-else >
                    <Icon :type="item.icon" />
                        <router-link :to="item.path"  tag="div" class="router_link">
                            {{item.title}}
                        </router-link>
                </MenuItem>
            </template>      
        </Menu>
    </div>
</template>

<script>
export default {
  name: 'MyMenu',
  props: {
    msg: String
  },
  data () {
    return {
           menuData:[
                {
                    title:"概括",
                    icon:"ios-paper",
                    path:"",
                    list:[
                        {
                            title:"实时统计",
                            icon:"ios-paper",
                            path:{
                                path:"/realtimestatistics",
                                name:"realtimestatistics",
                            },
                            list:[]
                        },
                        {
                            title:"整体趋势",
                            icon:"ios-paper",
                            path:{
                                path:"/overalltrend",
                                name:"overalltrend",
                            },
                            list:[]
                        }
                    ]
                },
                {
                    title:"用户分析",
                    icon:"ios-paper",
                    path:"",
                    list:[
                        {
                            title:"新增用户",
                            icon:"ios-paper",
                            path:{
                                // path:"/adduser",
                                name:"user",
                                params:{
                                    type:"add"
                                }
                            },
                            list:[]
                        },
                        {
                            title:"活跃用户",
                            icon:"ios-paper",
                            path:{
                                // path:"/activeuser",
                                name:"user",
                                params:{
                                    type:"active"
                                }
                            },
                            list:[]
                        },
                        {
                            title:"启动次数",
                            icon:"ios-paper",
                            path:{
                                // path:"/startcount",
                                name:"user",
                                params:{
                                    type:"startcount"
                                },
                            },
                           
                            list:[]
                        },
                        {
                            title:"版本分布",
                            icon:"ios-paper",
                            path:{
                                // path:"/version",
                                name:"user",
                                params:{
                                    type:"version"
                                },
                            },
                            list:[]
                        },
                        {
                            title:"行业数据",
                            icon:"ios-paper",
                            path:"/industrydata",
                            list:[]
                        }
                    ]
                },
               {
                   title:"渠道分析",
                   icon:"ios-paper",
                   path:"",
                   list:[
                       {
                           title:"时段详情",
                           icon:"ios-paper",
                           path:"",
                           list:[]
                       },
                       {
                           title:"渠道列表",
                           icon:"ios-paper",
                           path:"",
                           list:[]
                       }
                   ]
               },
                {
                    title:"留存分析",
                    icon:"ios-paper",
                    path:"",
                    list:[
                        {
                            title:"留存用户",
                            icon:"ios-paper",
                            path:"/retention",
                            list:[]
                        },
                        {
                            title:"用户跟踪",
                            icon:"ios-paper",
                            path:"/retentionTrace",
                            list:[]
                        },
                        {
                            title:"用户新鲜度",
                            icon:"ios-paper",
                            path:"/freshness",

                            list:[]
                        },
                        {
                            title:"用户活跃度",
                            icon:"ios-paper",
                            path:"/engagement",
                            list:[]
                        }
                    ]
                }
           ]
        }
    }
}
</script>


