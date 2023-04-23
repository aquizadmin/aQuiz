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
            v-for="(page, index) in isLogged ? pages : nonLoggedPages"
            :key="index"
            :class="!isLogged ? 'text-right' : ''"
          >
            <NuxtLink
              :to="page.slug"
              class="text-white text-decoration-none"
            >
              {{ page.name }}
            </NuxtLink>
          </v-col>

          <v-col
            v-if="isLogged"
            class="d-flex items-center"
          >
            <UIGradientButton
              @click="handleClick"
            >
              Let's play
            </UIGradientButton>

            <v-btn
              density="compact"
              color="white"
              icon="mdi-logout"
              class="ml-3 align-self-center"
              @click="handleLogout"
            />
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

if (!!token || (token && ['undefined', 'null'].includes(token))) {
  const {data: response, error:errorResponse} = await useFetchWithHeaders('/users/me', {
    method: 'GET',
  })

  if(response.value && !errorResponse.value) {
    isLogged.value = true
  }
}

const handleClick = () => {
  router.push('/game')
}

const goToHome = () => {
  router.push('/')
}

const handleLogout = () => {
  localStorage.removeItem('access-token')
  isLogged.value = false
  router.replace('/login')
}
</script>
