<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu{
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
                    <MenuItem  v-for="(ob,i) in item.list" :name="index + '-' + i" :key="i">{{ob.title}}</MenuItem>
                </Submenu>
                <MenuItem :name="index+ ''" :key="index" v-else>
                    <Icon :type="item.icon" />
                    {{item.title}}
                </MenuItem>
            </template>      
        </Menu>
    </div>
</template>

<script>
export default {
  name: 'menu',
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
                            path:"",
                            list:[]
                        },
                        {
                            title:"整体趋势",
                            icon:"ios-paper",
                            path:"",
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
                            path:"",
                            list:[]
                        },
                        {
                            title:"活跃用户",
                            icon:"ios-paper",
                            path:"",
                            list:[]
                        }
                    ]
                }
           ]
        }
    }
}
</script>


