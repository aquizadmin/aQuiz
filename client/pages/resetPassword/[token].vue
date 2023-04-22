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
                Reset Password
              </h1>
              <h3 class="text-center grey--text">
                Type your new password
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
                    v-model="resetPasswordState.password"
                    label="Password"
                    variant="outlined"
                    dense
                    type="password"
                    color="purple-darken-4"
                    autocomplete="false"
                    class="mt-16"
                    :error="v$.$errors.password"
                    :error-messages="getErrorMessage('password')"
                    @input="v$.password.$touch"
                  />

                  <v-text-field
                    v-model="resetPasswordState.confirmPassword"
                    label="Confirm Password"
                    variant="outlined"
                    dense
                    type="password"
                    color="purple-darken-4"
                    autocomplete="false"
                    class="mt-4"
                    :error="v$.$errors.confirmPassword"
                    :error-messages="getErrorMessage('confirmPassword')"
                    @input="v$.confirmPassword.$touch"
                  />

                  <span
                    v-if="resetPasswordErrorResponse"
                    class="d-block text-red mb-3"
                  >
                    {{ resetPasswordErrorResponse }}
                  </span>

                  <v-btn
                    color="purple-darken-4"
                    dark
                    block
                    tile
                    class="mt-4"
                    :disabled="v$.$invalid"
                    @click="onResetPassword"
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
import {required, helpers, sameAs, minLength} from '@vuelidate/validators';
import {useFetchWithHeaders} from '~/hooks';

definePageMeta({
  middleware: 'auth'
})

const { path } = useRoute()
const router = useRouter()
const token = path.split('/').at(-1)

const resetPasswordErrorResponse = ref('')
const resetPasswordState = ref({
  password: '',
  confirmPassword: '',
})

const resetPasswordRules = computed(() => {
  return {
    password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: minLength(6),
    },
    confirmPassword: {
      required: helpers.withMessage('The Confirm password field is required', required),
      sameAs: helpers.withMessage('The Confirm password should be same as password field', sameAs(resetPasswordState.value.password)),
    },
  };
});

const getErrorMessage = (name) => {
  return v$.value.$errors.find(el => el.$property === name)?.$message
}

const v$ = useVuelidate(resetPasswordRules, resetPasswordState)

const onResetPassword = async () => {
  const {data: response, error:errorResponse} = await useFetchWithHeaders('/resetPassword', {
    body: {
      token,
      password: resetPasswordState.value.password,
    },
    method: 'POST',
  })

  if (errorResponse.value) {
    resetPasswordErrorResponse.value = errorResponse.value.data.message
    return
  }


  if (response.value && response.value?.status === 'SUCCESS') {
    resetPasswordErrorResponse.value = ''

    await router.push({path: '/login'})
  }
}

</script>