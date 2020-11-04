import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Basket from '@/pages/Basket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'default',
      path: '*', 
      component: Home,
    },
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'basket',
      path: '/basket',
      component: Basket,
    }
  ]
})
