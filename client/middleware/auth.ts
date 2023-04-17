export default defineNuxtRouteMiddleware((to) => {
  const isLoggedIn = localStorage.getItem('access-token')
  if (!isLoggedIn) {
    return navigateTo('/login')
  }
})