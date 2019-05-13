<template>
    <div class="top-nav">
        <div>
            <div class="logo">
            </div>
            <Select v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>

        <div class="title"> 游戏分析</div>


        <div class="right">
            升级说明
            <div class="item">            <Icon type="ios-list" size="24"/>
            </div>
            <div class="item">            <Icon type="ios-help-circle" size="24"/>
            </div>
            <div class="item">                <Button type="primary">登录</Button>
            </div>
            <div class="item">
                <Button type="primary">注册</Button>

            </div>
        </div>

    </div>

</template>
<script>
    export default {
        data() {
            return {
                cityList: [
                    {
                        value: 'a',
                        label: 'Android Demo App'
                    },
                    {
                        value: 'b',
                        label: 'Game Demo App'
                    },
                    {
                        value: 'c',
                        label: 'UAPP_Demo'
                    },


                ],
                model1: ''
            }
        }
    }
</script>
<style>
    .top-nav {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        color: #fff;
    }

    .logo {
        float: left;
        margin: 0px 0px 20px 16px;
        width: 192px;
        height: 32px;
        line-height: 14px;
        color: white;
        background: url(../assets/logo-ai.png) no-repeat 0px 0px;
        background-size: 165px 32px;
    }

    .title {
        font-size: 16px;
        border-bottom:2px solid #2196F3;
        margin-bottom: 2px;
    }
    .right{
        display: flex;
    }

    .right .item{
        margin-right: 26px;


    }
</style>