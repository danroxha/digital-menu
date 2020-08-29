<template>
  <li class='card'>
    <!-- <img src='https://fakeimg.pl/300/'> -->
    <img :src='image'>
    <div>
      <h3>{{item.nome}}</h3>
      <span>
        {{ingredientes}}
      </span>
      <span>
        Grande: R${{item.preco}}
      </span>
    </div>
    <a 
      :href='genereteMessage(item)'>
      <span>Pedir Essa</span>
      <WhatsappIcon></WhatsappIcon>
    </a>
    
  </li>
</template>

<script>
import WhatsappIcon from '../icons/WhatsappIcon'

export default {
  props: ['item', 'phone'],
  components: {
    WhatsappIcon
  },

  data(){
    return {
      image: 'https://wonkywonderful.com/wp-content/uploads/2015/09/english-muffin-mini-pizzas-4.jpg',
    }
  },
  
  computed: {
    ingredientes(){
      
      var i = this.item.ingredientes
      const ITEM_LIMIT = 4
      if(this.item.ingredientes.length > ITEM_LIMIT){
        i = i.slice(0,3)
        i.push('...')
      }

      return i.join(', ')
    },
  },

  methods: {
    genereteMessage(item){
      let message = encodeURI(`Olá, gostaria de pedir: *${item.nome}*`)
      return `https://wa.me/${this.phone}?text=${message}`
    }
  }

}
</script>

<style>
.card {
  max-height: 150px;
  background-color: var(--_color_0);
  display: grid;
  grid-template-columns: 20% 65% 15%;
  margin: 10px 15px;
}

.card img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card div:nth-child(2){
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
  font-size: .9em;
}
.card div:nth-child(2) span:nth-child(3) {
  color: var(--_color_3);
}
.card a:nth-child(3){
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
