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
            alt="Logo"
            width="44px"
            height="44px"
            src="/logo.png"
            lazy-src="/logo.png"
            class="cursor-pointer"
            @click="goToHome"
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
            <UIGradientButton
              @click="handleClick"
            >
              Let's play
            </UIGradientButton>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import {useFetchWithHeaders} from '~/hooks';

const router = useRouter()
const isLogged = ref(false)

const pages = ref(
  [
    { name: 'Home', slug: '/' },
    { name: 'About us', slug: '/about' },
    { name: 'Statistics', slug: '/statistics' },
  ],
)

const nonLoggedPages = ref(
  [
    { name: 'About us', slug: '/about' },
  ]
)

const token = localStorage.getItem('access-token')

if (token) {
  const {data: response, error:errorResponse} = await useFetchWithHeaders('/me', {
    method: 'GET',
  })

  if(response && !errorResponse) {
    isLogged.value = true
  }
}

const handleClick = () => {
  router.push('/game')
}

const goToHome = () => {
  router.push('/')
}
</script>
