<template>
  <div>
    <!-- 详情页 -->
    <!-- 顶部 -->
    <div class="navigation">
      <van-icon name="arrow-left" @click="Getback" />
      <i v-for="k in navBar" :key="k.index" v-text="k.title"></i>。
      <van-icon name="wap-nav" @click="navhideNav" />
    </div>
    <div class="hideNav" v-if="hideNav">
      <ul>
        <li @click="Shouye">
          <van-icon name="wap-home" />
          <i>首页</i>
        </li>
        <li @click="Fenli">
          <van-icon name="todo-list-o" />
          <i>分类</i>
        </li>
        <li @click="Gouwu">
          <van-icon name="cart-o" />
          <i>购物袋</i>
        </li>
        <li @click="Wode">
          <van-icon name="user-o" />
          <i>我的寺库</i>
        </li>
      </ul>
    </div>

    <!-- 轮播 -->
    <van-swipe indicator-color="white" :autoplay="2000">
      <van-swipe-item v-for="(k,index) in listimg" :key="index">
        <img :src="k" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 选项 -->
    <div class="option">
      <div>
        <i v-for="(ik,index) in listimg" :key="index">
          <img :src="ik" alt />
        </i>
      </div>
    </div>
    
    <!-- 内容 -->
    <div class="box">
      <div class="price">￥{{listID.currentPrice}}</div>
      <div class="box5">开通会员立省¥203</div>
      <h3>{{listID.gName}}</h3>
      <!-- 商品信息 -->
      <div class="border-bottom">
        <h2 class="product-info-title">商品信息</h2>
        <table class="product-info p">
          <tbody>
            <tr>
              <td>商品：{{listID.type}}</td>
            </tr>
            <tr>
              <td>{{listgAttr[4]}}</td>
            </tr>
            <tr>
              <td>{{listgAttr[5]}}</td>
            </tr>
            <tr>
              <td>{{listgAttr[0]}}</td>
            </tr>
            <tr>
              <td>{{listgAttr[6]}}</td>
            </tr>
            <tr>
              <td>{{listgAttr[2]}}</td>
            </tr>
            <tr>
              <td>{{listgAttr[1]}}</td>
            </tr>
            <tr>
              <td>{{listgAttr[3]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 商品详情 -->
      <h2 class="product-info-title">商品详情</h2>
      <div style=" margin-top: 5px;" v-for="(i,index) in listImgs" :key="index">
        <img :src="i" />
      </div>
      <h1 class="imgUrl">-精品推荐-</h1>
    </div>
    <!-- 详情页底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon info icon="cart-o" text="购物袋" />

      <van-goods-action-button type="warning" text="加入购物车" @click="showPopup" />

      <van-popup v-model="show" position="bottom" :style="{ height: '85%' }">
        <!-- 底部 -->
        <van-tabs v-model="active">
          <div class="jiage">￥{{listID.currentPrice}}</div>
          <p style="font-size: 16px ;font-weight: bold; top:120px; ">颜色</p>
          <van-tab title="颜色">
            <div class="tu1">
              <img :src="listimg[0]" alt />
            </div>
          </van-tab>

          <van-tab title="颜色">
            <div class="tu2">
              <img :src="listimg[1]" alt />
            </div>
          </van-tab>
        </van-tabs>

        <p style="font-size: 16px ;font-weight: bold; ">数量</p>

        <van-stepper v-model="value" />
        <div class="bottomCart" @click="cartPage">加入购物车</div>
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
      value: 1,
      activeidx: 0,
      listID: "",
      listimg: "",
      listImgs: "",
      listgAttr: ""
    };
  },

  methods: {
    //导航
    navhideNav() {
      this.hideNav = !this.hideNav;
    },
    // 切换
    qiehuan() { },

    // 弹出层
    showPopup() {
      this.show = true;
    },
    //加入购物车
    cartPage() { },
    Getback() {
      //跳转列表页
      this.$router.go(-1);
    },
    Shouye() {
      //跳转到首页
      this.$router.push({
        name: "home0"
      });
    },
    Fenli() {
      //跳转到分类
      this.$router.push({
        name: "home2"
      });
    },
    Gouwu() {
      this.$router.push({
        name: "home3"
      });
    },
    Wode() {
      this.$router.push({
        name: "login"
      });
    }
  },
  async created() {
    //具体商品
    let listID = await this.$axios.get(
      "http://10.3.132.227:12345/goods/detail?id=" + this.$route.params.id
    );
    this.listID = listID.data[0];
    this.listimg = listID.data[0].imgSrc;
    this.listImgs = listID.data[0].gDetailsImgSrc;
    this.listgAttr = listID.data[0].gAttr;
  }
};
</script>
<style scoped src="../css/detapage.css" />






