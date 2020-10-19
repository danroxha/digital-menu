import { LocalStorage } from '../../utils/index.js'


export default {
  namespaced: true,
  
  state: {
    shoppingBasket: new Map(),
    volume: 0,
    setting: {
      storage: 'shoppingBasket',
      localStorage: null, 
    }
  },

  mutations: {
    
    async addItemToBasket(state, data) {
      let  { item, quantity } = data
      quantity = parseInt(quantity)

      if(state.shoppingBasket.has(item?.nome) ){
        quantity += state.shoppingBasket.get(item?.nome).quantity
        state.shoppingBasket.set(item?.nome, {item, quantity })
        
        await LocalStorage.updateAll(state.setting, state.shoppingBasket )
      
      }else {
        state.shoppingBasket.set(item?.nome, { item, quantity })
        await LocalStorage.updateAll(state.setting, state.shoppingBasket )
      }
      
      state.volume = state.shoppingBasket.size

    },

    removeAll(state) {
      state.shoppingBasket.clear()
      state.volume = state.shoppingBasket.size
      LocalStorage.removeAll(state.setting)
    },
    
    removeItemFromBasket(state, itemName) {
      state.shoppingBasket.delete(itemName)
    },

    setLocalStorage(state, instance) {
      state.setting.localStorage = instance
    }
  },
  
  actions: {
  
    loadShoppingBasket: async ({state}) => {
      state.shoppingBasket = await LocalStorage.findAll(state.setting)
      state.volume = state.shoppingBasket.size
    },

  },
  
  gettets: {},
}