<template>
  <PageHero
    title="Select settings and "
    gradient-title="Let's play!"
    description="Select category, time and enjoy game with challenging You. Then compare Your result with others."
    image="/images/page-hero/quiz.jpg"
  />

  <section class="d-flex flex-column align-center py-8">
    <v-row
      align="center"
      class="w-100 py-10"
    >
      <v-col>
        <v-img
          alt="Blog image"
          class="mr-auto"
          src="/images/pages/game/blog-game.png"
          lazy-src="/images/pages/game/blog-game.png"
          width="50%"
          height="350px"
        />
      </v-col>

      <v-col
        cols="8"
        class="d-flex flex-column align-self-stretch"
      >
        <div>
          <h3 class="page-blog-subtitle mb-7">
            Select settings
          </h3>

          <p class="page-blog-description">
            Select the duration and the category and start playing.
          </p>
        </div>

        <v-row align="center">
          <v-col>
            <v-select
              v-model="formData['duration']"
              aria-selected="false"
              hide-details
              label="Duration (seconds)"
              :items="durations"
              variant="underlined"
              color="white"
            />
          </v-col>

          <v-col v-if="categories && categories?.payload">
            <v-select
              v-model="formData['category']"
              aria-selected="false"
              hide-details
              label="Category"
              :items="categories?.payload"
              variant="underlined"
              color="white"
            />
          </v-col>
        </v-row>

        <UIGradientButton
          class="w-25"
          @click="handleClick"
        >
          Play
        </UIGradientButton>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import {useFetchWithHeaders} from '~/hooks';

definePageMeta({
    middleware: 'auth'
})

const router = useRouter()

const {data: categories} = useFetchWithHeaders('/questions/getAllCategories', {
    method: 'GET',
})

const formData = ref({duration: 30, category: 'Linux'})
const durations = ref([30, 60, 90])
const handleClick = () => {
    const {duration, category} = formData.value;

    localStorage.removeItem('results')

    router.push({path: '/game/play', query: {duration, category}});
}
</script>
