<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
    >
      <v-card class="elevation-6 mt-10">
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="bg-blue-grey-lighten-4"
              >
                <v-card-text class="mt-12">
                  <h1 class="text-center mb-3">
                    Login in to Your Account
                  </h1>
                  <h3 class="text-center  grey--text ">
                    Log in to your account so you can play the best Quizes
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
                        v-model="signInState.email"
                        label="Email"
                        variant="outlined"
                        dense
                        color="purple-darken-4"
                        autocomplete="false"
                        class="mt-16"
                        :error="v2$.$errors.email"
                        :error-messages="getErrorMessage(v2$, 'email')"
                        @input="v2$.email.$touch"
                      />
                      <v-text-field
                        v-model="signInState.password"
                        label="Password"
                        variant="outlined"
                        dense
                        color="purple-darken-4"
                        autocomplete="false"
                        class="mt-4"
                        type="password"
                        :error="v2$.$errors.password"
                        :error-messages="getErrorMessage(v2$, 'password')"
                        @input="v2$.password.$touch"
                      />

                      <span
                        v-if="signInErrorResponse"
                        class="text-red"
                      >
                        {{ signInErrorResponse }}
                      </span>

                      <v-row>
                        <v-col
                          cols="12"
                          class="my-4 text-right text-gray"
                        >
                          <span
                            class="cursor-pointer"
                            @click="handleGoToReset"
                          >
                            Forgot password?
                          </span>
                        </v-col>
                      </v-row>

                      <v-btn
                        color="purple-darken-4"
                        dark
                        block
                        tile
                        :disabled="v2$.$invalid"
                        @click="onSignIn"
                      >
                        Log in
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="bg-secondary rounded-bl-xl"
              >
                <div
                  class="text-center"
                  style="padding: 200px 0;"
                >
                  <v-card-text class="white--text">
                    <h2 class="text-center mb-3">
                      Don't Have an Account Yet?
                    </h2>
                    <h4>
                      Let's get you all set up so you can start creating your account
                    </h4>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn
                      tile
                      outlined
                      dark
                      @click="onTabChange(2)"
                    >
                      SIGN UP
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="2">
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="bg-secondary rounded-br-xl"
              >
                <div
                  class="text-center"
                  style="padding: 200px 0;"
                >
                  <v-card-text class="white--text">
                    <h2 class="text-center mb-3">
                      Already Signed up?
                    </h2>
                    <h4 class="text-center">
                      Log in to your account
                    </h4>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn
                      tile
                      outlined
                      dark
                      @click="onTabChange(1)"
                    >
                      Log in
                    </v-btn>
                  </div>
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
                class="bg-blue-grey-lighten-4"
              >
                <v-card-text class="mt-12">
                  <h1 class="text-center mb-3">
                    Sign Up for an Account
                  </h1>
                  <h3 class="text-center grey--text mb-12">
                    Let's get you all set up so you can play the best Quizes
                  </h3>
                  <v-row
                    align="center"
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="8"
                    >
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                            v-model="signUpState.firstName"
                            label="First Name"
                            variant="outlined"
                            dense
                            color="purple-darken-4"
                            autocomplete="false"
                            class="mt-4"
                            :error="v$.$errors.firstName"
                            :error-messages="getErrorMessage(v$, 'firstName')"
                            @input="v$.firstName.$touch"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                            v-model="signUpState.lastName"
                            label="Last Name"
                            variant="outlined"
                            dense
                            color="purple-darken-4"
                            autocomplete="false"
                            class="mt-4"
                            :error="v$.$errors.lastName"
                            :error-messages="getErrorMessage(v$, 'lastName')"
                            @input="v$.lastName.$touch"
                          />
                        </v-col>
                      </v-row>
                      <v-text-field
                        v-model="signUpState.email"
                        label="Email"
                        variant="outlined"
                        dense
                        color="purple-darken-4"
                        autocomplete="false"
                        class="mt-2"
                        :error="v$.$errors.email"
                        :error-messages="getErrorMessage(v$, 'email')"
                        @input="v$.email.$touch"
                      />
                      <v-text-field
                        v-model="signUpState.password"
                        label="Password"
                        variant="outlined"
                        color="purple-darken-4"
                        autocomplete="false"
                        type="password"
                        class="mt-2"
                        :error="v$.$errors.password"
                        :error-messages="getErrorMessage(v$, 'password')"
                        @input="v$.password.$touch"
                      />

                      <span
                        v-if="signUpErrorResponse"
                        class="text-red"
                      >
                        {{ signUpErrorResponse }}
                      </span>

                      <v-btn
                        color="purple-darken-4"
                        dark
                        block
                        tile
                        class="mt-2"
                        :disabled="v$.$invalid"
                        @click="onSignUp"
                      >
                        Sign up
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {useVuelidate} from '@vuelidate/core';
import {required, email, minLength, helpers} from '@vuelidate/validators';
import {useFetchWithHeaders} from '~/hooks';

definePageMeta({
  middleware: 'auth'
})

const router = useRouter()

const step = ref(1)
const signInErrorResponse = ref('')
const signUpErrorResponse = ref('')

const signUpState = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

const signInState = ref({
  email: '',
  password: '',
})

const signInRules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: minLength(6),
    },
  };
});

const signUpRules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage('The firstname field is required', required),
      minLength: minLength(4),
    },
    lastName: {
      required: helpers.withMessage('The lastname field is required', required),
      minLength: minLength(4),
    },
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: minLength(6),
    },
  };
});

const onTabChange = (value) => {
  step.value = value
}

const getErrorMessage = (v, name) => {
  return v.$errors.find(el => el.$property === name)?.$message
}

const v$ = useVuelidate(signUpRules, signUpState)
const v2$ = useVuelidate(signInRules, signInState)

const onSignIn = async () => {
  const {data: response, error:errorResponse} = await useFetchWithHeaders('/login', {
    body: signInState.value,
    method: 'POST',
  })
  
  if (errorResponse.value) {
    signInErrorResponse.value = errorResponse.value.data.message
    return
  }

  if (response.value && response.value?.status === 'SUCCESS') {
    signInErrorResponse.value = ''

    await localStorage.setItem('access-token', response.value?.payload)

    await router.push({path: '/'})
  }
}

const onSignUp = async () => {
  const {error:errorResponse} = await useFetchWithHeaders('/registration', {
    body: signUpState.value,
    method: 'POST',
  });


  if (errorResponse.value) {
    signUpErrorResponse.value = errorResponse.value.data.message
  }
}

const handleGoToReset = async () => {
  await router.push({path: '/resetPasswordMail'})
}
</script>

<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>
