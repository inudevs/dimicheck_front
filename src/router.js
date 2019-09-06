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
      name: 'loginpage',
      component: LoginPage,
    },
    {
      path: '/main',
      name: 'mainpage',
      component: MainPage,
    },
  ],
})
