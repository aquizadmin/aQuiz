<template>
  <section class="my-5">
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items-length="totalItems"
      :items="serverItems"
      :loading="loading"
      class="elevation-1 custom-data-table animated-background"
      item-key="_id"
      item-value="name"
      @update:options="loadItems"
    >
      <template #[`item.position`]="{item, index}">
        <div
          :class="userData._id === item.value._id && 'position-relative d-flex align-center h-100 bg-secondary px-4 mx-n4 custom-data-table-td'"
        >
          <v-btn
            icon
            density="compact"
            class="elevation-0 mr-2"
            :color="getColor(itemsPerPage * (pageNumber - 1) + index + 1)"
          >
            {{ itemsPerPage * (pageNumber - 1) + index + 1 }}
          </v-btn>

          <v-icon
            :color="getColor(itemsPerPage * (pageNumber - 1) + index + 1)"
          >
            mdi-medal
          </v-icon>
        </div>
      </template>
      <template #[`item.firstName`]="{item}">
        <div
          :class="userData._id === item.value._id && 'position-relative d-flex align-center h-100 bg-secondary px-4 mx-n4 custom-data-table-td'"
        >
          {{ item.value.firstName }}
        </div>
      </template>
      <template #[`item.lastName`]="{item}">
        <div
          :class="userData._id === item.value._id && 'position-relative d-flex align-center h-100 bg-secondary px-4 mx-n4 custom-data-table-td'"
        >
          {{ item.value.lastName }}
        </div>
      </template>
      <template #[`item.rating`]="{item}">
        <div
          :class="userData._id === item.value._id && 'position-relative d-flex align-center h-100 bg-secondary px-4 mx-n4 custom-data-table-td'"
        >
          {{ item.value.rating }}
        </div>
      </template>
    </v-data-table-server>
  </section>
</template>

<script setup>
import {useFetchWithHeaders} from "~/hooks";

definePageMeta({
  middleware: 'auth'
})

const token = localStorage.getItem('access-token')
const userData = ref({})

if (!!token || (token && ['undefined', 'null'].includes(token))) {
  const {data: response} = await useFetchWithHeaders('/users/me', {
    method: 'GET',
  })

  userData.value = response.value?.payload
}

const headers = ref([
  {
    title: '№',
    sortable: false,
    key: 'position',
    width: '10%',
  },
  {
    title: 'Firstname',
    sortable: false,
    key: 'firstName',
  },
  {
    title: 'Lastname',
    sortable: false,
    key: 'lastName',
  },
  {
    title: 'Rating',
    sortable: false,
    key: 'rating',
  },
])

const itemsPerPage = ref(10)
const totalItems = ref(0)
const loading = ref(true)
const serverItems = ref([])
const pageNumber = ref(0)

const loadItems = async ({ page, itemsPerPage }) => {
  loading.value = true

  const {data: response} = await useFetchWithHeaders(`/users/statistic/${page}/${itemsPerPage < 0 ? totalItems.value : itemsPerPage}`, {
    method: 'GET',
  })

  if (response.value?.payload) {
    serverItems.value = response.value.payload?.users
    totalItems.value = response.value.payload?.usersCount
    pageNumber.value = page

    setTimeout(() => {
      loading.value = false
    }, 2000)
  }
}

const getColor = (index) => {
  switch (index) {
    case 1:
      return 'amber-lighten-1'
    case 2:
      return 'blue-grey-lighten-1'
    case 3:
      return 'brown-darken-1'
    default:
      return 'transparent'
  }
}
</script>

<style lang="scss">
.custom-data-table {
  .v-data-table__td,
  .v-data-table__th {
    background: transparent !important;
  }

  &-td {
    z-index: 3;
    width: calc(100% + 32px);
  }

  .v-data-table-footer {
    z-index: 3;
    position: relative;
  }
}
</style>

