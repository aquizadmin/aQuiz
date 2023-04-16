<template>
  <v-btn class="animated-gradient-btn pa-0">
    <slot />
  </v-btn>
</template>

<style scoped lang="scss">
.animated-gradient-btn {
  width: 150px;
  height: 75px;
  border-radius: 10px;
  background-color: #09090A;
  border: 4px solid transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-image: linear-gradient(#09090A, #09090A), linear-gradient(11deg, #f00000, #1f00bd);
  animation: animateEffect 1000ms linear Infinite;
}

@keyframes animateEffect {
  0% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(0deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  6.25% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(22.5deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  12.5% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(45deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  18.75% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(67.5deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  25% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(90deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  31.25% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(112.5deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  37.5% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(135deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  43.75% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(157.5deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  50% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(rgb(240, 0, 0), rgb(31, 0, 189));
  }
  56.25% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(202.5deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  62.5% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(225deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  68.75% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(247.5deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  75% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(270deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  81.25% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(292.5deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  87.5% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(315deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  93.75% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(337.5deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
  100% {
    background-image: linear-gradient(#09090A, #09090A), linear-gradient(360deg, rgb(240, 0, 0), rgb(31, 0, 189));
  }
}
</style>