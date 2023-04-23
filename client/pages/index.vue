<template>
  <PageHero
    title="Discover, Learn and Get Acquainted with new "
    gradient-title="Languages"
    image="/images/page-hero/dashboard.jpg"
    :image-cover-fit="true"
  />
    
  <section class="d-flex flex-column align-center my-10">
    <h2 class="page-title mb-5">
      Languages and Technologies
    </h2>

    <v-carousel
      v-if="technologies?.payload.length"
      cycle
      height="400"
      hide-delimiters
      :show-arrows="technologies?.payload.length && Math.ceil(technologies?.payload.length / perPage) > 1 ? 'hover' : false"
      class="py-5"
    >
      <v-carousel-item
        v-for="(slide, i) in Math.ceil(technologies?.payload.length / perPage)"
        :key="i"
      >
        <v-row>
          <v-col
            v-for="(slideItem, index) in technologies?.payload.slice(i * perPage, i * perPage + perPage)"
            :key="index"
          >
            <v-card
              class="mx-auto"
              max-width="400"
              color="secondary"
            >
              <v-img
                class="align-end text-white"
                height="200"
                :src="`/images/pages/dashboard/technologies/${slideItem.toLowerCase()}.png`"
                :lazy-src="`/images/pages/dashboard/technologies/${slideItem.toLowerCase()}.png`"
              >
                <v-card-title>
                  {{ slideItem }}
                </v-card-title>
              </v-img>

              <v-card-text class="pt-4">
                Practise the {{ slideItem }} with US!!!
              </v-card-text>

              <v-card-actions>
                <UIGradientButton
                  class="w-100"
                  @click="handleClick"
                >
                  Play
                </UIGradientButton>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </section>
    
  <section class="d-flex flex-column align-center my-10">
    <h2 class="page-title mb-5">
      Top Comments
    </h2>

    <v-row
      align="stretch"
      justify="space-around"
      class="w-100"
    >
      <v-col
        v-for="(comment, index) in comments"
        :key="index"
        class="h-100"
      >
        <v-card
          class="mx-auto py-4 rounded-lg"
          color="secondary"
          theme="dark"
        >
          <v-card-text
            class="text-h5 py-2 text-truncate"
            style="max-width: 400px"
          >
            {{ comment.message }}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="w-100">
              <template #prepend>
                <v-avatar
                  color="grey-darken-3"
                  image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                />
              </template>

              <v-list-item-title>
                {{ comment.name }}
              </v-list-item-title>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>

  <section class="d-flex flex-column align-center py-8">
    <v-row
      align="center"
      class="w-100 py-10"
    >
      <v-col>
        <v-img
          alt="Blog image"
          class="mr-auto"
          src="/images/pages/dashboard/page-blog.png"
          lazy-src="/images/pages/dashboard/page-blog.png"
          height="350px"
        />
      </v-col>

      <v-col
        cols="8"
        class="d-flex flex-column align-self-stretch justify-center"
      >
        <div>
          <h3 class="page-blog-subtitle mb-7">
            Learn with us
          </h3>

          <p class="page-blog-description">
            Learn with us new technologies and new programming languages with practising.
          </p>
        </div>

        <UIGradientButton
          class="w-25 mt-12"
          @click="handleClick"
        >
          Play
        </UIGradientButton>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import {useFetchWithHeaders} from "~/hooks";

definePageMeta({
  middleware: 'auth'
})

const router = useRouter()

const perPage = ref(3)

const {data: technologies} = useFetchWithHeaders('/questions/getAllCategories', {
  method: 'GET',
})

const comments = ref([
  { name: 'Bill Gates', message: 'Good App' },
  { name: 'Steve Jobs', message: 'Good App' },
  { name: 'Mark Zuckerberg', message: 'Good App' },
])

const handleClick = () => {
  router.push({path: '/game'});
}
</script>
