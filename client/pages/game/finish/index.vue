<template>
  <section>
    <PageHero
      :title="results.answers.length ? 'Good ' : 'Try '"
      :gradient-title="results.answers.length ? 'Game!' : 'Again!'"
      :description="results.answers.length ? `Let's see the results.` : `You didn't select any answer. Don't give up. Let's try again`"
      image="/images/page-hero/finish-game.jpg"
      :image-cover-fit="true"
    />

    <section class="d-flex flex-column align-center">
      <h2 class="page-blog-title my-5">
        <span v-if="!results.correctAnswersCount">
          Don't give up!!! Let's try <span class="page-gradient-title">again</span>
        </span>
        <span v-else>
          Congrats!!! Your result is <span class="page-gradient-title">{{ results.points }}</span> points.
        </span>
      </h2>

      <div
        v-if="results.answers.length"
        class="page-description"
      >
        Let's see the correct answers and learn more
      </div>

      <v-card
        v-for="(result, index) in results.answers"
        :key="index"
        class="w-100 mx-auto mt-5"
        max-width="1200"
        color="secondary"
      >
        <v-card-title class="page-title-shadow mb-3">
          {{ result.question }}
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col
              v-for="(option, i) in result.answersList"
              :key="i"
              cols="6"
            >
              <v-card
                variant="tonal"
                class="mx-auto cursor-pointer h-100"
                :class="i === result.correctAnswer ? 'bg-green' : result.answer === i ? 'bg-red' : 'inactive-option'"
              >
                <v-card-text>
                  {{ option }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <div
        class="d-flex align-center justify-center mt-5"
      >
        <UIAnimatedGradientButton @click="handleClick">
          Try Again
        </UIAnimatedGradientButton>
      </div>
    </section>
  </section>
</template>

<script setup>

definePageMeta({
  middleware: 'auth'
})

const router = useRouter()

const results = ref(JSON.parse(localStorage.getItem('results')))

const handleClick = () => {
  localStorage.removeItem('results')

  router.push({path: '/game'});
}
</script>