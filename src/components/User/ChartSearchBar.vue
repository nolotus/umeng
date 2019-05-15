<style scoped>
 .serchs_title{
        color: rgb(51, 51, 51);
        font-size: 16px;
        margin-bottom: 10px;
  }
 .serchs_item{
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
</style>
<template>
  <div>
    <!-- 渠道分析 -->
    <template v-if="currenPageType == 'channellist' || currenPageType == 'timeframe'">
        <p class="serchs_title" v-if="currenPageType === 'channellist'">Top10渠道</p>
        <div class="serchs_item">
            <div>
              <RadioGroup v-model="button" type="button" size="large">
                <Radio
                  v-for="(item,index) in typeList[currenPageType]"
                  :label="item.label"
                  :key="index"
                  :disabled="item.disabled"
                ></Radio>
              </RadioGroup>
            </div>
             <div>
               <Select v-model="version" style="width:150px;">
                  <Option value="0">全部版本</Option>  
                  <Option v-for="item in versionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
             </div>
        </div>
    </template>
    <!-- 用户 -->
    <template v-else>
          <p class="serchs_title" v-if="currenPageType === 'add' || currenPageType === 'version'">新增趋势</p>
          <div class="serchs_item">
            <div>
              <RadioGroup v-model="button" type="button" size="large">
                <Radio
                  v-for="(item,index) in typeList[currenPageType]"
                  :label="item.label"
                  :key="index"
                  :disabled="item.disabled"
                ></Radio>
              </RadioGroup>
            </div>
            <div>
              <RadioGroup v-model="button2" type="button" size="large" v-if="currenPageType != 'version'">
                <Radio label="小时" disabled v-if="currenPageType != 'active'"></Radio>
                <Radio label="天"></Radio>
                <Radio label="周"></Radio>
                <Radio label="月" disabled></Radio>
              </RadioGroup>
            </div>
          </div>
      </template>
  </div>
</template>

<script>
export default {
  name: "ChartSearchBar",
  props: {
    currenPageType: String
  },
  data() {
    return {
      button: "",
      button2: "",
      version:"0",
      versionList:[
        {value:"1",label:"2.0.1"},
        {value:"2",label:"1.15.5"},
        {value:"3",label:"2.0.0"},
        {value:"4",label:"1.0"},
        {value:"5",label:"1.14.0"},
        {value:"6",label:"1.10.1"},
        {value:"7",label:"5.0.0"}
      ],
      typeList: {
        add: [{ label: "新增用户" }],
        channellist:[
          { label: "新增用户" },
          { label: "活跃用户" },
          { label: "启动次数" },
          { label: "平均单次使用时长" },
          { label: "平均日使用时长"},
          { label: "次日留存率" }
        ],
        active: [
          { label: "新增用户" },
          { label: "活跃趋势" },
          { label: "活跃构成" },
          { label: "活跃粘度" },
          { label: "分时活跃用户", disabled: true },
          { label: "周活跃率" },
          { label: "月活跃率", disabled: true }
        ],
        startcount: [],
        version: [
          { label: "新增用户" },
          { label: "活跃用户" },
          { label: "启动次数" }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>


