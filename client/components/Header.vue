<template>
  <v-app-bar
    fixed
    app
    color="primary-lighten-1"
    class="py-2"
  >
    <v-container>
      <v-row>
        <v-col class="d-flex align-center justify-start">
          <v-img
            width="44"
            height="44px"
            src="/logo.png"
          />
        </v-col>

        <v-spacer />

        <v-row
          justify="center"
          align="center"
        >
          <v-col
            v-for="(page, index) in pages"
            :key="index"
          >
            <NuxtLink
              :to="page.slug"
              class="text-white text-decoration-none"
            >
              {{ page.name }}
            </NuxtLink>
          </v-col>

          <v-col>
            <UIGradientButton @click="handleClick">
              Let's play
            </UIGradientButton>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { name: 'Home', slug: '/' },
        { name: 'About', slug: '/about' },
        { name: 'Statistics', slug: '/statistics' },
      ],
    }
  },
  methods: {
      handleClick() {
          console.log('button click')
      }
  }
}
</script>
