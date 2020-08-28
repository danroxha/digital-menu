<template>
  <main id='container'>
    <Header></Header>
    <section>
      <ul>
        <Card 
          v-for='item in items' :key='item.nome' :item='item' :phone='phone'
          >
        </Card>
      </ul>
    </section>
    <Footer :phone='phone'></Footer>
  </main>
</template>

<script>

import Header from './Header'
import Footer from './Footer'
import Card from './Card'

export default {
  components: {
    Header,
    Footer,
    Card,
  },

  data(){
    return {
      title: 'Pizza',
      phone: '+5598988998019',
      items: [],
    }
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

    parseData(data){
      return data.feed.entry
        .map(
          value => this.toJSON(
            value.content.$t
              .replace(/:\s/ig, ':')
              .replace(/;\s/ig, '|')
              .replace(/,\s/ig, ' ')
              .replace(/:/ig, ' ')
              .split(' ')
          )
        )
        .map(item => (
          {
            ...item,
            nome: item.nome.replace(/_/ig, ' '),
            ingredientes: item.ingredientes?.replace(/_/ig, ' ')?.split('|')
          }
        ))
    },
  },

  async mounted(){

    const id = '1Hrhw7xC5NFxNyblD7aZ7afD1DFzHlSsQidav0e6Hshw'
    const url = `https://spreadsheets.google.com/feeds/list/${id}/1/public/basic?alt=json`
    
    this.items = await fetch(url)
      .then(async request => this.parseData(await request.json()))

  }
}


</script>

<style>
#container{
  display: grid;
  height: 100vh;
  grid-template-rows: auto auto auto;
  /* grid-template-rows: repeat(3, 1fr); */
  box-sizing: border-box;
}
#container section{
  height: 95%;
  overflow-y: auto;
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */
}
</style>