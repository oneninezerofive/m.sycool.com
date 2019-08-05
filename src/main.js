import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Vant from './vant/vant'
Vant()
import axios from 'axios'
Vue.prototype.$axios = axios

//移动端px转rem
import './lib/rem'

//全局css
import './css/index.css'

//引入iconfont
import './lib/iconfont/iconfont.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')