<template>
  <main id='container'>
    <Header />
    <Container>
      <section>
        <Cards />
        <div v-if='visible'>
          <PopUp />
        </div>
      </section>
      <section>
        <Loading />
      </section>
    </Container>
    <Footer />
  </main>
</template>
<script>

import { mapMutations, mapState } from 'vuex'
import { Card as Cards, Container, Footer, Header, PopUp, Loading } from '@/components'


export default {
  
  components: {
    Cards, Container, Footer, Header, PopUp, Loading
  },

  computed: {
    ...mapState('menuItems', ['items']),
    ...mapState('popUp', ['visible']),
  },
  
  methods: {
    ...mapMutations('popUp', ['openPopUp']),
  },
  
  mounted: () => {
    // this.loadData()
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');

.title-group{
  font-family: 'Cedarville Cursive', cursive;
  font-size: 35pt;
  text-transform: capitalize;
  color: var(--_color_3);
  font-weight: bold;
  margin-left: 20px;
}

#container{
  display: grid;
  height: 100vh;
  grid-template-rows: .11fr 1fr .15fr;
  box-sizing: border-box;
}

#container section{
  position: relative;
  overflow-y: auto;
  width: 100%;
  margin-top: 3.5px;
}

</style>