import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    scroll: 0,
  },

  mutations: {
    setScrollValue: (state, data) => { state.scroll = data },
  }
  
})

export default store 