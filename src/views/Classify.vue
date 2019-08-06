<template>
  <!-- 分类 -->
  <div style="background:#fff;overflow:hidden">
    <!-- 头部导航 -->
    <header id="head">
      <div class="back" @click="goback">←</div>
      <ul class="card">
        <li
          v-for="(item,index) in name"
          :key="index"
          v-text="item"
          :class="{active:index == num}"
          v-on:click="show(index)"
        ></li>
      </ul>
      <div class="home" @click="gohome">
        <i class="iconfont icon-shouye"></i>
      </div>
    </header>
    <!-- 选项卡分类 -->
    <!-- 分类 -->
    <div class="card_list" v-show="isok">
      <dl v-for="(item,index) in list" :key="index">
        <dt v-text="`${item.name}${item.enName}`"></dt>
        <dd>
          <ul>
            <li
              v-for="(i,index) in item.child"
              :key="index"
              v-text="i.name"
              @click="gorem(i.name)"
              :data-name="i.name"
            ></li>
          </ul>
        </dd>
      </dl>
    </div>
    <!-- 品牌 -->
    <div class="remember_box" v-show="!isok" v-for="(item,index) in remember" :key="index">
      <div class="rem_num" v-text="item.cap"></div>
      <ul class="name_a">
        <li
          v-for="(i,index) in item.list"
          :key="index"
          :data-name="i.ename"
          @click="gorem(i.ename)"
        >
          <span v-text="i.cname"></span>
          <span v-text="i.ename"></span>
        </li>
      </ul>
      <!-- 右侧楼层 -->
      <ul class="jamp">
        <li v-for="(item,index) in remember" :key="index" v-text="item.cap"></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: ['分类', '品牌'],
      list: [],
      num: 0,
      isok: true,
      remember: []
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    gohome() {
      this.$router.push({
        name: 'home0'
      })
    },
    show(index) {
      this.num = index
      if (index == 1) {
        this.isok = false;
      } else {
        this.isok = true;
      }
    },
    gorem(name) {
      this.$router.push({
        name: 'listpage',
        params: { name: name }
      })
    }
  },
  async created() {
    //分类接口
    let list = await this.$axios('http://10.3.132.227:12345/categorys/list');
    this.list = list.data[0].categorys;
    // console.log(list.data[0].categorys)

    //品牌接口
    let remrmber = await this.$axios('http://10.3.132.227:12345/brand/list');
    this.remember = remrmber.data[0].result.brands;
    console.log(remrmber.data[0].result.brands);
  }
}
</script>

<style scoped src="../css/classify.css" />





