<template>
  <!-- 购物车结算 -->
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="购物袋"
      left-text
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="true"
    />

    <!-- 商品数据(无数据状态) -->
    <div class="list" v-show="!bool">
      <div class="list_k">
        <img src="//mstatic.secooimg.com/m_secoo/v1/shoppingCart/static/img/empty.28506d5.jpg" alt />
      </div>
      <p>千万好物等待您的挑选</p>
    </div>

    <!-- 商品数据(有数据状态) -->
    <div class="shop_lis" v-show="bool">
      <div class="main">
        <div class="input_box">
          <input type="checkbox" />
        </div>
        <div class="img_box">
          <img src="//pic.secoo.com/product/240/240/54/57/69c100484dab4cd8b1665b1a2c54ab00.png" alt />
        </div>
        <div class="btn_box">
          <p class="title">22222</p>
          <p class="font">222</p>
          <p class="color">222</p>
          <div class="btn">
            <span class="price">22222</span>
            <van-stepper style="margin-right:20px" v-model="value" />
          </div>
        </div>
      </div>
    </div>

    <!-- 底部结算 -->
    <van-submit-bar :price="3050" button-text="去结算" @submit="onSubmit" v-show="bool">
      <van-checkbox style="margin-left:10px" v-model="checked">全选</van-checkbox>
    </van-submit-bar>

    <!-- 猜你喜欢 -->
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '1',
      mylike: [],
      bool: false,
      checked: true
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
    },
    onSubmit() { },
  },
  async created() {
    //猜你喜欢数据
    let mylike = await this.$axios('https://www.easy-mock.com/mock/5d40092bfd74df5e8c45e490/list/imgurl');
    this.mylike = mylike.data
  }
}
</script>
<style scoped src="../css/shoppingbag.css" />






