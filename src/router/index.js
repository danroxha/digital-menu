import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Basket from '@/pages/Basket'

Vue.use(Router)

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'basket',
    path: '/basket',
    component: Basket,
  },
]

const router =  new Router({routes})

export default router