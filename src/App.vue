<template>
  <main id='container'>
    <Menu></Menu>
  </main>
</template>

<script>

import Menu from './components/Menu'

export default {
  name: 'app',
  title: 'Pizza Colosso',
  components: {
    Menu
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  --_color_0: #ffffff;
  --_color_1: #f9d125;
  --_color_2: #3ed979;
  --_color_3: #9a1511;
  --_color_4: #edf1f0;
  --_color_5: #c2c2c2;
  box-sizing: border-box;
  font-family: sans-serif;
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
