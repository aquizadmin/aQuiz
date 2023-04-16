<template>
  <PageHero
    :title="results.length ? 'Good ' : 'Try '"
    :gradient-title="results.length ? 'Game!' : 'Again!'"
    :description="results.length ? `Let's see the results.` : `You didn't select any answer. Don't give up. Let's try again`"
    image="/images/page-hero/finish-game.jpg"
    :image-cover-fit="true"
  />

  <v-card
    v-for="(result, index) in results"
    :key="index"
    class="mx-auto mt-5"
    max-width="1200"
    color="secondary"
  >
    <v-card-title class="page-title-shadow mb-3">
      {{ result.question }}
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col
          v-for="(option, index) in result.answersList"
          :key="index"
          cols="6"
        >
          <v-card
            variant="tonal"
            class="mx-auto cursor-pointer h-100"
            :class="index === result.correctAnswer ? 'bg-green' : result.answer === index ? 'bg-red' : 'inactive-option'"
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
</template>

<script setup>
const router = useRouter()

const results = ref(JSON.parse(localStorage.getItem('results')).answers)

const handleClick = () => {
  localStorage.removeItem('results')

  router.push({path: '/game'});
}
</script>