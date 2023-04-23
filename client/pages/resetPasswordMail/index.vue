<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
    >
      <v-card class="elevation-0 bg-transparent mt-10">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            md="6"
            class="bg-blue-grey-lighten-4"
          >
            <v-card-text class="my-15">
              <h1 class="text-center mb-3">
                Reset Password Email
              </h1>
              <h3 class="text-center  grey--text ">
                Type your email for resetting your email
              </h3>
              <v-row
                align="center"
                justify="center"
              >
                <v-col
                  cols="12"
                  sm="8"
                >
                  <v-text-field
                    v-model="resetEmailState.email"
                    label="Email"
                    variant="outlined"
                    dense
                    color="purple-darken-4"
                    autocomplete="false"
                    class="mt-16"
                    :error="v$.$errors.email"
                    :error-messages="getErrorMessage('email')"
                    @input="v$.email.$touch"
                  />

                  <span
                    v-if="resetEmailErrorResponse"
                    class="d-block text-red mb-3"
                  >
                    {{ resetEmailErrorResponse }}
                  </span>

                  <span
                    v-if="successResponse"
                    class="d-block mb-3"
                  >
                    Please check your email.
                  </span>

                  <v-btn
                    color="purple-darken-4"
                    dark
                    block
                    tile
                    :disabled="v$.$invalid"
                    @click="onResetEmail"
                  >
                    Send
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {useVuelidate} from '@vuelidate/core';
import {required, email, helpers} from '@vuelidate/validators';
import {useFetchWithHeaders} from '~/hooks';

definePageMeta({
  middleware: 'login'
})

const resetEmailErrorResponse = ref('')
const successResponse = ref(false)

const resetEmailState = ref({
  email: '',
})

const resetEmailRules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
  };
});

const v$ = useVuelidate(resetEmailRules, resetEmailState)

const getErrorMessage = (name) => {
  return v$.value.$errors.find(el => el.$property === name)?.$message
}

const onResetEmail = async () => {
  const {data:response, error:errorResponse} = await useFetchWithHeaders('/resetPasswordMail', {
    body: resetEmailState.value,
    method: 'POST',
  });


  if (errorResponse.value) {
    resetEmailErrorResponse.value = errorResponse.value.data.message
    successResponse.value = false
    return
  }

  if (response) {
    successResponse.value = true
  }
}
</script>