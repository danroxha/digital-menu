<template>
  <div>
  <header v-if='visible  && !volume ' id='header'>
    <a href="https://pizzariacolosso.github.io/home/" target="_blank">
    <h1>Menu Colosso</h1>
    <img src="https://avatars0.githubusercontent.com/u/70414481?s=200&v=4" loading="lazy" />
    </a>
  </header>
  <header v-else id='header-map'>
    <a href='#pizzas' class='disable'><PizzaIcon /></a>
    <a href='#hamburguers' class='disable'><HamburguerIcon /></a>
    <a href='#bebidas' class='disable'><DrinkIcon /></a>
    <a href='#/basket' class='basket-icon'>
      <BasketIcon/>
      <span>{{ volume }}</span>
    </a>
  </header>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { BasketIcon, DrinkIcon, HamburguerIcon, PizzaIcon } from '@/icons'

export default {
  components: {
    BasketIcon, DrinkIcon, HamburguerIcon, PizzaIcon,
  },
  methods: {
    ...mapActions('shoppingBasket', ['loadShoppingBasket']),
    ...mapMutations('shoppingBasket', ['setLocalStorage'])

  },

  computed: {
    ...mapState('headerVisible', ['visible']),
    ...mapState('shoppingBasket', ['volume', ]),
  },

  async mounted(){
    await this.setLocalStorage(localStorage)
    await this.loadShoppingBasket()
  }
}

</script>

<style scoped>
#header-map{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--_color_0);
  font-size: 30pt;
  box-shadow: 1px 1px 5px var(--_color_6);
  z-index: 1;
  transition: 300ms;
}

#header-map svg:hover {
  color: var(--_color_6);
}

.disable svg {
  color: var(--_color_5);
}

.enable svg {
  color: var(--_color_6);
}

.basket-icon {
  margin: 0;
  position: relative;
  padding-top: 10px;
  cursor: pointer;
  text-decoration: none;
  color: var(--_color_6);

}
.basket-icon span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--_color_3);
  color: var(--_color_0);
  border-radius: 80%;
  font-size: 10pt;
  font-weight: bold;

}
#header {
  height: 65px;
}

#header a {
  background-color: var(--_color_3);
  display: grid;
  grid-template-columns: 70% 30%;
  height: 100%;
  justify-content: space-between;
}
#header a h1 {
  font-family: 'Lobster', cursive;
  font-style: italic;
  font-size: 3em;  
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  align-items: center;
  color: var(--_color_0);
}

#header a img {
  width: 65px; 
  height: 65px;
}

@media only screen and (max-width: 600px) {
  #header a h1 {
    font-size: 1.5em;
  }
}

</style>