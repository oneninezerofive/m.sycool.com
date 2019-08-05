import Vue from 'vue'

//搜索框
import {
  //搜索框
  Search,
  //单元格
  Cell,
  CellGroup,
  //轮播图
  Swipe,
  SwipeItem,
  Lazyload,

  Row,
  Col,
  //品牌页头部导航
  NavBar,

  IndexBar,
  IndexAnchor,
  // 按钮
  Button,
  // 下拉
  DropdownMenu,
  DropdownItem,
  // 购物车底部
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  // 导航
  NavBar,
  // lcon图标
  Icon,
  // 弹出层
  Popup,
// 标签
  Tab,
  Tabs,
  Stepper
} from 'vant';



export default () => {
  Vue.use(Search)
  Vue.use(Cell).use(CellGroup)
  Vue.use(Swipe).use(SwipeItem)
  Vue.use(Lazyload)
  Vue.use(Row).use(Col)
  Vue.use(NavBar)
  Vue.use(IndexBar).use(IndexAnchor)
  Vue.use(Button)
  Vue.use(DropdownMenu).use(DropdownItem)
  Vue
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton);
    Vue.use(NavBar);
    Vue.use(Icon);
    Vue.use(Popup);
    Vue.use(Tab).use(Tabs);
    Vue.use(Stepper);
}