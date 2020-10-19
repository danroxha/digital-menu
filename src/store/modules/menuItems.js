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
      const url = `https://spreadsheets.google.com/feeds/list/${id}/1/public/basic?alt=json`
      
      state.items = await fetch(url)
        .then(async request => joinInGroups(parseData(await request.json())))

      state.isEmpty = !!state.items.length
    },
  },
  gettets: {},
}