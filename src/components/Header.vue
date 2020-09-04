<template>
  <header id='header'>
    <h1>Menu Colosso</h1>
    <!-- <img src='https://fakeimg.pl/300/'> -->
    <img src="https://avatars0.githubusercontent.com/u/70414481?s=200&v=4"/>
    <!-- <LogoIcon/> -->
  </header>

</template>
<script>
// import LogoIcon from '../icons/LogoIcon'

export default {
  components: {
    // LogoIcon
  },
}
</script>
<style>

#header {
  background-color: var(--_color_3);
  display: grid;
  grid-template-columns: 70% 30%;
  height: 100%;
  justify-content: space-between;
}
#header h1 {
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
#header img {
  width: 80px; 
  height: 80px;
}

@media only screen and (max-width: 600px) {
  #header h1 {
    font-size: 2em;
  }
}

</style>