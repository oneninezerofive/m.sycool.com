<template>
  <div>
    <!-- 购物页 -->
    <!-- 顶部 -->
    <div class="navigation">
      <van-icon name="arrow-left" />
      <i v-for="k in navBar" :key="k.index" v-text="k.title"></i>
      <van-icon name="wap-nav" @click="navhideNav" />
    </div>
    <div class="hideNav" v-if="hideNav">
      <ul>
        <li>
          <van-icon name="wap-home" />
          <i>首页</i>
        </li>
        <li>
          <van-icon name="todo-list-o" />
          <i>分类</i>
        </li>
        <li>
          <van-icon name="cart-o" />
          <i>购物袋</i>
        </li>
        <li>
          <van-icon name="user-o" />
          <i>我的寺库</i>
        </li>
      </ul>
    </div>

    <!-- 轮播 -->
    <van-swipe indicator-color="white">
      <van-swipe-item v-for="(k,index) in detailsImg" :key="index">
        <img :src="k.url" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 选项 -->
    <div class="option">
      <div>
        <i>11</i>
        <i>22</i>
        <i>33</i>
      </div>
    </div>

    <!-- 购物车底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon info="5" icon="cart-o" text="购物袋" />
      <!-- <van-goods-action-icon
          icon="shop-o"
          text="店铺"
      />-->
      <van-goods-action-button type="warning" text="加入购物车" @click="showPopup" />

      <van-popup v-model="show" position="bottom" :style="{ height: '90%' }">
        <!-- 底部 -->
        <van-tabs v-model="active">
          <van-tab title="标签">内容 1</van-tab>
          <van-tab title="标签">内容 2</van-tab>
          <van-tab title="标签">内容 3</van-tab>
          <van-tab title="标签">内容 4</van-tab>
        </van-tabs>
        <div class="textColor" style="font-size: 14px ;font-weight: bold; ">颜色</div>
        <p style="font-size: 14px ;font-weight: bold; ">数量</p>
        <van-stepper v-model="value" />
        <div class="bottomCart">加入购物车</div>
      </van-popup>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 商品规格 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      detailsImg: [
        {
          url:
            "https://pic12.secooimg.com/product/750/750/2019/0615/afb0a3684e4745f6b654e9b4ba396c26.jpg"
        },
        {
          url:
            "https://pic12.secooimg.com/product/750/750/2019/0615/e521e22208b940e99d563e82c6802ddf.jpg"
        },
        {
          url:
            "https://pic12.secooimg.com/product/750/750/2019/0615/12dfb22b6e954d62993ebb4b35f6b1b7.jpg"
        }
      ],
      navBar: [
        { title: "商品" },
        { title: "评论" },
        { title: "详情" },
        { title: "推荐" }
      ],
      // 商品导航
      hideNav: false,
      Switchbezel: true,
      show: false,
      active: 2,
      value: 1
    };
  },
  methods: {
    //导航
    navhideNav() {
      this.hideNav = !this.hideNav;
    },

    // 弹出层
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style scoped src="../css/sk.css" />
