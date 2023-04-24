import {useFetchWithHeaders} from '~/hooks';

export default defineNuxtRouteMiddleware(async () => {
  const token = localStorage.getItem('access-token')
  const isLoggedIn = ref(false);

  if (!!token || (token && ['undefined', 'null'].includes(token))) {
    const {data: me, error: errorResponse} = await useFetchWithHeaders('/users/me', {
      method: 'GET',
    })

    isLoggedIn.value = !!me.value && !errorResponse.value
  }

  if (isLoggedIn.value) {
    return navigateTo('/')
  }
})