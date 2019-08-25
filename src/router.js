import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const LoginPage = () => import('./pages/auth/LoginPage.vue')
const MainPage = () => import('./pages/MainPage.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login_page',
      component: LoginPage,
    },
    {
      path: '/main',
      name: 'main_page',
      component: MainPage,
    },
  ],
})
