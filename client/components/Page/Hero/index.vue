<template>
  <v-row
    align="center"
    class="position-relative py-8"
    style="z-index: 2"
  >
    <v-col>
      <div>
        <h1 class="page-title">
          {{ title }}

          <span class="page-gradient-title">
            {{ gradientTitle }}
          </span>
        </h1>
      </div>


      <div class="page-description pt-5">
        {{ description }}
      </div>
    </v-col>

    <v-col>
      <v-img
        alt="Hero image"
        :src="image"
        width="572"
        height="572"
        aspect-ratio="1"
        :lazy-src="image"
        :cover="imageCoverFit"
        class="ml-auto rounded-lg"
      />
    </v-col>
  </v-row>

  <v-divider
    thickness="2px"
    color="rgba(231, 231, 231, 0.24)"
  />
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  gradientTitle: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  imageCoverFit: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
img {
    border-radius: 10px;
}
</style>