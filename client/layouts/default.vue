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

<script>
export default {
    methods: {
        onMouseMove(e) {
            const mouse = document.querySelector('.mouse-shadow');
            mouse.style.top = `${ e.y }px`
            mouse.style.left = `${ e.x }px`
        }
    }
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