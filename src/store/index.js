import Vue from 'vue'
import Vuex from 'vuex'
import menuItems from './modules/menuItems'
import popUp from './modules/popUp'
import shoppingBasket from './modules/shoppingBasket'
import statics from './modules/static'
import headerVisible from './modules/headerVisible'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    menuItems,
    popUp,
    shoppingBasket,
    statics,
    headerVisible,
  }
})