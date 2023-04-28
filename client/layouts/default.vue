<template>
  <v-app
    class="bg-primary position-relative"
    @mousemove="onMouseMove"
  >
    <span class="mouse-shadow" />
    <Header />

    <v-main>
      <UICircleShadow
        :width="450"
        right="auto"
      />

      <v-container>
        <slot />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
console.log('\r\n \u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\r\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557    \u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2550\u2550\u2588\u2588\u2588\u2554\u255D\r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551    \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255D \r\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551    \u2588\u2588\u2551\u2584\u2584 \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255D  \r\n\u2588\u2588\u2551  \u2588\u2588\u2551    \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\r\n\u255A\u2550\u255D  \u255A\u2550\u255D     \u255A\u2550\u2550\u2580\u2580\u2550\u255D  \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\r\n                                         \r\n')

const onMouseMove = (e) =>  {
  const mouse = document.querySelector('.mouse-shadow');
  mouse.style.top = `${e.y}px`
  mouse.style.left = `${e.x}px`
}
</script>

<style lang="scss" scoped>
.mouse-shadow {
  z-index: -1;
  width: 200px;
  height: 200px;
  position: fixed;
  filter: blur(31px);
  transform: translate(-50%, -50%);
  transition: width .2s ease, height .2s ease;
  background: radial-gradient(circle closest-side, rgba(215, 29, 97, 0.6), transparent);
}
</style>