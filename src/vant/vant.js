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
	// 布局
	Row,
	Col,
	// 导航栏
	NavBar,
	// 输入框
	Field,
	// 按钮
	Button,
	// 宫格
	Grid,
	GridItem
} from 'vant';




export default () => {
	Vue.use(Search)
		.use(Cell).use(CellGroup)
		.use(Swipe).use(SwipeItem)
		.use(Lazyload)
		.use(Row).use(Col)
		.use(NavBar)
		.use(Field)
		.use(Button)
		.use(Grid).use(GridItem)
}
