<template>
  <header id='header'>
    <h1>Pizzaria Colosso</h1>
    <img src='https://fakeimg.pl/300/'>
  </header>

</template>
<script>
export default {
    
}
</script>
<style>
#header {
  background-color: var(--_color_1);
  display: flex;
  height: 100%;
  justify-content: space-between;
}
#header h1 {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  align-items: center;
  font-size: 3.5em;
  color: var(--_color_0);
  font-style: italic;
}
#header img {
  width: 100px;
}
</style>