<template>
  <footer id="footer">
    <div>
      <a :href="'https://wa.me/' + phone"><WhatsappIcon /></a>
      <a
        :href='instagram'
        target="_blank"
        ><InstagramIcon
      /></a>
      <a :href="'tel:' + phone"><PhoneIcon /></a>
    </div>
    <div>
      <span> TERÇA a DOMINGO das 18:00 às 23:30 </span>
    </div>
  </footer>
</template>

<script>

import { WhatsappIcon, InstagramIcon, PhoneIcon } from '@/icons'
import { mapState } from 'vuex'

export default {
  components: { WhatsappIcon, InstagramIcon, PhoneIcon, },
  computed: {
    ...mapState('statics', ['phone', 'instagram']),
  }  
}
</script>

<style scoped>

#footer {
  color: var(--_color_0);
  font-weight: bold;
  background-color: var(--_color_3);
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 1fr 1fr;
}

#footer div:nth-child(1) a {
  display: flex;
  color: var(--_color_0);
  align-self: center;
}

#footer div:nth-child(1) {
  display: flex;
  justify-content: space-evenly;
  font-size: 3em;
}

</style>