<template>    
  <section id='body-basket'> 
    <header id='header-basket'>
      <div>
        <a class='iconarrowback' href='/digital-menu/#/'> <ArrowBackIcon /></a>
        <h1> Cesta de compras <BasketIcon/> </h1>
      </div>
      <nav>
        <ul>
          <li>Cesta ({{ volume }})</li>
          <li>Histórico</li>
        </ul>
      </nav>
    </header>
    <main>
      <button @click='removeAll'>Limpar</button>
      <ul v-if='volume'>
        <li v-for='item in shoppingBasket'  :key='item[0]'>
          <h2>{{ item[0] }}</h2>
          <div>
            {{ item[1].quantity }} 
          </div>
          <TrashIcon />
          <hr />
        </li>
      </ul>
      <div v-else class='empty-message'>
        <h3>A sua cesta está vazio</h3>

        <h5>Adicione seu lanche favorito aqui!</h5>
      </div>
      <span v-show='volume' id='send-request'><SendIcon/> </span>
    </main>
  </section>
</template>

<script>

import { mapActions, mapMutations, mapState } from 'vuex'
import { ArrowBackIcon, BasketIcon, TrashIcon, SendIcon } from '@/icons'

export default {
  components: {
    ArrowBackIcon, BasketIcon,TrashIcon, SendIcon
  },


  methods: {
    ...mapActions('shoppingBasket', ['loadShoppingBasket']),
    ...mapMutations('shoppingBasket', ['removeAll'])

  },

  computed: {
    ...mapState('shoppingBasket', ['shoppingBasket', 'volume']),
  },

  // watch: {
  //   shoppingBasket(){
  //     this.loadShoppingBasket()
  //   }
  // },

  async mounted() {
    await this.loadShoppingBasket()
    console.log(this.shoppingBasket.get('Calabresa').quantity)
  }
}
</script>

<style scoped>

  #body-basket {
    max-width: 1300px;
    margin: 0 auto;
    color: var(--_color_6);
    position: relative;
    display: grid;
    height: 100vh;
    grid-template-rows: .11fr 1fr;
    box-sizing: border-box;
  }


  #body-basket main {
    overflow-y: auto;
  }

  #header-basket {
    color: var(--_color_0);
    background: var(--_color_2);
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto); 
  }

  #header-basket div {
    display: flex;
    height: 90px;
    align-items: center;
    padding: 5px;
    border-bottom: 2px dashed var(--_color_4);
  }

  #header-basket div h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
    #header-basket div h1 svg {
      margin-left: 10px;
      font-size: 20pt;
    }

  #header-basket nav ul {
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  }

  #send-request {
    cursor: pointer;
    height: 55px;
    width: 55px;
    position: absolute;
    right: 20px;
    bottom: 30px;
    font-size: 30pt;
    background: var(--_color_6);
    color: var(--_color_0);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    margin: 0;
    padding: 0;
  }

  #send-request svg {
    padding-left: 5px;
  }

  #send-request:hover {
    color: var(--_color_6);
    background-color: var(--_color_0); 
  }
  .empty-message {
    text-align: center;
    padding: 20% 20px;
  }

  .empty-message h3 {
    font-size: 28pt;
  }

  .empty-message h5 {
    margin-top: 20px;
    font-size: 14pt;
  }
  .iconarrowback {
    color: var(--_color_0);
    font-weight: bold;
    font-size: 25px;

  }

</style>