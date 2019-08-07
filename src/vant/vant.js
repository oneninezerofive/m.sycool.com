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
	// 下拉
	DropdownMenu,
	DropdownItem,
	// 详情页底部
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton,
	IndexBar,
	IndexAnchor,
	// lcon图标
	Icon,
	// 弹出层
	Popup,
	// 标签
	Tab,
	Tabs,
	Stepper,
	// 购物车
	Checkbox,
	CheckboxGroup,
	Card,
	SubmitBar,
	Toast,
	List
} from 'vant';



export default () => {
	Vue.use(Search)
		.use(Cell).use(CellGroup)
		.use(Swipe).use(SwipeItem)
		.use(Lazyload)
		.use(Row).use(Col)
		.use(NavBar)
		.use(IndexBar).use(IndexAnchor)
		.use(Button)
		.use(DropdownMenu).use(DropdownItem)
		.use(Field)
		.use(GoodsAction)
		.use(GoodsActionIcon)
		.use(GoodsActionButton)
		.use(NavBar)
		.use(Icon)
		.use(Popup)
		.use(Tab).use(Tabs)
		.use(Stepper)
		.use(Checkbox).use(CheckboxGroup)
		.use(Card).use(SubmitBar)
		.use(Toast)
		.use(List);
}