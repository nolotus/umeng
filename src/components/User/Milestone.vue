<style scoped>
  .milestone_btn{
    line-height: 0;
    cursor: pointer;
    width: 96px;
    height: 16px;
    color: #2196F3;
    border: 1px solid #e5e5e5;
    text-align: center;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
  }
  .milestone_box{
     margin: auto 24px;
     padding: 24px 32px 16px;
    background: #F9F9F9;
    border-top: 1px solid #EEE;
    position: relative;
  }
</style>
<template>
    <div class="milestone_box">
        <div style="border-top:1px solid #EEE;">
           <Button type="text"  style="margin-top:16px;color: rgb(33, 150, 243);font-size: 14px;"><Icon type="md-add"/>添加里程碑</Button>
        </div>
        <div  @click="$emit('addupIsAddMilestone')" class="milestone_btn">
          <Icon type="ios-arrow-up"/>
        </div>
    </div>
</template>

<script>
export default {
  name: "Milestone",
  props: {
    isAddMilestone:Boolean
  },
  data() {
    return {

    };
  },
  created() {},
  mounted() {},
  methods: {
  
  }
};
</script>


