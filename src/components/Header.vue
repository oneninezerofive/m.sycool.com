<template>
  <div>
    <!-- 搜索 -->
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      value1: 0,
      value2: "a",
      option1: [{ text: "全部", value: 0 }, { text: "新款商品", value: 1 }],
      selected: true
    };
  },
  // 事件
  methods: {
    //回车和搜索触发
    onSearch() { },
    //取消触发
    onCancel() { },
    active() { }
  }
};
</script>
<style scoped>
.van-button {
  padding: 0 10px;
}
.van-dropdown-menu__item {
  width: 60px;
  height: 27px;
  font-size: 12px;
}
.van-dropdown-menu__title::after {
  top: 10px;
}
.van-ellipsis {
  font-size: 0.4rem;
  line-height: 0.88rem;
}
</style>



