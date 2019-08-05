<template>
  <div class="home">
    <!-- 搜索框 -->
    <van-search placeholder="七夕首饰提前准备 预约浓情蜜意" v-model="value" @click="search" :fixed="true" />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
        <p></p>
      </van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <div class="nav">
      <ul>
        <li v-for="(item,index) in navlist" :key="index">
          <h3 v-text="item.title"></h3>
          <p v-text="item.subTitle"></p>
        </li>
      </ul>
    </div>
    <!-- 图片插图 -->
    <div class="img_box">
      <img :src="item.img" alt v-for="(item,index) in gifimg" :key="index" />
    </div>
    <!-- 水平滚动的列表 -->
    <div class="bag_box">
      <ul class="lis clearfix">
        <li v-for="(item,index) in scroll" :key="index">
          <h3 v-text="`${item.title}${item.subTitle}`"></h3>
          <img :src="item.img" alt />
        </li>
      </ul>
    </div>
    <div class="list_box">
      <!-- 抢购内容:浪潮 -->
      <div class="sku" v-for="(item,index) in good" :key="index">
        <div class="sku_h3" v-for="(item2,index) in item.list" :key="index">
          <h3>{{item2.title}}</h3>
          <h4>{{item2.subTitle}}</h4>
        </div>
        <div class="sku_img">
          <img :src="item.list[0].img" alt />
        </div>
      </div>
      <!-- 人气列表 -->
      <div class="popularity_box">
        <div class="popularity" v-for="(item,index) in popularity" :key="index">
          <div class="popularity_h3">
            <h3>{{item.title}}</h3>
            <h4>{{item.subTitle}}</h4>
          </div>
          <ul class="popularity_ul">
            <li v-for="(item2,index) in item.list" :key="index">
              <img :src="item2.img" alt />
              <p>{{item2.title}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 分期盒子 -->
    <div class="staging_box" v-for="(item,index) in installmentall" :key="index">
      <div class="stag">
        <div class="stag_img">
          <img :src="item.img" alt />
        </div>
        <div class="stag_font">
          <h3 v-text="item.title">免息1313</h3>
          <p v-text="item.subTitle">库支票免息分期商城购物最高12期免息；库支票优惠券可叠加寺库商城券，特例品也可用，更多福利总有一款打动你。</p>
          <a href="###" v-text="item.thirdTitle">店家查看</a>
        </div>
      </div>
    </div>
    <!-- 猜我喜欢 -->
    <div class="mylike">
      <h2>猜你喜欢</h2>
      <ul>
        <li v-for="(item,index) in mylike" :key="index">
          <div class="mylike_img">
            <img :src="item.img" alt />
          </div>
          <div class="mylike_font">
            <h3 v-text="item.title"></h3>
            <p class="title" v-text="item.content"></p>
            <p class="price">
              <span class="d_price" v-text="`￥${item.price}`"></span>
              <span class="d_icon" v-text="item.remember"></span>
            </p>
            <p class="del_price" v-text="`￥${item.oldprice}`"></p>
            <p class="name">自营</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部按钮 -->
    <div class="foot_btn">
      <ul>
        <li
          v-for="(item,index) in foot"
          :key="index"
          @click="active(index)"
          :class="{active:index == num}"
        >
          <i class="iconfont" :class="item.icon"></i>
          <span v-text="item.font"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      //搜索框的值
      value: '',
      images: [],
      playlist: [],
      navlist: [],
      gifimg: [],
      scroll: [],
      wave: [],
      cosmetics: [],
      good: [],
      popularity: [],
      installmentall: [],
      imgurlall: [],

      foot: [{
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
      mylike: []

    }
  },
  methods: {
    search() {
      this.$router.push({
        name: 'search'
      })
    },
    active(index) {
      this.num = index
      this.$router.push({
        name: `home${index}`
      })
    }
  },
  computed: {

  },

  async created() {
    let playlist = await this.$axios('http://10.3.132.227:12345/home/floors');
    // console.log(playlist);
    //轮播图数据
    this.playlist = playlist.data[0].floors[0].list;
    var images = [];
    this.playlist.map(item => {
      images.push(item.img)
    })
    this.images = images;

    //nav数据
    this.navlist = playlist.data[0].floors[1].list;

    //gif动图数据
    this.gifimg = playlist.data[0].floors[2].list;

    //水平滚动列表数据
    this.scroll = playlist.data[0].floors[3].list;

    //列表-3的数据
    this.good = playlist.data[0].floors.slice(4, 12);
    //14-32

    //人气排行列表数据
    this.popularity = playlist.data[0].floors[12].list;

    //分期盒子列表数据
    this.installment = playlist.data[0].floors[29].list[2];
    this.installment1 = playlist.data[0].floors[33].list[1];
    this.installment2 = playlist.data[0].floors[34].list[1];
    this.installmentall.push(this.installment, this.installment1, this.installment2)

    //猜你喜欢数据
    let mylike = await this.$axios('https://www.easy-mock.com/mock/5d40092bfd74df5e8c45e490/list/imgurl');
    this.mylike = mylike.data
  }
};
</script>


<style scoped src="../css/home.css" />




