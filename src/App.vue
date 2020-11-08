<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'


export default {
  methods: {
    ...mapMutations('shoppingBasket', ['setLocalStorage']),
  },
  
  async mounted(){
    await this.setLocalStorage(localStorage)
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  --_color_0: #ffffff;
  --_color_1: #f9d125;
  --_color_2: #087607;
  --_color_2_1: #30af61;
  --_color_3: #9a1511;
  --_color_4: #edf1f0;
  --_color_5: #c2c2c2;
  --_color_6: #000000;
  box-sizing: border-box;
  font-family: sans-serif;
  max-height: inherit;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  outline: none;
}

body {
  padding: 0;
  min-height: 100%;
  background-color: var(--_color_4);
}

</style>
