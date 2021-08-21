import { joinInGroups, parseData } from '../../utils'


export default {
  namespaced: true,
  
  state: {
    items: [],
    isEmpty: true
  },
  
  mutations: {},
  
  actions: {
    async ['loadData']({state}){

      const id = '1Hrhw7xC5NFxNyblD7aZ7afD1DFzHlSsQidav0e6Hshw'
      const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:json`
      
      state.items = await fetch(url)
        .then(res => res.text()).then(text => JSON.parse(text.substr(47).slice(0, -2)))
        .then(json => joinInGroups(parseData(json)))

      state.isEmpty = !!state.items.length
    },
  },
  gettets: {},
}