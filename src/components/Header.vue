<template>
  <header v-if='false' id='header'>
    <a href="https://pizzariacolosso.github.io/home/" target="_blank">
    <h1>Menu Colosso</h1>
    <!-- <img src='https://fakeimg.pl/300/'> -->
    <img src="https://avatars0.githubusercontent.com/u/70414481?s=200&v=4"/>
    <!-- <LogoIcon/> -->
    </a>
  </header>
  <header v-else id='header-map'>
    <PizzaIcon />
    <HamburguerIcon />
    <DrinkIcon />
    <div class='basket-icon'>
      <BasketIcon/>
      <span>0</span>
    </div>
  </header>

</template>
<script>
import { BasketIcon, DrinkIcon, HamburguerIcon, PizzaIcon } from '../icons/mod.js'

export default {
  components: {
    BasketIcon,
    DrinkIcon,
    HamburguerIcon,
    PizzaIcon
  },
}
</script>
<style>

#header-map{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--_color_0);
  font-size: 30pt;
  box-shadow: 1px 1px 5px #000;
  z-index: 1;
}

#header-map svg {
  color: var(--_color_5);
  cursor: pointer;
  transition: 300ms;
}

#header-map svg:hover {
  color: var(--_color_6);
}

.basket-icon {
  margin: 0;
  position: relative;
  padding-top: 10px;

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

#header a {
  background-color: var(--_color_3);
  display: grid;
  grid-template-columns: 70% 30%;
  height: 100%;
  justify-content: space-between;
}
#header a h1 {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  align-items: center;
  font-size: 3em;
  color: var(--_color_0);
  font-style: italic;
  /*text-shadow: 2px 2px 2px #000;*/
}
#header a img {
  width: 80px; 
  height: 80px;
}

@media only screen and (max-width: 600px) {
  #header a h1 {
    font-size: 2em;
  }
}

</style>