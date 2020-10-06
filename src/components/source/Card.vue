<template>
  <div>
    <ul v-for='(key, group) in items' :key='key'>
      <h3 class='title-group' :id='group'>{{ group }}</h3>
      <li class="card" v-for='item in items[group]' :key='item.nome' :item='item'>
        <img @click.prevent="openPopUp(item)" :src="item.imagem" loading="lazy" />
        <div @click.prevent="openPopUp(item)">
          <h3>{{ item.nome }}</h3>
          <span>
            {{ ingredients(item) }}
          </span>
          <span> Grande: R${{ item.preco }} </span>
        </div>
        <a :href="genereteMessage(item)">
          <span>Pedir Essa</span>
          <WhatsappIcon></WhatsappIcon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { WhatsappIcon } from "@/icons";

export default {
  components: { WhatsappIcon },
  data: () => ({
    items: [],
  }),

  methods: {
    ...mapMutations("popUp", ["openPopUp"]),
    
    async load(){

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

      const id = '1Hrhw7xC5NFxNyblD7aZ7afD1DFzHlSsQidav0e6Hshw'
      const url = `https://spreadsheets.google.com/feeds/list/${id}/1/public/basic?alt=json`
      
      this.items = await fetch(url)
        .then(async request => joinInGroups(parseData(await request.json())))
    },

    genereteMessage(item){
      let message = encodeURI(`Olá, gostaria de pedir: *${item.nome}*`)
      return `https://wa.me/${this.phone}?text=${message}`
    },

    ingredients(data){
      
      let item = [...data.ingredientes ]
      
      const ITEM_LIMIT = 4
      
      if( data.ingredientes.length > ITEM_LIMIT ){
        item = item.slice(0,3)
        item.push('...')
      }

      return item.join(', ')
    },
  },

  computed: {
    // ...mapState("menuItems", ["items"]),
  },

  mounted(){
    this.load()
  },
};

</script>

<style scoped>

.title-group{
  font-family: 'Cedarville Cursive', cursive;
  font-size: 45pt;
  text-transform: capitalize;
  color: var(--_color_3);
  font-weight: bold;
  margin-left: 20px;
}

.card {
  max-height: 150px;
  background-color: var(--_color_0);
  display: grid;
  grid-template-columns: 20% 65% 15%;
  margin: 10px 15px;
  cursor: pointer;
  
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card div:nth-child(2) {
  margin: 0 10px;
  padding: 10px 0;
  display: grid;
  min-height: 100px;
  grid-template-rows: 30% 50% 20%;
}

.card div:nth-child(2) h3 {
  color: var(--_color_3);
  font-size: 1.2em;
}

.card div:nth-child(2) span:nth-child(2) {
  /* padding-top: 5px; */
  color: var(--_color_5);
  font-weight: bold;
  font-size: 0.9em;
}

.card div:nth-child(2) span:nth-child(3) {
  color: var(--_color_3);
}

.card a:nth-child(3) {
  cursor: pointer;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-items: center;
  background-color: var(--_color_2);
  color: var(--_color_0);
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
}

.card a {
  outline: none;
}

.card a:nth-child(3) span {
  font-size: 10pt;
}

.card a:nth-child(3) svg {
  display: flex;
  justify-self: center;
  align-self: center;
  font-size: 30pt;
}

.card a:active {
  background-color: var(--_color_2_1);
}

@media only screen and (max-width: 600px) {
}

@media only screen and (max-width: 320px) {
  .card div:nth-child(2) h3 {
    color: var(--_color_3);
    font-size: 1.1em;
  }
}
</style>