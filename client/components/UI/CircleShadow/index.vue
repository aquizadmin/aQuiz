<template>
  <div class="position-absolute shadow-circle" />
</template>

<style lang="scss" scoped>
.shadow-circle {
  z-index: 1;
  width: 364px;
  height: 314px;
  max-height: -webkit-fill-available;
  filter: blur(200px);
  background: rgba(215, 29, 97, 0.6);
}
</style>