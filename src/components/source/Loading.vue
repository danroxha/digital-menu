<!--
  Codepen: https://codepen.io/JeffreyTaylor
  Source : https://codepen.io/JeffreyTaylor/pen/Opyagw
  By Jeffrey Taylor
-->

<template>
  <div class="pizza">
    <div class="pepperoni"></div>
  </div>
</template>

<style scoped>
.pizza {
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 300px;
  width: 300px;
  background-color: #FFB10B;
  border-radius: 50%;
  box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.4);
  animation: spin 2s linear infinite;
}

.pizza:before {
  content: '';
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #FE4E4F;
  border-radius: 50%;
  height: 270px;
  width: 270px;
}

.pizza:after {
  content: '';
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #FFD72C;
  border-radius: 50%;
  height: 240px;
  width: 240px;
}

.pepperoni {
  z-index: 10;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 
    -80px -60px 0 0 #C4272C,
    0 -75px 0 0 #C4272C,
    -40px -30px 0 0 #C4272C,
    -80px -60px 0 0 #C4272C,
    80px -40px 0 0 #C4272C,
    -60px 30px 0 0 #C4272C,
    60px 30px 0 0 #C4272C,
    -30px 80px 0 0 #C4272C,
    20px 20px 0 0 #C4272C,
    30px 78px 0 0 #C4272C,
    35px -30px 0 0 #C4272C;
}

.mushrooms {
  z-index: 10;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 15px;
  width: 30px;
  border-radius: 10px;
  background-color: tranparent;
  box-shadow: 
    -80px -60px 0 0 #4C5B5C,
    0 -75px 0 0 #4C5B5C,
    -40px -30px 0 0 #4C5B5C,
    -80px -60px 0 0 #4C5B5C,
    80px -40px 0 0 #4C5B5C,
    -60px 30px 0 0 #4C5B5C,
    60px 30px 0 0 #4C5B5C,
    -30px 80px 0 0 #4C5B5C,
    20px 20px 0 0 #4C5B5C,
    30px 78px 0 0 #4C5B5C,
    35px -30px 0 0 #4C5B5C;
}

.mushrooms:after {
  content: '';
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 20px;
  width: 15px;
  background-color: transparent;
  z-index:15;
  box-shadow: 
    -80px -60px 0 0 #4C5B5C,
    0 -75px 0 0 #4C5B5C,
    -40px -30px 0 0 #4C5B5C,
    -80px -60px 0 0 #4C5B5C,
    80px -40px 0 0 #4C5B5C,
    -60px 30px 0 0 #4C5B5C,
    60px 30px 0 0 #4C5B5C,
    -30px 80px 0 0 #4C5B5C,
    20px 20px 0 0 #4C5B5C,
    30px 78px 0 0 #4C5B5C,
    35px -30px 0 0 #4C5B5C;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

</style>