export default {
  namespaced: true,
  
  state: {
    shoppingBasket: {},
  },

  mutations: {
    
    addItemToBasket(state, data ) {
      state.shoppingBasket[ Date.now.toString() ]( data )
    },
    
    removeItemFromBasket(state, id){
      delete state.shoppingBasket[id]
    }
  },
  
  actions: {},
  
  gettets: {},
}