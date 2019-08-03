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
    Col
} from 'vant';




export default () => {
    Vue.use(Search)
    Vue.use(Cell).use(CellGroup)
    Vue.use(Swipe).use(SwipeItem)
    Vue.use(Lazyload)
    Vue.use(Row).use(Col)
}