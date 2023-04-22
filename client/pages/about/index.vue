<template>
  <PageHero
    title="About "
    gradient-title="Us"
    description="Who We are? We are web Developers, who wants to create fancy and usable app for learning the easiest way."
    image="/images/page-hero/about.jpg"
    :image-cover-fit="true"
  />

  <section class="d-flex flex-column align-center mt-5">
    <span class="page-title mb-10">
      Who We Are
    </span>
      
    <v-row
      v-for="(developer, index) in developers"
      :key="index"
      justify="space-around"
      align="center"
      class="w-75"
    >
      <v-col
        cols="3"
        :order="index % 2 !== 0 ? 'last': 'first'"
      >
        <UIAvatar
          :image="developer.image"
          :full-name="`${developer.name} ${developer.lastname}`"
          :profession="developer.profession"
        />
      </v-col>

      <v-col
        :order="index % 2 !== 0 ? 'first': 'last'"
      >
        <div class="d-flex align-center mb-4">
          <h3 class="page-blog-title mr-2 font-weight-bold">
            {{ developer.name }}
          </h3>
          <span class="page-blog-title page-gradient-title font-weight-bold">
            {{ developer.lastname }}
          </span>
        </div>

        <div class="page-blog-description">
          {{ developer.description }}
        </div>

        <div class="d-flex align-center mt-5">
          <div
            v-for="(socialLink, i) in developer.socialLinks"
            :key="i"
          >
            <v-btn
              v-if="socialLink"
              :icon="`mdi-${i}`"
              class="mr-3"
              @click="handleClick(socialLink)"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { developers } from '~/constants'

const handleClick = (url) => {
  navigateTo(url, { external: true })
}
</script>