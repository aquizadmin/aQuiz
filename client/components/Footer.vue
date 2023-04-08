<template>
  <footer class="position-relative">
    <div class="d-flex flex-column w-100">
      <v-container>
        <v-divider
          thickness="2px"
          color="rgba(231, 231, 231, 0.24)"
        />

        <div class="d-flex items-center justify-center pt-10">
          <span>
            Get connected with us on social networks!
          </span>

          <v-spacer />

          <div
            class="d-flex items-center"
            style="z-index: 2"
          >
            <v-btn
              v-for="(icon, index) in icons"
              :key="icon"
              :class="index + 1 === icons.length ? 'ml-4' : 'mx-4'"
              :icon="icon"
              variant="plain"
              size="small"
              role="link"
              aria-label="Link"
            />
          </div>
        </div>
      </v-container>

      <UICircleShadow
        :right="'15px'"
      />

      <div
        class="w-100 bg-secondary py-3"
        style="z-index: 2"
      >
        <v-container>
          <v-row
            align="center"
            justify="space-between"
          >
            <v-col>
              <v-row>
                <v-col>
                  Privacy Policy
                </v-col>

                <v-col>
                  About us
                </v-col>
              </v-row>
            </v-col>
            <v-col
              class="d-flex justify-end"
              style="color: #C0C0C0"
            >
              @ {{ new Date().getFullYear() }} All rights reserved
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>