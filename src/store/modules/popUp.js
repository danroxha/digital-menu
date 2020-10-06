export default {
  namespaced: true,
  
  state: {
    visible: false,
    data: {}
  },

  mutations: {
    openPopUp: (state, data) => {
        state.visible = true
        state.data = data
    },
    closePopUp: state => state.visible = false,
  },
  
  actions: {},
  
  gettets: {},
}