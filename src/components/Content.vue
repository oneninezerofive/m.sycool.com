<template>
  <div>
  
    <!-- 内容 -->
    <div>
      <ul data-v-61656187="" class="listGoods">
        <li data-v-61656187="" class="listGoods-item" @click="jumpParticulars" v-for="(k,index) in listHas" :key="index">
          <a data-v-61656187="" href="#">
            <div data-v-61656187="" class="listGoods-imgBox">
              <div data-v-61656187="" class="listGoods-imgWrp"><img :src="k.imgUrl" style="display: block;" width="100%" height="100%"></div>
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

  </div>

</template>
<script>
export default {
  data() {
    return {
      listHas: []
    };
  },
  methods: {
    jumpParticulars() {
      this.$router.push({
        name: "search"
      });
    }
  },
  async created() {
    let listHas = await this.$axios(
      "https://www.easy-mock.com/mock/5d4699307e2c484eee66fda1/suku/list"
    );
    this.listHas = listHas.data.productList;
  }
};
</script>
<style  scoped src="../css/sk.css" />

