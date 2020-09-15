<template>
  <main id='container'>
    <Header></Header>
    <section>
      <ul v-if='items.length' >
        <Card v-for='item in items' :key='item.nome' :item='item' :phone='phone'/>
      </ul>

      <Loading v-else/>
      <div v-if='isVisible'>
        <ItemInformation />
      </div>
    </section>
    <Footer :phone='phone'></Footer>
  </main>
</template>

<script>

import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import Loading from './Loading'
import ItemInformation from './ItemInformation'
import { mapState } from 'vuex'

export default {
  components: {
    Header,
    Footer,
    Card,
    Loading,
    ItemInformation,
  },

  data(){
    return {
      title: 'Pizza',
      phone: '+5598988998019',
      items: [],
    } 
  },

  computed: {
    ...mapState({
      isVisible: state => state.isVisible
    })
  },

  methods: {
    toJSON(arr){
      
      let obj = {}
      
      for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
          obj[arr[i]] = arr[i+1]
        }
      }
  
      return obj
    },

    separateDataIntoGroups(data){
      
      let group = new Object()
      
      for(var item of data){
        if(!Object.prototype.hasOwnProperty.call(group, item?.group)){
          group[item.group] = [item]
          continue
        }
        group[item.group].push(item)
      }

      return group
    },

    parseData({feed}){
      return feed.entry
        .map(value => this.toJSON(
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
      
    },

    overviewEnable(){
      // console.log(this);
    },

  },

  async mounted(){

    const id = '1Hrhw7xC5NFxNyblD7aZ7afD1DFzHlSsQidav0e6Hshw'
    const url = `https://spreadsheets.google.com/feeds/list/${id}/1/public/basic?alt=json`
    
    this.items = await fetch(url)
      .then(async request => this.parseData(await request.json()))

    // console.log(this.isVisible)

  }
}


</script>

<style>
#container{
  display: grid;
  height: 100vh;
  grid-template-rows: .11fr 1fr .15fr;
  box-sizing: border-box;
}
#container section{
  position: relative;
  overflow-y: auto;
  margin: 0 auto;
}

@media only screen and (min-width: 800px) {
  #container section{
    margin: 0 auto;
    max-width: 100%;
  }
}
</style>
