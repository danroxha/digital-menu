<template>
  <header id='header'>
    <h1>Pizzaria Colosso</h1>
    <!-- <img src='https://fakeimg.pl/300/'> -->
    <img src="https://scontent-for1-1.cdninstagram.com/v/t51.2885-19/s320x320/117997168_393401828293769_7390431591255010319_n.jpg?_nc_ht=scontent-for1-1.cdninstagram.com&_nc_ohc=cz9d2ICRpugAX9Vz3Zg&oh=4c6dae3a8f43a3a37f63c19d3246e070&oe=5F73459B"/>
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
  background-color: var(--_color_0);
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
  color: var(--_color_3);
  font-style: italic;
  text-shadow: 2px 2px 2px #000;
}
#header img {
  width: 100%; 
  height: 100%;
}

@media only screen and (min-width: 600px) {
  #header img {
    /* width: 150px; */
    /* height: 150px; */
  }
}

@media only screen and (max-width: 360px) {
  #header {
    grid-template-columns: 65% 35%;
  }
  #header h1 {
    font-size: 2.7em;
  }
}
@media only screen and (min-width: 700px) {
  #header img{
    width: 150px;
  }
}
</style>