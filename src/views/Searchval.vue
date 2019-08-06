<template>
  <!-- 搜索页面 -->
  <div style="background:#f5f5f5">
    <!-- 头部搜索 -->
    <form action="/">
      <van-search v-model="value" placeholder="Ulike家用冰感无痛脱毛仪999" show-action @cancel="onCancel" />
    </form>
    <!-- 热销推荐 -->
    <div class="hot">
      <h3>热销推荐</h3>
      <ul class="listwo">
        <li v-for="(item,index) in listwo" :key="index" v-text="item"></li>
      </ul>
      <ul class="lissix">
        <li v-for="(item,index) in lissix" :key="index" v-text="item">gucci</li>
      </ul>
    </div>
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
      value: '',
      listwo: ['开学逆袭增肌季', 'EA 19秋冬新品'],
      lissix: ['Champion', '口红礼盒', 'Ray Ban', 'Tiffany', 'B&O', 'Gucci'],
      mylike: []
    }
  },
  methods: {
    onCancel() {
      this.$router.push({
        name: 'home0'
      })
    }
  },
  async created() {
    //猜你喜欢数据
    let mylike = await this.$axios('https://www.easy-mock.com/mock/5d40092bfd74df5e8c45e490/list/imgurl');
    this.mylike = mylike.data
  }
}
</script>

<style scoped src="../css/searchval.css">
