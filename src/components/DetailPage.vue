<template>

  <div>
    <!-- 详情页 -->
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
        <i v-for="(i,idx) in nwe" :key="idx" @click="qiehuan(idx)">{{i.bar}}</i>
      </div>
    </div>
    <!-- 内容 -->
    <div class="box">
      <div class="price">￥10,107</div>
      <div class="box1">开通会员立省¥203</div>
      <h3>
        <span>Louis Vuitton/路易威登</span>Alma BB 老花色/棋盘格 经典女士 斜挎小贝壳包 帆布/配皮 M53152/N41221 【预订商品 2-3周发货】</h3>
      <!-- 遮罩假一赔十 -->

      <!-- 商品信息 -->
      <div class="border-bottom">
        <h2 class="product-info-title">商品信息</h2>
        <table class="product-info p">
          <tbody>
            <tr>
              <td>商品编号</td>
              <td class="select-text">41271689</td>
            </tr>
            <tr>
              <td>开合方式</td>
              <td class="select-text">拉链开合</td>
            </tr>
            <tr>
              <td>底部结构</td>
              <td class="select-text">包底有保护性的铆钉</td>
            </tr>
            <tr>
              <td>尺寸</td>
              <td class="select-text">23.5 x 17.5 x 11.5 cm (长 x 高 x 宽)</td>
            </tr>
            <tr>
              <td>颜色</td>
              <td class="select-text">棕色</td>
            </tr>
            <tr>
              <td>产地</td>
              <td class="select-text">法国</td>
            </tr>
            <tr>
              <td>适用人群</td>
              <td class="select-text">女士</td>
            </tr>
            <tr>
              <td>材质</td>
              <td class="select-text">帆布/配皮</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 商品详情 -->
      <div class="p" style="height: 325px; margin-top: 5px;">
        <img src="http://pic12.secooimg.com/imgextra/1/0/54/57/1Zc95N6938bcbbfacb41e59f6f4c59c92e414a.jpg">
      </div>
      <div class="p" style="height: 325px; margin-top: 5px;">
        <img src="http://pic12.secooimg.com/imgextra/1/0/10/99/1Zc95Necc3554312ef43c0b1626c33119dc242.jpg">
      </div>
    </div>
    <!-- 详情页底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon info="" icon="cart-o" text="购物袋" />

      <van-goods-action-button type="warning" text="加入购物车" @click="showPopup" />

      <van-popup v-model="show" position="bottom" :style="{ height: '85%' }">
        <!-- 底部 -->
        <van-tabs v-model="active">
          <div class="jiage">￥10,107</div>
           <p style="font-size: 16px ;font-weight: bold; top:120px; ">颜色</p>
          <van-tab title="颜色">
            
            <div class="tu1"><img src="http://pic12.secooimg.com/imgextra/1/0/54/57/1Zc95N6938bcbbfacb41e59f6f4c59c92e414a.jpg" alt=""></div>
            </van-tab>
          
          <van-tab title="颜色">
            <div class="tu2"><img src="http://pic12.secooimg.com/imgextra/1/0/10/99/1Zc95Necc3554312ef43c0b1626c33119dc242.jpg" alt=""></div>
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
      nwe: [
        {
          bar: "1"
        },
        {
          bar: "2"
        },
        {
          bar: "3"
        }
      ],
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
    qiehuan() {
      // this.idx = index;
      // console.log(this.index);
    },

    // 弹出层
    showPopup() {
      this.show = true;
    },
    //加入购物车
    cartPage(){

    }
  },
 
};
</script>
<style src="../css/detapage.css">
</style>





