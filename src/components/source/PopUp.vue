<template>
  <div class="pop-info">
    <header>
      <ArrowBackIcon @click="closePopUp"></ArrowBackIcon>
      <span>Detalhes do Item</span>
    </header>
    <section>
      <div>
        <figure>
          <img draggable="false" :src="data.imagem" />
        </figure>
        <h3>{{ data.nome }}</h3>
        <span>{{ data.ingredientes.join(",") }}</span>
        <br />
        <span class="price">R$ {{ data.preco }}</span>
        <br />
      </div>
      <form>
        <label>
          <MinusIcon  @click="removeItem" />
          <input type="text" disabled v-model="quantity" />
          <PlusIcon @click="addItem"/>
        </label>
        <input
          @click="() => { 
            addItemToBasket({item: data, quantity })
            closePopUp()
          }"
          type="button"
          :value="'Adicionar\nR$ ' + computedPrice(data.preco)"
        />
      </form>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { ArrowBackIcon, MinusIcon, PlusIcon } from '@/icons'
export default {
  components: { ArrowBackIcon, MinusIcon, PlusIcon },
  data: () => ({
    quantity: 1,
  }),

  computed: {
    ...mapState('popUp', ['data']),
  },

  methods: {
    ...mapMutations('popUp', ['closePopUp']),
    ...mapMutations('shoppingBasket', ['addItemToBasket']),
    
    computedPrice(price) {
      return (parseFloat(price) * this.quantity).toFixed(2)
    },

    addItem(){
      const MAXIMUM_QUANTITY = 99
      if(this.quantity === MAXIMUM_QUANTITY) return
      this.quantity++;
    },

    removeItem(){
      const MINIMUM_QUANTITY = 1
      if(this.quantity === MINIMUM_QUANTITY) return
      this.quantity--;
    },
  },
};
</script>

<style scoped>

.price {
  margin: 10px 0;
  font-family: 'Courier New';
  font-size: 18pt;
}

.pop-info {
  height: 100%;
  width: 100%;
  max-width: 400px;
  height: max-content;
  background: var(--_color_3);
  position: fixed;
  top: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  color: var(--_color_0);
  flex-direction: column;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding-bottom: 20px;
  box-shadow: 2px 4px 20px 2px var(--_color_6);
  z-index: 2;

}

.pop-info header {
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  line-height: 30px;
}

.pop-info header svg {
  cursor: pointer;
  font-size: 20pt;
  float: left;
}

.pop-info section {
  height: 100%;
}

.pop-info section span {
  display: inline-block;
}

.pop-info section h3 {
  font-size: 18pt;
  margin: 10px 0;
  display: inline-block;
}

.pop-info section figure {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pop-info section figure img {
  width: 70%;
  height: 70%;
}

.pop-info section form {
  outline: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.pop-info section form label {
  display: flex;
  flex-direction: row;
  position: relative;
}

.pop-info section form label svg {
  position: absolute;
  justify-content: center;
  align-self: center;
  font-size: 30pt;
  color: var(--_color_2);
  cursor: pointer;
}

.pop-info section form label svg:nth-child(1) {
  left: 7px;
}
.pop-info section form label svg:nth-child(3) {
  right: 7px;
}

.pop-info section form  input {
  background: var(--_color_2);
  width: 100%;
  padding: 5px 0;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  font-size: 14pt;
  outline: none;
  font-family: 'Courier New';

}

.pop-info section form input[type="button"] {
  margin-left: 5px;
  color: var(--_color_0);
  cursor: pointer;
}

.pop-info section form input[type="text"] {
  background: var(--_color_0);
  text-align: center;
  margin-right: 5px;
}

@media only screen and (max-width: 450px) {
  .pop-info {
    display: grid;
    min-width: 100vw;
    height: 100vh;
  }
}

@media screen and (orientation: landscape) and (max-height: 450px){
  .pop-info {
    height: 100vh;
  }

  .pop-info section form input {
    font-size: 10pt;
  }
} 

</style>