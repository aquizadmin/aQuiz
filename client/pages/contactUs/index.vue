<template>
  <section>
    <PageHero
      title="Contact "
      gradient-title="Us"
      description="Contact with Us with your suggestion and top of them will be in the Home Page"
      image="/images/page-hero/contact-us.jpg"
      :image-cover-fit="true"
    />

    <v-textarea
      v-model="suggestion"
      label="Suggestion"
      variant="solo"
      class="mt-3"
      hide-details
    />

    <span
      style="height: 20px"
      class="d-block my-3 "
      :class="isVisibleSuggestionSuccessMessage ? 'text-green' : 'text-red text-capitalize'"
    >
      {{ isVisibleSuggestionSuccessMessage ? 'The Suggestion is sent successfully!' : suggestionErrorResponse }}
    </span>

    <div class="d-flex align-center justify-end">
      <UIGradientButton
        :disabled="!suggestion"
        @click="handleSubmit"
      >
        Send
      </UIGradientButton>
    </div>
  </section>
</template>

<script setup>
import {useFetchWithHeaders} from '~/hooks';

definePageMeta({
  middleware: 'auth'
})

const suggestion = ref('')
const suggestionErrorResponse = ref('')
const isVisibleSuggestionSuccessMessage = ref(false)

const handleSubmit = async () => {
  const {data: response, error: errorResponse} = await useFetchWithHeaders('/users/comment', {
    body: {comment: suggestion.value},
    method: 'PUT',
  })

  setTimeout(() => {
    isVisibleSuggestionSuccessMessage.value = false
    suggestionErrorResponse.value = ''
  }, 5000)

  if (response.value && response.value?.status === 'ERROR') {
    suggestionErrorResponse.value = response.value.message
    isVisibleSuggestionSuccessMessage.value = false
    return
  }

  if (errorResponse.value && errorResponse.value.data.message) {
    suggestionErrorResponse.value = errorResponse.value.data.message
    isVisibleSuggestionSuccessMessage.value = false
    return
  }

  suggestion.value = ''
  isVisibleSuggestionSuccessMessage.value = true
  suggestionErrorResponse.value = ''
}
</script>