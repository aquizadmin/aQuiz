<template>
  <div>
    <v-container>
      <v-row align="center" justify="center" >
        <v-col cols="12" sm="10">
          <v-card class="elevation-6 mt-10"  >
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="6" class="bg-blue-grey-lighten-4">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">Login in to Your Account</h4>
                      <h6 class="text-center  grey--text ">
                        Log in to your account so you can continue builiding <br>
                        and editing your onboarding flows
                      </h6>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">

                          <v-text-field
                              label="Email"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-16"
                          />
                          <v-text-field
                              label="Password"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              type="password"

                          />
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                  label="Remember Me"
                                  class="mt-n1"
                                  color="blue"
                              > </v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text">Forgot password</span>
                            </v-col>
                          </v-row>
                          <v-btn color="#4A148C" dark block tile>Log in</v-btn>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6" class="bg-purple-darken-4 rounded-bl-xl" >
                    <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">Don't Have an Account Yet?</h3>
                        <h6>Let's get you all set up so you can start creating your your first<br>
                          onboarding experience
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row >
                  <v-col cols="12" md="6" class="bg-purple-darken-4 rounded-br-xl">
                    <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">Alredy Signed up?</h3>
                        <h6 class="text-center">
                          Log in to your account so you can continue building and<br>
                          editing your onboarding flows
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Log in</v-btn>
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6" class="bg-blue-grey-lighten-4">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">Sign Up for an Account</h4>
                      <h6 class="text-center  grey--text ">Let's get you all set up so you can start creatin your <br>
                        first onboarding experiance
                      </h6>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                  label="First Name"
                                  outlined
                                  dense
                                  color="blue"
                                  autocomplete="false"
                                  class="mt-4"
                              />
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                  label="Last Name"
                                  outlined
                                  dense
                                  color="blue"
                                  autocomplete="false"
                                  class="mt-4"
                              />
                            </v-col>
                          </v-row>
                          <v-text-field
                              label="Email"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                          />
                          <v-text-field
                              label="Password"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              type="password"

                          />
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                  label="I Accept AAE"
                                  class="mt-n1"
                                  color="blue"
                              > </v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text ml-n4">Terms &Conditions</span>
                            </v-col>
                          </v-row>
                          <v-btn color="purple-darken-4" dark block tile>Sign up</v-btn>
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
    </v-container>
  </div>
</template>

<script>

export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  }

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
