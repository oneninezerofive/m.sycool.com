import Vue from 'vue'
import App from './App.vue'
// 移动端
import './lib/rem'
import './css/index.css'
import router from './router/router'
import store from './store/store'
import Vant from './vant/vant'
Vant()

//引入iconfont
import './lib/iconfont/iconfont.css'

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import qs from "qs";
Vue.prototype.$qs = qs;

Vue.config.productionTip = false

new Vue({

	router,
	store,

	render: h => h(App)
}).$mount('#app')
