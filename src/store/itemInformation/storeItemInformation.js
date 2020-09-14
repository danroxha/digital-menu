import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  
  state: {
    isVisible: false,
    information: {},
  },

  mutations: {
    openPopUp: (state, data) => { state.isVisible = true; state.information = data },
    closePopUp: state => state.isVisible = false
  }
  
})

export { store }