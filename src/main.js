import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueParticles from 'vue-particles'
import VueNavigationBar from 'vue-navigation-bar'
import VTooltip from 'v-tooltip'
import axios from 'axios'

import Home from './views/Home.vue'
import About from './views/About.vue'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab, far)

Vue.component('font-awesome-icon', FontAwesomeIcon)
/* End Font Awesome */

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueParticles)
Vue.use(VTooltip)
Vue.component("vue-navigation-bar", VueNavigationBar)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})

Vue.prototype.axios = axios

new Vue({
  data: {
    title: "j0hnta's website"
  },
  router,
  render: h => h(App),
}).$mount('#app')
