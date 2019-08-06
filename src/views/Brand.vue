<template>
  <!-- 品牌优选 -->
  <div style="background:#fff">
    <!-- 顶部按钮行 -->
    <header id="head">
      <div class="back" @click="back">
        <i>←</i>
      </div>
      <h3>品牌优选</h3>
      <div class="nav" @click="show">
        <em class="iconfont icon-fenlei"></em>
        <ul class="nav_list" v-show="bool">
          <li @click="gogo(index)" v-for="(item,index) in nav" :key="index">
            <span class="iconfont" :class="item.icon"></span>
            <span v-text="item.font"></span>
          </li>
        </ul>
      </div>
    </header>
    <!-- 标题 -->
    <h3 class="title">品牌优选</h3>
    <!-- 商品信息盒子一排2 -->
    <div class="shop_list">
      <ul>
        <li
          v-for="(item,index) in shop"
          :key="index"
          :data-name="item.des"
          @click="golist(item.des)"
        >
          <div class="shop_img">
            <img :src="item.img" alt />
          </div>
          <div class="shop_font">
            <p v-text="item.des"></p>
            <div>查看更多</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 商品信息盒子一排3 -->
    <div class="shop_list3">
      <ul>
        <li
          v-for="(item,index) in shopthree"
          :key="index"
          :data-name="item.des"
          @click="golist(item.des)"
        >
          <div class="shop_img">
            <img :src="item.img" alt />
          </div>
          <div class="shop_font">
            <p v-text="item.des"></p>
          </div>
        </li>
      </ul>
    </div>
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
      num: 0,
      shop: [],
      shopthree: []
    }
  },
  methods: {
    back() {
      this.$router.push({
        name: 'home0'
      })
    },
    show() {
      this.bool = !this.bool
    },
    gogo(index) {
      this.num = index
      this.$router.push({
        name: `home${index}`
      })
    },
    golist(name) {
      this.$router.push({
        name: 'listpage',
        params: { name: name }
      })
    }
  },
  async created() {
    let shop = await this.$axios('http://10.3.132.227:12345/brands/list');
    //一排2图数据
    this.shop = shop.data.slice(0, 56);
    //一排三图数据
    this.shopthree = shop.data.slice(56, 110);
  }
}
</script>

<style scoped src="../css/brand.css">
