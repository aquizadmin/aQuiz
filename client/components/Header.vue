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
            :class="!isLogged ? 'text-right' : 'text-center'"
          >
            <NuxtLink
              :to="page.slug"
              active-class="text-pink-darken-3"
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

            <v-dialog
              transition="dialog-top-transition"
              width="auto"
            >
              <template #activator="{ props }">
                <v-btn
                  density="compact"
                  color="white"
                  icon="mdi-logout"
                  class="ml-3 align-self-center"
                  v-bind="props"
                />
              </template>
              <template #default="{ isActive }">
                <v-card>
                  <v-toolbar
                    color="secondary"
                    title="Are you sure? 🤔"
                  />
                  <v-card-text class="animated-gradient-box">
                    <div class="page-blog-subtitle pa-12">
                      Maybe can we play again? 🤩
                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-end bg-secondary">
                    <v-btn
                      variant="text"
                      color="white"
                      @click="isActive.value = false"
                    >
                      Close
                    </v-btn>

                    <v-btn
                      variant="text"
                      color="primary"
                      @click="handleLogout"
                    >
                      <span class="page-gradient-title">
                        Log Out
                      </span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import {useFetchWithHeaders} from '~/hooks';

const route = useRoute()
const router = useRouter()
const isLogged = ref(false)

const pages = ref(
    [
        {name: 'Home', slug: '/'},
        {name: 'About us', slug: '/about'},
        {name: 'Statistics', slug: '/statistics'},
        {name: 'Videos', slug: '/videos'},
        {name: 'Books', slug: '/books'},
    ],
)

const nonLoggedPages = ref(
    [
        {name: 'About us', slug: '/about'},
    ]
)


const onRouteChange = async () => {
    const token = localStorage.getItem('access-token')

    if (!!token || (token && ['undefined', 'null'].includes(token))) {
        const {data: response, error: errorResponse} = await useFetchWithHeaders('/users/me', {
            method: 'GET',
        })

        isLogged.value = response.value && !errorResponse.value
    }
}

onRouteChange()

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

watch(() => route.name, onRouteChange)
</script>
