import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import qs from "qs";
Vue.prototype.$qs = qs;

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
	  path: '/detapages',
	  name: 'ddetapages',
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
			// 没有登录成功的状态时，检查令牌
			this.$axios({
				method: 'post',
				url: "http://10.3.132.227:12345/login/check",
				data: this.$qs.stringify({
					token: token
				})
			}).then(function(res) {
				let detail = res.data.detail;
				if (detail.status) {
					sessionStorage.setItem("isLogin", true);
					sessionStorage.setItem("username", detail.username);
				} else {
					localStorage.removeItem("token");
				}
			}).catch(function(err) {
				console.log(err);
			});
		}
		// 已验证令牌，自动登录成功，设置路由
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
});

export default router;
