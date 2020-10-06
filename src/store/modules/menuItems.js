function toJSON(arr){
      
  let obj = {}
  
  for(let i = 0; i < arr.length; i++){
    if(i % 2 == 0){
      obj[arr[i]] = arr[i+1]
    }
  }
  return obj
}

function joinInGroups(data){
      
  let group = new Object()
  
  for(var item of data){
    if(!Object.prototype.hasOwnProperty.call(group, item?.group)){
      group[item.group] = [item]
      continue
    }
    group[item.group].push(item)
  }

  return group
}

function parseData({feed}){
  return feed.entry
    .map(value => toJSON(
      value.content.$t
        .replace(/:\s?/ig, '|')
        .split(/,\s/ig)
        .map(value => value.split('|')).flat()
      )
    )
    .map(value => ({
      ...value,
      ingredientes: value.ingredientes.split(';'),
      imagem: `https://${value.imagem}` 
    })) 
}

export default {
  namespaced: true,
  
  state: {
    items: [],
  },
  
  mutations: {

  },
  
  actions: {
    loadData: async ()  => {
  
      const id = '1Hrhw7xC5NFxNyblD7aZ7afD1DFzHlSsQidav0e6Hshw'
      const url = `https://spreadsheets.google.com/feeds/list/${id}/1/public/basic?alt=json`
      
      await fetch(url)
        .then(async request => joinInGroups(parseData(await request.json())))
      
    }
  },
  gettets: {},
}