<template>
  <section class="confirm-section d-flex flex-column align-center justify-center">
    <v-img
      v-if="errorResponse"
      width="100%"
      height="200"
      cover
      src="/images/incorrect.jpg"
      lazy-src="/images/incorrect.jpg"
    />

    <span
      class="text-left mt-3 confirm-section-text"
      :class="errorResponse ? 'text-red': ''"
    >
      {{ errorResponse ? errorResponse.data.message: 'Now You can login to Your account' }}
    </span>
      
    <UIGradientButton
      v-if="response"
      class="mt-4"
      @click="handleClick"
    >
      Go To Login
    </UIGradientButton>
  </section>
</template>

<script setup>
import {useFetchWithHeaders} from '~/hooks';

definePageMeta({
  middleware: 'auth'
})

const { path } = useRoute()
const router = useRouter()
const token = path.split('/').at(-1)

const {data: response, error:errorResponse} = await useFetchWithHeaders('/confirmEmail', {
  body: { token },
  method: 'POST',
});

const handleClick = () => {
  router.push({path: '/login'})
}
</script>

<style scoped lang="scss">
.confirm-section {
  width: 100%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &-text {
    font-size: 20px;
  }
}
</style>