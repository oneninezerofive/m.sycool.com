<template>
  <div style="background:#fff">
    <!-- 详情页 -->
    <!-- 头部选项卡 -->
    <header id="head">
      <div class="back" @click="back">
        <i>←</i>
      </div>
      <ul class="lis">
        <li
          v-for="(item,index) in lis"
          :key="index"
          v-text="item"
          :class="{active:index == num}"
          @click="actives(index)"
        ></li>
      </ul>
      <div class="nav" @click="shows">
        <em class="iconfont icon-fenlei"></em>
        <ul class="nav_list" v-show="bool">
          <li @click="gogo(index)" v-for="(item,index) in nav" :key="index">
            <span class="iconfont" :class="item.icon"></span>
            <span v-text="item.font"></span>
          </li>
        </ul>
      </div>
    </header>

    <!-- 轮播 -->

    <van-swipe indicator-color="white" :autoplay="2000">
      <van-swipe-item v-for="(k,index) in listimg" :key="index">
        <img :src="k" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 选项小图片 -->
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
      <h3>{{`${listID.gName}${listgAttr[3]}`}}</h3>
      <p class="city">{{listgAttr[9]}}</p>
      <p class="kuaidi">此商品为特例品，不支持使用优惠券且不参与会员折扣</p>
      <!-- 分期 && 店铺自取-->
      <ul class="fenqi">
        <li>
          <h4>库支票分期</h4>
          <p>月供￥316.67 × 12期</p>
        </li>
        <li>
          <h4>到店自提</h4>
          <p>查看店铺地址</p>
        </li>
      </ul>
      <!-- 颜色分类 -->
      <div class="color_box">
        <h4>颜色</h4>
        <ul>
          <li>珍珠灰</li>
        </ul>
      </div>
      <!-- 假一赔十 -->
      <ul class="icons">
        <li v-for="(item,index) in icons" :key="index">
          <img :src="item.icon" alt />
          <p v-text="item.title"></p>
        </li>
      </ul>
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
      bool: false,
      nav: [{
        icon: 'icon-shouye',
        font: '首页'
      }, {
        icon: 'icon-pinpai',
        font: '品牌'
      }, {
        icon: 'icon-fenlei',
        font: '分类'
      }, {
        icon: 'icon-gouwudai',
        font: '购物袋'
      }, {
        icon: 'icon-wode-copy',
        font: '我的'
      }],
      lis: ['商品', '评论', '详情', '推荐'],
      num: 0,
      icons: [{
        icon: 'https://mpic.secooimg.com/images/2017/08/14/zhengpindetail@2x.png',
        title: '假一赔十'
      }, {
        icon: 'https://mpic.secooimg.com/images/2017/02/09/no_deliver_fee@2x.png',
        title: '会员免邮'
      }, {
        icon: 'https://mpic.secooimg.com/images/2017/02/09/identity@2x.png',
        title: '专业鉴定'
      }, {
        icon: 'https://mpic.secooimg.com/images/2017/02/09/not_exchange@2x.png',
        title: '不支持七天退换'
      }],



      // 商品导航
      // hideNav: false,
      // Switchbezel: true,
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
    back() {
      this.$router.push({
        name: 'home0'
      })
    },
    shows() {
      this.bool = !this.bool
    },
    gogo(index) {
      this.num = index
      this.$router.push({
        name: `home${index}`
      })
    },
    actives(index) {
      this.num = index
    },
    // 弹出层
    showPopup() {
      this.show = true;
    },
    //加入购物车
    async cartPage() {
      let uid = window.sessionStorage.getItem('uid');
      let username = window.sessionStorage.getItem('username');
      if (username == null) {
        this.$router.push({
          name: 'login'
        })
      } else {
        await this.$axios({
          method: "post",
          url: 'http://10.3.132.227:12345/cart/addorder/',
          data: this.$qs.stringify({
            uid: this.uid,
            username: this.username,
            gid: this.gid,
            number: this.value
          })
        })
      }
    },
    Getback() {
      this.$router.go(-1);
    },
  },
  async created() {
    let gid = this.$route.params.id
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






