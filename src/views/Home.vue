<template>
  <div class="home">
    <!-- 搜索框 -->
    <van-search placeholder="七夕首饰提前准备 预约浓情蜜意" v-model="value" @click="search" />
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
          <img src alt />
        </div>
        <div class="stag_font">
          <h3 v-text="item.title">免息1313</h3>
          <p v-text="item.subTitle">库支票免息分期商城购物最高12期免息；库支票优惠券可叠加寺库商城券，特例品也可用，更多福利总有一款打动你。</p>
          <a href="###" v-text="item.thirdTitle">店家查看</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import '../css/home.css'

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
    }
  },
  methods: {
    search() {
      this.$router.push({
        name: 'search'
      })
    }
  },
  computed: {

  },

  async created() {
    let playlist = await this.$axios.post('http://10.3.132.227:12345/home/floors');

    console.log(playlist.data[0].floors);
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
    // console.log(installmentall)
  }

}
</script>


