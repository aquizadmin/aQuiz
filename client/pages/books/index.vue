<template>
  <section>
    <div class="d-flex align-center justify-center flex-column my-5">
      <div class="page-blog-title mb-3">
        Select Category For Getting Books
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

    <v-row v-if="bookItems.length">
      <v-col
        v-for="(book, index) in bookItems"
        :key="index"
        cols="4"
      >
        <v-card
          class="mx-auto"
        >
          <v-img
            :src="book.imageURl?.replace(undefined, book.bookURL)"
            :lazy-src="book.imageURl?.replace(undefined, book.bookURL)"
            height="300px"
            cover
          />

          <v-card-title :title="book.name">
            {{ book.name }}
          </v-card-title>

          <v-card-subtitle>
            Category: {{ book.category }}
          </v-card-subtitle>

          <v-card-actions class="pt-5">
            <UIGradientButton
              class="w-100"
              @click="handleOpenBook(book.bookUrl?.replace(undefined, book.imageURL))"
            >
              Read
            </UIGradientButton>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div
      v-if="bookItems.length"
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
      No Books By Category: <strong class="text-pink-darken-3">{{ technology }}</strong> Yet
    </div>

    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
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
      <embed
        :src="bookSrc"
        type="application/pdf"
        height="100%"
      >
    </v-dialog>
  </section>
</template>
<script setup>
import {useFetchWithHeaders} from "~/hooks";

definePageMeta({
  middleware: 'auth',
})

const technology = ref()
const itemsPerPage = ref(3)
const pageNumber = ref(1)
const pageCount = ref(0)
const bookItems = ref([])

const dialog = ref(false)
const bookSrc = ref('')

const {data: technologies} = useFetchWithHeaders('/questions/getAllCategories', {
  method: 'GET',
})

const loadItems = async (page) => {
  const {data: response} = await useFetchWithHeaders(`/books/${page}/${itemsPerPage.value}/${technology.value || ''}`, {
    method: 'GET',
  })

  const {books, pagesCount} = await response.value?.payload

  if (await response.value) {
    bookItems.value = books
    pageCount.value = pagesCount
    pageNumber.value = page
  }

}
const handleOpenBook = (path) => {
  bookSrc.value = path
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