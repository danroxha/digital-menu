<template>
  <li class='card'>
    <img src='https://fakeimg.pl/300/'>
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
  computed: {
    ingredientes(){
      return this.item.ingredientes.join(' ')
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
  display: grid;
  grid-template-rows: 30% 50% 20%;
}
.card div:nth-child(2) h3 {
  color: var(--_color_3);
  font-size: 1.5em;
}
.card div:nth-child(2) span:nth-child(2) {
  padding-top: 5px;
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
.card a:nth-child(3) span {
  font-size: 10pt;
}

.card a:nth-child(3) svg {
  display: flex;
  justify-self: center;
  align-self: center;
  font-size: 30pt;
}

</style>