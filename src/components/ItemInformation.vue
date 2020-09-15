<template>
  <div class='pop-info'>
    <header>
      <ArrowBackIcon @click="closePopUp"></ArrowBackIcon>
      <span >Detalhes do Item</span>
    </header>
    <section>
      <div>
        <figure>
          <img draggable='false' :src="item.imagem" />
        </figure>
        <h3>{{item.nome}}</h3>
        <span>{{item.ingredientes.join(',')}}</span>
        <br />
        <span class='price'>R$ {{item.preco}}</span>
        <br />
      </div>
      <form>
        <input min='1' max='10' type='number' name v-model='quantity' />
        <input
          v-on:click="handleTheQuantityOfItems"
          type='button'
          :value='"Adicionar R$ " + computedPrice(item.preco)'
        />
      </form>
    </section>
  </div>
</template>
<script>
import { ArrowBackIcon } from "../icons/mod.js"
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    ArrowBackIcon,
  },
  data() {
    return {
      price: 0,
      quantity: 1,
    }
  },
  computed: {
    ...mapState({
      item: state => state.information
    })
  },
  methods: {
    ...mapMutations(['openPopUp', 'closePopUp']),

    handleTheQuantityOfItems() {
      console.log(this.quantity)
    },

    computedPrice(price) {
      return (parseFloat(price) * this.quantity).toFixed(2)
    },

  },
};
</script>

<style>
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
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  font-size: 16pt;
  outline: none;
}

.pop-info section form input {
  background: var(--_color_2);
  width: 100%;
  padding: 20px 0;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  font-size: 11pt;
  outline: none;
  cursor: pointer;
  overflow-x: auto;
}

.pop-info section form input[type="button"] {
  margin-left: 5px;
  color: var(--_color_0);
}

.pop-info section form input[type="number"] {
  background: var(--_color_0);
  text-align: right;
  margin-right: 5px;
  padding-right: 10px;
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
    /* max-height: 200px; */
    /* overflow-x: auto; */
    /* height: 100%; */
  }
  .pop-info section form input {
    font-size: 10pt;
  }
} 
/* 
*/
</style>
