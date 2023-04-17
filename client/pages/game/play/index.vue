<template>
  <v-card
    class="mx-auto mt-10"
    max-width="1200"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="/images/pages/play/quiz-intro.png"
      lazy-src="/images/pages/play/quiz-intro.png"
      cover
    >
      <div class="d-flex justify-space-between align-end timer-block">
        <v-card-title class="page-title-shadow">
          {{ game[current].question }}
        </v-card-title>

        <v-progress-circular
          :rotate="360"
          :size="75"
          :width="3"
          class="progress ma-2"
          color="rgba(215, 29, 97)"
          :model-value="(getCurrentTime(timer) * 100) / query.duration"
        >
          {{ String(timer.minutes.value).padStart(2, '0') }} : {{
            String(timer.seconds.value).padStart(2, '0')
          }}
        </v-progress-circular>
      </div>
    </v-img>

    <v-card-subtitle class="mt-3 text-white opacity-100">
      Select correct answer
    </v-card-subtitle>

    <v-card-text>
      <v-row>
        <v-col
          v-for="(option, index) in game[current].answers"
          :key="index"
          cols="6"
        >
          <v-card
            variant="tonal"
            class="mx-auto cursor-pointer h-100"
            :class="answers[current].answer === option ? 'active-option text-white' : 'inactive-option'"
            @click="handleSelectAnswer(game[current]._id, option, index, current)"
          >
            <v-card-text>
              {{ option }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider
      thickness="4px"
      color="rgba(231, 231, 231, 0.24)"
    />
    <v-card-actions class="justify-end pa-4">
      <UIGradientButton
        v-if="current + 1 < answers.length"
        class="w-25"
        :disabled="!answers[current].answer"
        @click="nextQuestion"
      >
        Next
      </UIGradientButton>

      <UIGradientButton
        v-else
        class="w-25"
        :disabled="!answers[current].answer"
        @click="handleFinishGame"
      >
        Finish
      </UIGradientButton>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {useFetchWithHeaders} from '~/hooks';
import {useTimer} from 'vue-timer-hook';

definePageMeta({
  middleware: 'auth'
})

const router = useRouter()
const {query} = useRoute()

const {data: game} = await useFetchWithHeaders('/game/startGame', {
  body: query,
  method: 'POST',
})

const current = ref(0);
const answers = ref(game.value.map(question => {
  return {
    _id: question._id,
    answer: '',
    answerIndex: -1
  }
}));

const time = new Date();
time.setSeconds(time.getSeconds() + +query.duration);
const timer = useTimer(time)

const handleSelectAnswer = (_id, answer, answerIndex, index) => {
  answers.value[index] = {_id, answer, answerIndex}
}

const nextQuestion = () => {
  current.value++
}

const getCurrentTime = (time) => {
  return time.minutes.value + time.seconds.value
}

const handleFinishGame = async () => {
  const finishGameData = answers.value.map(answer => {
    return {
      _id: answer._id,
      answer: answer.answerIndex,
    }
  })

  const {data: end} = await useFetchWithHeaders('/game/finishGame', {
    body: {answers: finishGameData},
    method: 'POST',
  });

  end.value?.answers.map(el => {
    const findQuestion = game.value.find(elem => elem._id === el._id)
    el.question = findQuestion.question
    el.answersList = findQuestion.answers
  })

  localStorage.setItem('results', JSON.stringify(end.value))

  await router.push({path: '/game/finish'});
}

onMounted(() => {
  watchEffect(async () => {
    if (timer.isExpired.value) {
      await handleFinishGame()
    }
  })
})
</script>