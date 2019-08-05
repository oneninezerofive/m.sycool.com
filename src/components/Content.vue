<template>
  <div>
    <!-- 内容 -->
    <div>
      <ul data-v-61656187="" class="listGoods">
        <li data-v-61656187="" class="listGoods-item" >
          <a data-v-61656187="" :href="url">
            <div data-v-61656187="" class="listGoods-imgBox">
              <div data-v-61656187="" class="listGoods-imgWrp"><img src="//pic10.secooimg.com/product/374/374/57/10/9d75188f95994132b3df617d6bd3f381.jpg_!!0x0.webp" style="display: block;" width="100%" height="100%"></div>
            </div>
            <div data-v-61656187="" class="listGoods-info">
              <h3 data-v-61656187="" class="listGoods-brand">CALVIN KLEIN</h3>
              <p data-v-61656187="" class="listGoods-name">
                CalvinKlein男包皮质礼盒装短款钱包79220
              </p>
              <p data-v-61656187="" class="listGoods-price">
                <span data-v-61656187="" class="listGoods-initPrice">￥258</span>
                <i data-v-61656187="" class="listGoods-decimalPrice"></i>
                <span data-v-61656187="" class="listGoods-priceLabel">
                  <em data-v-61656187="">会员价</em>
                </span>
              </p>
              <p data-v-61656187="" class="listGoods-pricing">
                ￥420
              </p>
              <p data-v-61656187="" class="listGoods-labels">
                <span data-v-61656187="" style="visibility: visible;">自营</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 购物车选规格 -->
    
  </div>

</template>
<script>
export default {
  data() {
    return {
      listHas: [],
      url:"/about",
    };
  },
  methods: {},
  async created() {
    // let listHas = await this.$axios.post(
    // "http://10.3.132.227:12345/brand/list"
    // );
    // console.log(listHas);
  }
};
</script>
<style>
.book {
  border: 1px solid #000;
}
</style>
