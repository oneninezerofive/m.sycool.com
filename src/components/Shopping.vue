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
      <van-swipe-item v-for="(k,idx) in detailsImg" :key="idx" v-bind:idx="idx">
        <img :src="k.url" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 选项 -->
    <div class="option">
      <div>
        <i v-for="(i,idx) in nwe" :key="idx" @click="qiehuan(idx)" >{{i.bar}}</i>
      </div>
    </div>
    <!-- 内容 -->

    <!-- 购物车底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon info="5" icon="cart-o" text="购物袋" />
      <!-- <van-goods-action-icon
          icon="shop-o"
          text="店铺"
        /> -->
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
        <p style="font-size: 14px ;font-weight: bold; ">数量

        </p>
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
      nwe:[{
        bar:'1',
      },{
        bar:'2',
      },{
        bar:'3'
      }],
      // 商品导航
      hideNav: false,
      Switchbezel: true,
      show: false,
      active: 2,
      value: 1,
      activeidx: 0
    };
  },
  methods: {
    //导航
    navhideNav() {
      this.hideNav = !this.hideNav;
    },
    // 切换
    qiehuan(){
      // this.idx = index;
      // console.log(this.index);
      
    },

    // 弹出层
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style scoped src="../css/depage.css"></style>




<style>
i {
  font-style: normal;
}
/*导航*/
.navigation {
  width: 100%;
  height: 1.333333rem;
  background: #ddd;
  display: flex;
  justify-content: space-around;
}
.navigation i {
  font-size: 14px;
  line-height: 1.333333rem;
}
.navigation .van-icon {
  font-size: 18px;
}
/*隐藏导航*/
.hideNav {
  position: absolute;
  right: 0;
  z-index: 1;
  width: 100px;
  height: 145px;
  background: #fff;
}
.hideNav .van-icon {
  font-size: 18px;
}

.hideNav ul {
  display: flex;
  flex-direction: column;
}
.hideNav ul li {
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  padding-right: 10px;
}
.hideNav ul li .van-icon {
  margin-right: 10px;
}

/*轮播图*/
.van-swipe-item {
  text-align: center;
}
.van-swipe-item img {
  width: 320px;
}
.van-swipe__indicator {
  background: #666;
}
.element.style {
  background: #111;
}
/*小图片*/
.option {
  width: 100%;
  border-bottom: 1px solid #666;
  display: flex;
  justify-content: space-around;
  height: 1.333333rem;
}
.option div {
  display: flex;
  align-items: center;
}
.option i:nth-child(1) {
  margin-left: 0;
  border: 1px solid #000;
}
.option i {
  display: inline-block;
  width: 0.666667rem;
  height: 0.666667rem;

  margin-left: 20px;
}
/*    购物车底部  */

.van-goods-action-button--first,
.van-button {
  border-radius: 0px;
}
.van-goods-action-button--warning {
  background: #000;
}
.van-goods-action-button--danger {
  background: rgb(248, 161, 32);
}
/*加入购物车遮罩*/
.bottomCart {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.333333rem;
  background: #111;
  color: #fff;
  font-size: 12px;
  line-height: 1.333333rem;
  text-align: center;
}
/*标签*/
.van-tabs__wrap {
  position: absolute;
  top: 150px;
  left: 12px;
}

.van-ellipsis {
  border: 1px solid #666;
  width: 40px;
  height: 20px;
  line-height: 20px;
}
.van-tabs__line {
  z-index: 0;
  background-color: #fff;
  top: 100px;
}
.van-tab--active {
  background: rgb(15, 15, 15);
  width: 42px;
  height: 22px;
  color: #fff;
  padding: 0;
  font-size: 12px;
}
.van-popup .textColor {
  position: absolute;
  top: 130px;
  left: 18px;
}
.van-popup p {
  position: absolute;
  top: 230px;
  left: 18px;
}
.van-tab {
  font-size: 12px;
}
.van-stepper {
  position: absolute;
  top: 220px;
  left: 200px;
  border: 1px solid #999;
  height: 25px;
  width: 90px;
  line-height: 25px;
}
.van-stepper__input {
  margin: 0;
  height: 20px;
}
.van-stepper__plus {
  width: 28px;
  height: 0;
}
.van-stepper__minus {
  height: 0px;
}
</style>

