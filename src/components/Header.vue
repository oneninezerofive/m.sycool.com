<template>
  <div>
    <!-- 搜索 -->
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
    </form>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <div class="van-dropdown-menu__item box1">
        销量
      </div>
      <div class="van-dropdown-menu__item box2">价格</div>
      <div class="van-dropdown-menu__item box3">折扣</div>
      
      
      
    </van-dropdown-menu>

  </div>

</template>
<script>
export default {
  data() {
    return {
      value: "",
      value1: 0,
      value2: "a",
      option1: [{ text: "综合", value: 0 }, { text: "新款商品", value: 1 }],
      selected: true
    };
  },
  // 事件
  methods: {
    //回车和搜索触发
    onSearch() {},
    //取消触发
    onCancel() {},
    active() {}
  }
};
</script>
<style >

.van-dropdown-menu__item {
  width: 80px;
  height: 27px;
  font-size: 15px;
  border: 1px solid #999;
  margin-right: 5px;
  margin-left: 5px;
}

</style>



