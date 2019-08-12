import Vue from 'vue'
import Router from 'vue-router'

import Navi from './views/Navi.vue'
import Login from './views/Login.vue'
import User from './views/pages/User.vue'
import Goods from './views/pages/Goods.vue'
import Order from './views/pages/Order.vue'
import Admin from './views/pages/Admin.vue'

Vue.use(Router)

const routes = [{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '/navi',
		name: 'navi',
		component: Navi,
		children: [{
			path: 'user',
			name: 'user',
			component: User
		}, {
			path: 'goods',
			name: 'goods',
			component: Goods
		}, {
			path: 'order',
			name: 'order',
			component: Order
		}, {
			path: 'admin',
			name: 'admin',
			component: Admin
		}]
	},
];

let router = new Router({
	routes: routes
});

router.beforeEach((to, from, next) => {
	// let status = sessionStorage.getItem("isLogin");
	// console.log(status);
	// if (to.name === 'navi' && status != true) {
	// 	router.push({
	// 		name: 'login'
	// 	});
	// } else {
	// 	next();
	// }
	next();
});

export default router;
