<template>
  <main id='container'>
    <Header></Header>
    <section @scroll="scrollChange">
      <div v-if='Object.entries(items).length'>
        <ul v-for='(_, group) in items' :key='_'>
          <h3 class='title-group' :id='group'>{{ group }}</h3>
          <Card v-for='item in items[group]' :key='item.nome' :item='item' :phone='phone'/>
        </ul>
      </div>
      <Loading v-else />
      
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

    joinInGroups(data){
      
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

   scrollChange($event){
     console.log($event.target.scrollTop)
   }

  },

  async mounted(){

    const id = '1Hrhw7xC5NFxNyblD7aZ7afD1DFzHlSsQidav0e6Hshw'
    const url = `https://spreadsheets.google.com/feeds/list/${id}/1/public/basic?alt=json`
    
    this.items = await fetch(url)
      .then(async request => this.joinInGroups(this.parseData(await request.json())))

    console.log(this.items)

  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');

.title-group{
  font-family: 'Cedarville Cursive', cursive;
  font-size: 35pt;
  text-transform: capitalize;
  color: var(--_color_3);
  font-weight: bold;
  margin-left: 20px;
}

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
