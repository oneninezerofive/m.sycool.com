import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios
// 移动端
import './rem'
import './sk.css'

//第三方组件
//搜索
import {
  Search
} from 'vant';

Vue.use(Search);

//按钮
import {
  Button
} from 'vant';

Vue.use(Button);

// 布局
import {
  Row,
  Col
} from 'vant';

Vue.use(Row).use(Col);

// 下拉菜单
import {
  DropdownMenu,
  DropdownItem
} from 'vant';

Vue.use(DropdownMenu).use(DropdownItem);

// 购物车选规格
import {
  Sku
} from 'vant';

Vue.use(Sku);
// 轮播图
import {
  Swipe,
  SwipeItem
} from 'vant';

Vue.use(Swipe).use(SwipeItem);
// 购物车底部
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
// 导航
import {
  NavBar
} from 'vant';

Vue.use(NavBar);
// lcon图标
import {
  Icon
} from 'vant';

Vue.use(Icon);
// 弹出层
import {
  Popup
} from 'vant';

Vue.use(Popup);
// 标签
import {
  Tab,
  Tabs
} from 'vant';

Vue.use(Tab).use(Tabs);
// 步进器
import {
  Stepper
} from 'vant';

Vue.use(Stepper);


Vue.config.productionTip = false

new Vue({

  router,
  store,

  render: h => h(App)
}).$mount('#app')