import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

const search = () => import('../views/Search.vue')
const brand = () => import('../views/Brand.vue')
const classify = () => import('../views/Classify.vue')
const shoppingbag = () => import('../views/ShoppingBag.vue')
const mine = () => import('../views/Mine.vue')
const login = () => import('../views/Login.vue')
const listpage=()=>import('../views/Listpage.vue')

Vue.use(Router)

export default new Router({
  routes: [{
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
      name: 'home5',
      component: login
    },
    {//列表页路由
      path: '/listpage',
      name: 'listpage',
      component: listpage
    }
  ]
})