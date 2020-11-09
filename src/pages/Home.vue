<template>
  <main id='container'>
    <Header />
    <Container>
      <section>
        <Card />
        <div v-if='visible'>
          <PopUp />
        </div>
      </section>
      <section v-show='isEmpty'>
        <Loading />
      </section>
    </Container>
    <Footer />
  </main>
</template>
<script>

import { mapMutations, mapState } from 'vuex'
import { Card, Container, Footer, Header, PopUp, Loading } from '@/components'


export default {
  
  components: {
    Card, Container, Footer, Header, PopUp, Loading
  },

  computed: {
    ...mapState('menuItems', ['items', 'isEmpty']),
    ...mapState('popUp', ['visible']),
  },
  
  methods: {
    ...mapMutations('popUp', ['openPopUp']),
  },
  
}
</script>

<style scoped>

#container {
  display: grid;
  height: 100vh;
  grid-template-rows: .11fr 1fr .15fr;
  box-sizing: border-box;
}

#container section {
  overflow-y: auto;
}

</style>