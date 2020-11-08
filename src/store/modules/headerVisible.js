export default {
    namespaced: true,
    
    state: {
      visible: true,
      otherCondicion: true, 
    },
  
    mutations: {
      onMoveScroll: (state, event) => 
        state.visible = event.target.scrollTop < 70 && state.otherCondicion,
      changeOtherCondicion: (state, bool) => 
        state.otherCondicion = bool,
      al: (state) => console.log('Chamou ' + state.otherCondicion),
    },
    
    actions: {},
    
    gettets: {},
  }