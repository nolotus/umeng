<style scoped>
</style>
<template>
  <div>
    <Dropdown placement="top" @on-click="handleDropdown" style="margin-right:16px;">
      <Button :type="dropdownValue?'default':'primary'">
        <Icon type="md-add"/>添加对比度
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem name="版本对比">版本对比</DropdownItem>
        <DropdownItem name="渠道对比">渠道对比</DropdownItem>
        <DropdownItem name="时段对比">时段对比</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Button type="primary" v-show="dropdownValue">
      <Icon type="md-add"/>
      {{dropdownValue}}
    </Button>
  </div>
</template>

<script>
export default {
  name: "Comparison",
  props: {
    currenPageType: String
  },
  data() {
    return {
        dropdownValue:"",
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleDropdown(name){
      this.dropdownValue = name;
    },
  }
};
</script>


