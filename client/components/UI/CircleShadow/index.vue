<template>
  <div
    class="position-absolute shadow-circle"
    :style="circleShadowStyles"
  />
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 364,
    },
    right: {
      type: [Number, String],
      default: 0,
    }
  },
  computed: {
    circleShadowStyles() {
      return {
        width: `${this.width}px`,
        right: this.right,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.shadow-circle {
  z-index: 0;
  height: 314px;
  max-height: -webkit-fill-available;
  filter: blur(200px);
  background: rgba(215, 29, 97, 0.6);
}
</style>