import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/ko'
import VueMoment from 'vue-moment'

import App from './App.vue'
import router from './router'
import store from './store'

import './scss/fonts.scss'

Vue.config.productionTip = false

Vue.use(VueMoment, {
  moment,
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
