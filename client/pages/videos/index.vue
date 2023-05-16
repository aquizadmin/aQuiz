<template>
  <div class="d-flex align-center justify-center flex-column my-5">
    <div class="page-blog-title mb-3">
      Select Category For Getting Videos
    </div>

    <v-select
      v-model="technology"
      aria-selected="false"
      hide-details
      label="Category"
      :items="technologies?.payload"
      variant="underlined"
      color="white"
      class="w-100"
      clearable
    />
  </div>

  <v-row v-if="videoItems.length">
    <v-col
      v-for="(video, index) in videoItems"
      :key="index"
      cols="4"
    >
      <v-card
        class="mx-auto"
      >
        <v-img
          :src="`https://img.youtube.com/vi/${getId(video.url)}/maxresdefault.jpg`"
          :lazy-src="`https://img.youtube.com/vi/${getId(video.url)}/maxresdefault.jpg`"
          height="200px"
          cover
        />

        <v-card-title :title="video.name">
          {{ video.name }}
        </v-card-title>

        <v-card-subtitle>
          Category: {{ video.category }}
        </v-card-subtitle>

        <v-card-actions class="pt-5">
          <UIGradientButton
            class="w-100"
            @click="handleOpenVideo(getId(video.url))"
          >
            Watch
          </UIGradientButton>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <div
    v-if="videoItems.length"
    class="mt-5 d-flex align-center justify-lg-space-between"
  >
    <v-btn
      variant="text"
      :disabled="pageNumber <= 1"
      @click="loadItems(pageNumber - 1)"
    >
      Prev
    </v-btn>

    <v-btn
      :disabled="pageNumber >= pageCount"
      variant="text"
      @click="loadItems(pageNumber + 1)"
    >
      Next
    </v-btn>
  </div>
  <div v-else>
    No Videos By Category: <strong class="text-pink-darken-3">{{ technology }}</strong> Yet
  </div>

  <v-dialog
    v-model="dialog"
    width="80%"
    height="60%"
    content-class="bg-primary"
    transition="dialog-bottom-transition"
  >
    <v-toolbar
      dark
      color="primary"
    >
      <v-spacer />

      <v-toolbar-items>
        <v-btn
          icon
          dark
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <iframe
      :src="`https://www.youtube.com/embed/${videoSrc}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      height="100%"
      class="ma-3"
    />
  </v-dialog>
</template>
<script setup>
import {useFetchWithHeaders} from "~/hooks";

const technology = ref()
const itemsPerPage = ref(3)
const pageNumber = ref(1)
const pageCount = ref(0)
const videoItems = ref([])

const dialog = ref(false)
const videoSrc = ref('')

const {data: technologies} = useFetchWithHeaders('/questions/getAllCategories', {
    method: 'GET',
})

const loadItems = async (page) => {
    const {data: response} = await useFetchWithHeaders(`/videos/${page}/${itemsPerPage.value}/${technology.value || ''}`, {
        method: 'GET',
    })

    const {videos, pagesCount} = await response.value?.payload

    if (await response.value) {
        videoItems.value = videos
        pageCount.value = pagesCount
        pageNumber.value = page
    }

}

const getId = (path) => {
    return path.replace('https://www.youtube.com/watch?v=', '').split('&')[0]
}
const handleOpenVideo = (id) => {
    videoSrc.value = id
    dialog.value = true
}

watch(technology, async () => {
    await loadItems(1)
})

onMounted(async () => {
    await loadItems(1)
})
</script>

<style scoped>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
}
</style>