export default defineNuxtRouteMiddleware((to) => {
  const isLoggedIn = localStorage.getItem('access-token')
  if (!isLoggedIn) {
    return navigateTo('/login')
  }

  if (!!isLoggedIn && (to.fullPath === '/login' || to.fullPath.includes('/resetPassword') || to.fullPath.includes('/resetPasswordMail') || to.fullPath.includes('/confirmEmail'))) {
    return navigateTo('/');
  }
})