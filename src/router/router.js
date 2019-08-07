import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

const search = () => import('../views/Searchval.vue')
const brand = () => import('../views/Brand.vue')
const classify = () => import('../views/Classify.vue')
const shoppingbag = () => import('../views/ShoppingBag.vue')
const detapages = () => import('../views/Detapages.vue')
const mine = () => import('../views/Mine.vue')
const login = () => import('../views/Login.vue')
const listpage = () => import('../views/Listpage.vue')

Vue.use(Router)

const routes = [{
		path: '/',
		name: 'home0',
		component: Home
	},
	{
		path: '/search',
		name: 'search',
		component: search
	},
	{
		path: '/brand',
		name: 'home1',
		component: brand
	},
	{
		path: '/classify',
		name: 'home2',
		component: classify
	},
	{
		path: '/shoppingbag',
		name: 'home3',
		component: shoppingbag
	},
	{
		path: '/mine',
		name: 'home4',
		component: mine
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{ //列表页路由
		path: '/listpage/:cla/:name',
		name: 'listpage',
		component: listpage
	},
	{ //详情页
		path: '/detapages/:id',
		name: 'detapages',
		component: detapages
	},
	{ //重定向
		path: '/',
		alias: '/index.html',
		redirect: () => {
			return '/home0'
		}
	}
];

let router = new Router({
	routes: routes
});

router.beforeEach((to, from, next) => {
	let token = localStorage.getItem("loginToken");
	let isLogin = sessionStorage.getItem("isLogin");
	if(token != undefined) {
		// 有令牌
		if(isLogin == undefined) {
			// 没有登录成功的状态时
			next();
		}
		// 自动登录成功，设置路由
		if(to.path === '/login') {
			router.push({
				name: 'home4'
			});
		} else {
			next();
		}
	} else {
		// 没有令牌
		if(to.path === '/mine' || to.path === '/shoppingbag') {
			// 不得进入购物车页面和用户页面
			router.push({
				name: 'login'
			});
		} else {
			next();
		}
	}

export default router;