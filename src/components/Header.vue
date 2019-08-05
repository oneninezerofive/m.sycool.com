<template>
  <div>
    <!-- 搜索 -->
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
    </form>
    <!-- 按钮 -->

    <!-- <van-button type="primary" size="small" >小型按钮</van-button>
      <van-button type="primary" size="small">小型按钮</van-button>
      <van-button type="primary" size="small">小型按钮</van-button>
      <van-button type="primary" size="small">小型按钮</van-button>
      <van-button type="primary" size="small">小型按钮</van-button>
      <van-button type="primary" size="small">小型按钮</van-button> -->

    <!-- <div class="butTon">
         <li style=" border: 1px solid #000;">
        <van-dropdown-menu >
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        </li> 
      <li>
        
      </li>
      <li>
        
      </li>
      <li>
       
      </li>
      <li>
        
      </li>
      

    </div> -->
    <div data-v-6eb0bda7="" class="sort-wapBox">
      <div data-v-6eb0bda7="" class="sort-wrap">
        <div data-v-6eb0bda7="" class="sort-box sort--more">
          <div data-v-6eb0bda7="" class="sort">
            <div data-v-6eb0bda7="" class="sort-item selected ">
              <span data-v-6eb0bda7="">
                <van-dropdown-menu>
                  <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
              </span>
              <!-- <i data-v-6eb0bda7="" class="sort-arrow"></i> -->
            </div>
            <div data-v-6eb0bda7="" class="sort-item " @click="active">
              <span data-v-6eb0bda7="">销量</span>
              <!---->
            </div>
            <div data-v-6eb0bda7="" class="sort-item">
              <span data-v-6eb0bda7="">价格</span>
              <!---->
            </div>
            <div data-v-6eb0bda7="" class="sort-item">
              <span data-v-6eb0bda7="">折扣</span>
              <!---->
            </div>
            <div data-v-6eb0bda7="" class="sort-item">
              <span data-v-6eb0bda7="">优惠</span>
              <i data-v-6eb0bda7="" class="sort-arrow"></i>
            </div>
            <div data-v-6eb0bda7="" class="sort-item">
              <span data-v-6eb0bda7="">材质</span>
              <i data-v-6eb0bda7="" class="sort-arrow"></i>
            </div>
            <div data-v-6eb0bda7="" class="sort-item">
              <span data-v-6eb0bda7="">适用人群</span>
              <i data-v-6eb0bda7="" class="sort-arrow"></i>
            </div>
            <div data-v-6eb0bda7="" class="sort-item">
              <span data-v-6eb0bda7="">开合方式</span>
              <i data-v-6eb0bda7="" class="sort-arrow"></i>
            </div>
          </div>
        </div>
        <div data-v-6eb0bda7="" class="sortMenu-container">
          <div data-v-6eb0bda7="" class="sortMenu" style="display: none;">
            <div data-v-6eb0bda7="" class="sortMenu-content">
              <ul data-v-6eb0bda7="">
                <li data-v-6eb0bda7="" class="sortMenu-item selected">
                  <span data-v-6eb0bda7="">综合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">新品</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
              </ul>
            </div>
          </div>
          <div data-v-6eb0bda7="" class="sortMenu" style="display: none;">
            <div data-v-6eb0bda7="" class="sortMenu-content sortMenu--2">
              <ul data-v-6eb0bda7="">
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">会员价</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">直降 </span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">满减</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
              </ul>
            </div>
            <div data-v-6eb0bda7="" class="menu-btns">
              <a data-v-6eb0bda7="" href="#">清空</a>
              <a data-v-6eb0bda7="" href="#">确定</a>
            </div>
          </div>
          <div data-v-6eb0bda7="" class="sortMenu" style="display: none;">
            <div data-v-6eb0bda7="" class="sortMenu-content sortMenu--2">
              <ul data-v-6eb0bda7="">
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">帆布/配皮</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">帆布</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">帆布/牛皮</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">皮质</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">其他</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">织物/配皮</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">小牛皮</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">其它</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">牛皮</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">羊皮/小牛皮</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">人造革</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">牛皮革</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">PVC/配皮</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">丝绒/羊皮</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
              </ul>
            </div>
            <div data-v-6eb0bda7="" class="menu-btns">
              <a data-v-6eb0bda7="" href="#">清空</a>
              <a data-v-6eb0bda7="" href="#">确定</a>
            </div>
          </div>
          <div data-v-6eb0bda7="" class="sortMenu" style="display: none;">
            <div data-v-6eb0bda7="" class="sortMenu-content sortMenu--2">
              <ul data-v-6eb0bda7="">
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">男士</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">中性款式</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">女士</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
              </ul>
            </div>
            <div data-v-6eb0bda7="" class="menu-btns">
              <a data-v-6eb0bda7="" href="#">清空</a>
              <a data-v-6eb0bda7="" href="#">确定</a>
            </div>
          </div>
          <div data-v-6eb0bda7="" class="sortMenu" style="display: none;">
            <div data-v-6eb0bda7="" class="sortMenu-content sortMenu--2">
              <ul data-v-6eb0bda7="">
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">按扣开合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">拉链开合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">磁扣开合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">扭锁开合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">直接开合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">翻盖开合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">锁扣开合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">插扣开合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">抽绳开合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">其他</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
                <li data-v-6eb0bda7="" class="sortMenu-item">
                  <span data-v-6eb0bda7="">折叠开合</span>
                  <i data-v-6eb0bda7="" class="iconfont icon-selected"></i>
                </li>
              </ul>
            </div>
            <div data-v-6eb0bda7="" class="menu-btns">
              <a data-v-6eb0bda7="" href="#">清空</a>
              <a data-v-6eb0bda7="" href="#">确定</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 下拉菜单 -->
    

  </div>
  
</template>
<script>
export default {
  data() {
    return {
      value: "",
      value1: 0,
      value2: "a",
      option1: [{ text: "全部", value: 0 }, { text: "新款商品", value: 1 }],
      selected:true,
    };
  },
  // 事件
  methods: {
    //回车和搜索触发
    onSearch() {},
    //取消触发
    onCancel() {},
    active(){
   
    }
  }
};
</script>
<style>
.butTon {
  width: 375px;
  height: 30px;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 12px;
  -webkit-overflow-scrolling: touch;
  /* border: 1px solid #000; */
}
.butTon li {
  /* border: 1px solid #000; */
  list-style: none;
  text-align: center;

  margin-right: 10px;
}
.van-button {
  padding: 0 10px;
}
.van-dropdown-menu__item {
  width: 60px;
  height: 27px;
  font-size: 12px;
}
.van-dropdown-menu__title::after{
top: 10px;
}
.van-ellipsis{
font-size: .4rem;
    line-height: .88rem;
}
/* .sort-item.selected{
      border-color: #f8a120;
      color: #f8a120;
      
} */
/* .sort-item{
  border-color: #f8a120;
      color: #f8a120;
} */


</style>

