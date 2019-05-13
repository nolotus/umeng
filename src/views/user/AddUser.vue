<style scoped>

</style>
<template>
  <div>
     <User-header :currenPage="currenPageTitle" ref="UserHeader"/>
  </div>
</template>

<script>
import UserHeader from "../../components/UserHeader.vue";
export default {
  components:{
    UserHeader
  },
  name: 'AddUser',
  props: {},
  data(){
    return{
      currenPageTitle:"用户分析",
    }
  },
  watch:{
    "$route":"routeChange"
  },
  created(){
        this.currenPageTitle = this.setCurrenPageTitle(this.$route.params.type);
  },
  mounted(){

  },
  methods:{
    setCurrenPageTitle(val){
      switch(val){
        case "add":
          return "新增用户分析";
         case "active":
          return "活跃用户分析";
         case "startcount":
          return "启动次数";
         case "add":
          return "版本分布";
      }
      return "用户分析";
    },
    routeChange(cur,next){
      this.currenPageTitle = this.setCurrenPageTitle(cur.params.type);
    },

  }
}
</script>


