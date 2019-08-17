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
        <li v-for="(item,index) in listwo" :key="index" v-text="item" @click="goshop(1,'戒指/指环')"></li>
      </ul>
      <ul class="lissix">
        <li v-for="(item,index) in lissix" :key="index" v-text="item" @click="goshop(2,'A&Y')"></li>
      </ul>
    </div>
    <!-- 猜你喜欢 -->
    <div class="mylike">
      <h2>猜你喜欢</h2>
      <ul>
        <li
          v-for="(item,index) in mylike"
          :key="index"
          :data-id="item._id"
          @click="golist(item._id)"
        >
          <div class="mylike_img">
            <img :src="item.imgSrc[0]" alt />
          </div>
          <div class="mylike_font">
            <p class="title" v-text="item.gName"></p>
            <p class="price">
              <span class="d_price" v-text="`￥${item.currentPrice}`"></span>
              <span class="d_icon">会员价</span>
            </p>
            <p class="del_price" v-text="`￥${item.currentPrice}`"></p>
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
    },
    golist(id) {
      this.$router.push({
        name: 'detapages',
        params: { id: id }
      })
    },
    goshop(cla, name) {
      this.$router.push({
        name: 'listpage',
        params: {
          cla: cla,
          name: name
        }
      })
    }
  },
  async created() {
    //猜你喜欢数据
    let mylike = await this.$axios('http://10.3.132.244:12345/goods/type?type=欧米茄&skip=2');
    this.mylike = mylike.data
  }
}
</script>

<style scoped src="../css/searchval.css">
