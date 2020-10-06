<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './pages/Home'

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

* {
  margin: 0;
  padding: 0;
  --_color_0: #ffffff;
  --_color_1: #f9d125;
  --_color_2: #3ed979;
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
