<template>

  <div style="background:#fff">
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <div class="van-dropdown-menu__item box1">销量</div>
      <div class="van-dropdown-menu__item box2">新品</div>
      <div class="van-dropdown-menu__item box3">折扣</div>
    </van-dropdown-menu>
    <!-- 内容 -->
    <div>
      <ul data-v-61656187 class="listGoods">
        <li data-v-61656187 class="listGoods-item" @click="jumpParticulars" v-for="(k,index) in listHas" :key="index">
          <a data-v-61656187 href="#">
            <div data-v-61656187 class="listGoods-imgBox" >
              <div data-v-61656187 class="listGoods-imgWrp">
                <img :src="k.gDetailsImgSrc[1]" style="display: block;" width="100%" height="100%" />
              </div>
            </div>
            <div data-v-61656187 class="listGoods-info">
              <h3 data-v-61656187 class="listGoods-brand">CALVIN KLEIN</h3>
              <p data-v-61656187 class="listGoods-name">{{k.gName}}</p>
              <p data-v-61656187 class="listGoods-price">
                <span data-v-61656187 class="listGoods-initPrice" >￥{{k.currentPrice}}</span>
                <i data-v-61656187 class="listGoods-decimalPrice"></i>
                <span data-v-61656187 class="listGoods-priceLabel">
                  <em data-v-61656187>会员价</em>
                </span>
              </p>
              <p data-v-61656187 class="listGoods-pricing">￥420</p>
              <p data-v-61656187 class="listGoods-labels">
                <span data-v-61656187 style="visibility: visible;">自营</span>
              </p>
            </div>
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '综合', value: 0 },
        { text: '新款', value: 1 },
        
      ],
      listHas: []
    };
  },
  methods: {
    jumpParticulars() {
      this.$router.push({
        name: "shoppingcar"
      });
    }
  },
  async created() {
    if (this.$route.params.cla == "1") {
      let listHas = await this.$axios.get(
        "http://10.3.132.227:12345/goods/brand?gName=" +this.$route.params.name + "&skip=1"
      );
      this.listHas = listHas.data;
      // console.log(this.listHas[0].imgSrc[0]);
    }
  }
};
</script>

<style scoped src="../css/sk.css" ></style>


<style >

.van-dropdown-menu__item{
position: absolute;
border: 1px solid #000;
height: 28px;
width: 70px;
top: 0;
margin-left: 5px;
margin-right: 5px;
z-index: 5;

}
.van-dropdown-menu__item span{
  font-size: 12px;
  
}
.box1{
  border: 1px solid #000;
  left: 100px;
}
.box2{
  left: 200px;
}
.box3{
  left: 300px;
}
</style>




